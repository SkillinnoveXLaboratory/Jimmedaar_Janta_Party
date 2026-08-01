import fs from 'fs';
const t = fs.readFileSync('../js/0ucje~-mc-1pt.js', 'utf8');
const i = t.indexOf('c&&(0,t.jsx)("nav"');
console.log(t.slice(i, i + 2500));
