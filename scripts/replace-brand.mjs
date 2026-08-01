import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BRAND = 'Jimmedaar Janata Party';
const BRAND_UPPER = 'JIMMEDAAR';
const BRAND_PARTY_UPPER = 'JANATA PARTY';
const BRAND_HINDI = 'जिम्मेदार जनता पार्टी';
const ACRONYM = 'JJP';

// Longest / most specific matches first.
const REPLACEMENTS = [
  ['#CockroachJantaParty', '#JimmedaarJanataParty'],
  ['#cockroachjantaparty', '#jimmedaarjanataparty'],
  ['#cockroachparty', '#jimmedaarjanataparty'],
  ['Cockroach Tracker', 'Jimmedaar Tracker'],
  ['The Cockroach Janta Party', BRAND],
  ['the Cockroach Janta Party', BRAND],
  ['Cockroach Janta Party', BRAND],
  ['Cockroach Janata Party', BRAND],
  ['cockroach janta party', 'jimmedaar janata party'],
  ['cockroach janata party', 'jimmedaar janata party'],
  ['THE COCKROACH', BRAND_UPPER],
  ['JANTA PARTY', BRAND_PARTY_UPPER],
  ['कॉकरोच जनता पार्टी', BRAND_HINDI],
  ['TCJP', ACRONYM],
  ['Official CJP', `Official ${ACRONYM}`],
  ['CJP', ACRONYM],
  ['cockroach-janta-party', 'jimmedaar-janata-party'],
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const selfPath = fileURLToPath(import.meta.url);
const skipDirs = new Set(['node_modules', 'dist', '.git']);
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|jsx|js|json|mjs|md|css)$/i.test(entry.name)) targets.push(full);
  }
}

walk(root);

let changed = 0;
for (const file of targets) {
  if (path.resolve(file) === selfPath) continue;

  let text = fs.readFileSync(file, 'utf8');
  const before = text;

  for (const [from, to] of REPLACEMENTS) {
    if (text.includes(from)) {
      text = text.split(from).join(to);
    }
  }

  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated:', path.relative(root, file));
  }
}

console.log(`\nDone. ${changed} file(s) updated.`);
