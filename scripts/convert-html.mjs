import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Original static export was removed; keep a local copy as source.html if you need to re-run convert.
const sourceHtml = path.resolve(__dirname, '../source.html');
const outDir = path.resolve(__dirname, '../src/components/generated');

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  enctype: 'encType',
  novalidate: 'noValidate',
  crossorigin: 'crossOrigin',
  fetchpriority: 'fetchPriority',
  srcset: 'srcSet',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  playsinline: 'playsInline',
  acceptcharset: 'acceptCharset',
  formaction: 'formAction',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  inputmode: 'inputMode',
  datetime: 'dateTime',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'fill-opacity': 'fillOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'text-anchor': 'textAnchor',
  'xlink:href': 'xlinkHref',
  'xmlns:xlink': 'xmlnsXlink',
};

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'param', 'source', 'track', 'wbr',
]);

const SKIP_TAGS = new Set(['script', 'noscript']);

function camelAttr(name) {
  if (ATTR_MAP[name]) return ATTR_MAP[name];
  if (name.startsWith('aria-') || name.startsWith('data-')) return name;
  if (name.includes(':')) return name;
  if (name.includes('-')) {
    return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
  return name;
}

function jsxString(value) {
  return JSON.stringify(value);
}

function styleToJsx(styleStr) {
  const obj = {};
  styleStr.split(';').filter(Boolean).forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[camel] = val;
  });
  const entries = Object.entries(obj)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join(', ');
  return `{${entries}}`;
}

