import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const LOCAL_ORIGIN = 'http://localhost:5173';

// Keep domain strings literal here so this script is not rewritten when it runs.
const DOMAIN = 'thecockroachjantaparty.org.in';
const REPLACEMENTS = [
  [`https://www.${DOMAIN}`, LOCAL_ORIGIN],
  [`http://www.${DOMAIN}`, LOCAL_ORIGIN],
  [`www.${DOMAIN}`, 'localhost:5173'],
  [`contact@${DOMAIN}`, 'contact@localhost'],
  [`info@${DOMAIN}`, 'info@localhost'],
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const selfPath = fileURLToPath(import.meta.url);
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|jsx|js|json|mjs|md)$/i.test(entry.name)) targets.push(full);
  }
}

walk(root);

let changed = 0;
for (const file of targets) {
  if (path.resolve(file) === selfPath) continue;

  let text = fs.readFileSync(file, 'utf8');
  if (!text.includes(DOMAIN)) continue;

  const before = text;
  for (const [from, to] of REPLACEMENTS) {
    text = text.split(from).join(to);
  }

  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated:', path.relative(root, file));
  }
}

console.log(`\nDone. ${changed} file(s) updated.`);
