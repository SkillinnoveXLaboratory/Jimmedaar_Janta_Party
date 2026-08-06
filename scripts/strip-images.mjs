import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');

// Remove self-closing <img ... /> tags (possibly multiline)
function stripImgs(text) {
  return text.replace(/<img\b[\s\S]*?\/>/g, '');
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx|js)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

let changed = 0;
for (const file of walk(src)) {
  const before = fs.readFileSync(file, 'utf8');
  const after = stripImgs(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
    console.log('stripped imgs:', path.relative(root, file));
  }
}

// Update favicon
const indexHtml = path.join(root, 'index.html');
let html = fs.readFileSync(indexHtml, 'utf8');
html = html.replace(
  /<link rel="icon"[^>]*>/,
  '<link rel="icon" type="image/jpeg" href="/images/iconv1.jpeg" />'
);
fs.writeFileSync(indexHtml, html, 'utf8');
console.log('updated favicon in index.html');

// Update site-meta logo/image refs
const metaPath = path.join(src, 'site-meta.json');
let metaText = fs.readFileSync(metaPath, 'utf8');
metaText = metaText
  .split('/icon.svg')
  .join('/images/iconv1.jpeg')
  .split('/poster-solidarity.jpg')
  .join('/images/iconv1.jpeg');
fs.writeFileSync(metaPath, metaText, 'utf8');
console.log('updated site-meta.json');

console.log(`\nDone. ${changed} component file(s) updated.`);
