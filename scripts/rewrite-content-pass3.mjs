import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');

const REPLACEMENTS = [
  ['The Growing Challenge of Division and Misinformation', 'Kisanon Ko Facility: Village Markets Strong'],
  ["The Digital Divide Behind India's Internet Revolution", 'Contract Coal Khatm: Clean Transparent Policy'],
  ["India's Cities Are Growing Faster Than They Can Cope", 'Garibon Ke Liye Rojgar: Block-Level Jobs'],
  ['Why India Needs Political and Electoral Reform', 'Jahrile Fruit Bechne Nahi Denge'],
  ['Justice Delayed Is Justice Denied in India', 'Sarkari School + Hospital: Equal Care'],
  ['Building India Beyond Highways and Headlines', 'Food Tax Kam: Relief on the Thali'],
  ["Women's Safety Is India's Development Issue", 'Badhti Mahangai Rokna: Price Control'],
  ['Jimmedaar Janata Party — kisi an agenda:', 'Jimmedaar Janata Party — aath agendas:'],
  [
    'No forms. No captchas. Website questions only — for the official movement, write to',
    'No forms. No captchas. Agenda questions welcome — for official party matters, write to',
  ],
  ['Going viral', 'Agenda videos'],
  ['The movement on', 'The agendas on'],
  [
    'Clips from rallies, roasts, and the internet doing what the internet does best — spreading the painfully true parts faster than any manifesto PDF.',
    'Clips on farmers, jobs, schools, hospitals, food tax and mahangai — Jimmedaar Janata Party isi agenda per kaam karega.',
  ],
  ['More from Jimmedaar', 'More from the agendas'],
  ['In their footsteps', 'Our promise'],
  ['Revolutionaries', 'Eight Agendas'],
  ['of India.', 'of Jimmedaar.'],
  ['Join the swarm', 'Join Jimmedaar'],
  ['Leave the swarm', 'Leave Jimmedaar'],
  ['abhijeet-dipke', 'jjp-agenda'],
  ['against-cjp-protesters', 'against-jjp-supporters'],
  ['cjps-abhijeet', 'jjp-agenda'],
  ['Sponsored by no one. Funded by Jimmedaar.', 'Sponsored by no one. Funded by the people.'],
  [
    'Not endorsed by or connected to the movement or its founder. Not a registered political party; does not field candidates or accept election funds. Membership and cards on this site are symbolic website participation only and do not enrol you in the official agendas. Operated in compliance with applicable Indian law. Official site: jimmedaarjanataparty.org.',
    'Jimmedaar Janata Party isi agenda per kaam karega. Official site: jimmedaarjanataparty.org.',
  ],
  ['Tracker', 'Agendas'],
  ['/agenda-tracker', '#manifesto'],
  ['shadow-[6px_6px_0_0_rgba(26,17,8,0.85)]', 'shadow-[6px_6px_0_0_rgba(42,24,72,0.35)]'],
  ['shadow-[5px_5px_0_0_rgba(0,0,0,0.85)]', 'shadow-[5px_5px_0_0_rgba(42,24,72,0.35)]'],
  ['shadow-[8px_8px_0_0_rgba(26,17,8,0.85)]', 'shadow-[8px_8px_0_0_rgba(42,24,72,0.35)]'],
  ['rgba(201,162,39', 'rgba(124,58,237'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx|js|json)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

let changed = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of REPLACEMENTS) {
    if (text.includes(from)) text = text.split(from).join(to);
  }
  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated:', path.relative(root, file));
  }
}

// Clean site-meta description
const metaPath = path.join(root, 'site-meta.json');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
meta.title = 'Jimmedaar Janata Party — Eight Agendas for the People';
meta.description =
  'Jimmedaar Janata Party: Kisanon ko facility, contract coal khatm, garibon ke liye rojgar, food tax kam, jahrile fruit nahi, sarkari school shiksha, sarkari hospital treatment, badhti mahangai rokna.';
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
console.log('updated: site-meta.json (title/description)');

console.log(`\nDone. ${changed} file(s) updated.`);