function fixAssetPath(value, attr) {
  if (!value) return value;
  if (attr === 'src' || attr === 'href') {
    if (value.startsWith('images/')) return '/' + value;
    if (value.startsWith('css/')) return '/' + value;
  }
  if (attr === 'srcset') {
    return value.replace(/\bimages\//g, '/images/');
  }
  return value;
}

function serializeText(text) {
  if (!text) return '';
  if (!/[{<>}&]/.test(text) && !text.trim().includes('\n')) {
    return text;
  }
  return `{${JSON.stringify(text)}}`;
}

function nodeToJsx(node, depth = 0) {
  if (node.type === 'text') {
    const text = node.data.replace(/\s+/g, (m, offset, str) => {
      if (offset === 0 || offset + m.length === str.length) return ' ';
      return ' ';
    });
    if (!text.trim()) return '';
    return serializeText(text);
  }

  if (node.type !== 'tag') return '';

  const tag = node.name;
  if (SKIP_TAGS.has(tag)) return '';

  const attrs = node.attribs || {};
  const attrParts = [];

  for (const [rawName, rawValue] of Object.entries(attrs)) {
    if (!/^[a-zA-Z[\-][a-zA-Z0-9:._-]*$/.test(rawName) && !rawName.startsWith('data-') && !rawName.startsWith('aria-')) {
      continue;
    }
    const name = camelAttr(rawName);
    if (name === 'nonce') continue;

    if (name === 'style') {
      attrParts.push(`style={${styleToJsx(rawValue)}}`);
      continue;
    }

    if (rawValue === '' || rawValue === rawName) {
      if (['hidden', 'required', 'disabled', 'checked', 'selected', 'multiple', 'open', 'defer', 'async'].includes(name) || name === 'noValidate') {
        attrParts.push(name);
        continue;
      }
    }

    const value = fixAssetPath(rawValue, rawName);
    attrParts.push(`${name}={${jsxString(value)}}`);
  }

  const attrStr = attrParts.length ? ' ' + attrParts.join(' ') : '';
  const children = (node.children || [])
    .map((child) => nodeToJsx(child, depth + 1))
    .filter(Boolean)
    .join('\n');

  if (VOID_TAGS.has(tag)) {
    return `<${tag}${attrStr} />`;
  }

  if (!children.trim()) {
    return `<${tag}${attrStr}></${tag}>`;
  }

  return `<${tag}${attrStr}>\n${children}\n</${tag}>`;
}

function htmlFragmentToJsx(html) {
  const $ = load(`<root>${html}</root>`, { decodeEntities: false }, false);
  const rootEl = $('root')[0];
  return (rootEl.children || [])
    .map((child) => nodeToJsx(child))
    .filter(Boolean)
    .join('\n');
}

function writeComponent(name, jsxBody, wrap = true) {
  const content = wrap
    ? `export default function ${name}() {\n  return (\n    <>\n${indent(jsxBody, 6)}\n    </>\n  );\n}\n`
    : jsxBody;
  fs.writeFileSync(path.join(outDir, `${name}.jsx`), content, 'utf8');
}

function indent(str, spaces) {
  const pad = ' '.repeat(spaces);
  return str
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n');
}

function sanitizeBrokenHtml(html) {
  return html.replace(
    /aria-label="Watch "[^>]*?player"=""[^>]*>/g,
    'aria-label="Watch featured video in the featured player">',
  );
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return match ? match[1] : html;
}

function stripNextArtifacts(html) {
  return html
    .replace(/<!--\$-->/g, '')
    .replace(/<!--\/\$-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<div hidden="">[\s\S]*?<\/div>/, '')
    .replace(/<input[^>]*name="\$ACTION[^"]*"[^>]*>/gi, '')
    .replace(/<input[^>]*name="\$ACTION_KEY"[^>]*>/gi, '');
}

function splitMainContent(mainHtml) {
  const parts = [];
  const markers = [
    { name: 'MainIntro', re: /^([\s\S]*?)<header/i },
    { name: 'SiteHeader', re: /<header[\s\S]*?<\/header>/i },
    { name: 'DisclaimerAside', re: /<aside[\s\S]*?<\/aside>/i },
    { name: 'LiveTicker', re: /<div class="relative bg-ink[\s\S]*?(?=<section)/i },
  ];

  let remaining = mainHtml;

  const mainOpen = remaining.match(/^<main[^>]*>/i)?.[0] ?? '<main id="main-content" class="min-h-screen bg-paper text-ink relative">';
  remaining = remaining.replace(/^<main[^>]*>/i, '');

  const footerMatch = remaining.match(/<footer[\s\S]*<\/footer>/i);
  const footerHtml = footerMatch?.[0] ?? '';
  remaining = remaining.replace(/<footer[\s\S]*<\/footer>/i, '');

  remaining = remaining.replace(/<\/main>\s*$/i, '');

  const sectionRegex = /<section[\s\S]*?(?=(?:<section|<footer|$))/gi;
  const sections = [...remaining.matchAll(sectionRegex)].map((m) => m[0]);

  const beforeSections = remaining.split(/<section/i)[0] ?? '';

  return {
    mainOpen,
    beforeSections,
    sections,
    footerHtml,
  };
}

function sectionName(html, index) {
  const idMatch = html.match(/\bid="([^"]+)"/);
  if (idMatch) {
    return idMatch[1]
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('');
  }
  const ariaMatch = html.match(/aria-label="Hero/i);
  if (ariaMatch) return 'Hero';
  if (/Latest protest update/i.test(html)) return 'ProtestUpdate';
  if (/top-patron-heading/i.test(html)) return 'TopPatrons';
  if (/revolutionaries-heading/i.test(html)) return 'Revolutionaries';
  return `Section${index + 1}`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  if (!fs.existsSync(sourceHtml)) {
    throw new Error(
      'Missing react-app/source.html. The original root index.html was removed; place a copy at react-app/source.html to re-run convert.'
    );
  }
  const html = fs.readFileSync(sourceHtml, 'utf8');
  let body = extractBody(sanitizeBrokenHtml(html));
  body = stripNextArtifacts(body);

  const mainMatch = body.match(/<main[\s\S]*<\/main>/i);
  const preMain = body.replace(mainMatch?.[0] ?? '', '').trim();
  const mainHtml = mainMatch?.[0] ?? body;

  const { mainOpen, beforeSections, sections, footerHtml } = splitMainContent(mainHtml);

  writeComponent('PreMain', htmlFragmentToJsx(preMain));
  writeComponent('MainIntro', htmlFragmentToJsx(beforeSections));

  sections.forEach((sectionHtml, i) => {
    const name = sectionName(sectionHtml, i);
    const jsx = htmlFragmentToJsx(sectionHtml);
    writeComponent(name, jsx);
    console.log('Section:', name, sectionHtml.length);
  });

  writeComponent('SiteFooter', htmlFragmentToJsx(footerHtml));

  const sectionImports = sections
    .map((sectionHtml, i) => {
      const name = sectionName(sectionHtml, i);
      return `import ${name} from './generated/${name}.jsx';`;
    })
    .join('\n');

  const sectionTags = sections
    .map((sectionHtml, i) => {
      const name = sectionName(sectionHtml, i);
      return `      <${name} />`;
    })
    .join('\n');

  const homePage = `import PreMain from './generated/PreMain.jsx';
import MainIntro from './generated/MainIntro.jsx';
import SiteFooter from './generated/SiteFooter.jsx';
${sectionImports}

export default function HomePage() {
  return (
    <>
      <PreMain />
      <main id="main-content" className="min-h-screen bg-paper text-ink relative">
        <MainIntro />
${sectionTags}
        <SiteFooter />
      </main>
    </>
  );
}
`;

  fs.writeFileSync(path.join(outDir, '..', 'HomePage.jsx'), homePage, 'utf8');

  const headMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/name="description" content="([^"]+)"/);
  const htmlClass = html.match(/<html[^>]*class="([^"]*)"/)?.[1] ?? '';
  const ldJson = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? '';

  fs.writeFileSync(
    path.join(__dirname, '../src/site-meta.json'),
    JSON.stringify({ title: headMatch?.[1], description: descMatch?.[1], htmlClass, ldJson }, null, 2),
    'utf8'
  );

  console.log('Done. Components written to', outDir);
  // Local dev: strip production domain references
  const { execSync } = await import('child_process');
  execSync('node scripts/replace-domain.mjs', { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' });
  execSync('node scripts/replace-brand.mjs', { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
