import fs from 'fs';
const files = [
  '../js/0ucje~-mc-1pt.js',
  '../js/0.67qgb5h09zj.js',
  '../js/10gnu_kapx5ts.js',
];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  for (const needle of ['Toggle menu', 'Close menu', 'mobile', 'menuOpen', 'setOpen', 'aria-expanded', 'fixed inset', 'lucide-x', 'Primary navigation']) {
    if (t.includes(needle)) console.log(f.split('/').pop(), 'has', needle);
  }
}

const t = fs.readFileSync('../js/0ucje~-mc-1pt.js', 'utf8');
const i = t.indexOf('Toggle menu');
if (i >= 0) console.log('\ncontext:', t.slice(i - 200, i + 800));
