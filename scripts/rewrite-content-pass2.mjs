import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');

const REPLACEMENTS = [
  ['Are you eligible ', 'Do you stand with our '],
  ["The swarm's ", "Jimmedaar's "],
  ['top patrons.', 'supporters.'],
  ['Latest protest update', 'Latest agenda update'],
  ['Swarm Chat', 'JJP Chat'],
  ['Sponsored by no one. Funded by the swarm.', 'Sponsored by no one. Funded by the people.'],
  ['Party Launch · Volume 1, Edition 1', 'Jimmedaar Launch · Eight Agendas'],
  ['Filed under: General Disgruntlement', 'Filed under: Eight Agendas'],
  ['HQ: Wherever the wifi works', 'HQ: With the people'],
  ['Now accepting rants, retweets, and resentment', 'Now accepting support for farmers, jobs & fair prices'],
  [
    'Independent satirical commentary website — satire and civic commentary only; not the official Jimmedaar Janata Party and not affiliated with the movement.',
    'Jimmedaar Janata Party — aath agendas: kisan, coal, rojgar, food tax, safe fruit, schools, hospitals, mahangai.',
  ],
  ['Independent satire', 'Eight agendas'],
  ['Not a registered party', 'People first'],
  ['Symbolic membership only', 'Join the mission'],
  ['Official movement: cockroachjantaparty.org', 'Official site: jimmedaarjanataparty.org'],
  ['Official movement: jimmedaarjanataparty.org', 'Official site: jimmedaarjanataparty.org'],
  ['https://cockroachjantaparty.org', 'https://jimmedaarjanataparty.org'],
  ['Official movement', 'Official site'],
  ["Abhijeet Dipke and the BJP's Very Polite Invitation", 'Jahrile Fruit Bechne Nahi Denge'],
  [
    'When the BJP comes knocking with an offer you cannot refuse, the standard response is to go public. Abhijeet Dipke’s claims highlight the absurdity of modern political recruitment.',
    'Toxic, chemically poisoned fruit market mein nahi bikenge. Safe food ek haq hai — Jimmedaar Janata Party ka paanchwa agenda.',
  ],
  ['Abhijeet Dipke: The Student Witch-Hunt Has An Expiry Date', 'Sarkari Schoolon Mein Acchi Shiksha'],
  [
    'Abhijeet Dipke fires a warning shot at the establishment, demanding an end to the systemic harassment of students across the country.',
    'Trained teachers, books, toilets, digital tools — sarkari school har bachche ke liye barabar mauka.',
  ],
  ['Abhijeet Dipke and the Art of Not Getting Comfortable', 'Badhti Hui Mahangai Rokna'],
  [
    'Abhijeet Dipke’s recent morning video post serves as a sobering reminder that while visibility is nice, systemic change requires more than soundbites.',
    'Fuel, food, rent aur daily essentials par control — Jimmedaar Janata Party mahangai rokegi.',
  ],
  [
    'When the state runs out of arguments, it reaches for the UAPA handbook. Abhijeet Dipke reminds us that students are not the enemy.',
    'Jahrile fruit aur adulteration par strict check — families ki sehat pehle.',
  ],
  [
    'Jimmedaar Janata Party (JJP) is an Indian satirical political movement founded in May 2026 by Abhijeet Dipke, in response to the public use of common people\'s needs — farmers, jobs, food tax, safe fruit, government schools, government hospitals, and rising prices. This website (JJP) is an independent satirical commentary website about that movement — not the official JJP, which is at jimmedaarjanataparty.org.',
    'Jimmedaar Janata Party (JJP) logon ke aath agendas par kaam karti hai: kisanon ko facility, contract coal khatm, garibon ka rojgar, food tax kam, jahrile fruit band, sarkari school shiksha, sarkari hospital treatment, aur badhti mahangai rokna.',
  ],
  [
    'To join the movement itself, go to the official JJP at jimmedaarjanataparty.org — this site cannot enrol you there. What you can do here is create a free community account on this website, on the /join page, which lets you post and take part in the community. It is not JJP membership and carries no standing with the agendas. The four tongue-in-cheek standards are: overqualified (three certificates, zero callbacks), politically frustrated (complains professionally, votes emotionally), civic anger (fuel prices, layoffs, unpaid internships), and financially confused (salary comes, EMI takes, UPI finishes the rest).',
    'Join page par aath agendas tap karke free community account banao. Jimmedaar Janata Party isi agenda per kaam karega — kisan, rojgar, school, hospital aur mahangai.',
  ],
  [
    'No. The JJP movement is not registered with the Election Commission of India and describes itself as a platform rather than a conventional party. This website is not a registered party either — it is an independent satirical commentary website about the agendas. The Disclaimer page lays out the line between sincere and satirical in detail.',
    'Jimmedaar Janata Party ek janata-first platform hai jo aath clear agendas par kaam karti hai. Focus politics nahi — kisan, jobs, schools, hospitals aur fair prices.',
  ],
  [
    'The JJP movement was founded in May 2026 by Abhijeet Dipke, who leads it along with its official spokespersons. This website is not run by them: it is an independent satirical commentary website maintained by a supporter, and nobody here speaks for the agendas. Journalists should direct anything about JJP to jimmedaarjanataparty.org or contact@jimmedaarjanataparty.org.',
    'Jimmedaar Janata Party ka focus aath agendas hain. Sampark: contact@jimmedaarjanataparty.org ya jimmedaarjanataparty.org.',
  ],
  [
    'No. The JJP movement fields no candidates and is not registered with the Election Commission of India. This website certainly does not — it is an independent satirical commentary website, not an electoral organisation.',
    'Focus candidates nahi — agendas hain. Kisan facility, rojgar, food tax, safe fruit, schools, hospitals aur mahangai rokna.',
  ],
  [
    'No. Neither the JJP movement nor this website is affiliated with, endorsed by, or funded by any political party, candidate, or election campaign. Separately and importantly: this website is also not affiliated with or endorsed by the JJP movement itself — it is an independent satirical commentary website. The official movement is at jimmedaarjanataparty.org.',
    'Jimmedaar Janata Party kisi badi party ka wing nahi. Independent agenda platform — official: jimmedaarjanataparty.org.',
  ],
  ['an independent satirical commentary website', 'Jimmedaar Janata Party agenda platform'],
  ['satirical commentary', 'agenda work'],
  [
    'Editorial satire for the overqualified, underemployed and politically frustrated.',
    'Eight agendas for farmers, workers, schools, hospitals and fair prices.',
  ],
  [
    'Jantar-Mantar Protest: संसद के पास लाठीचार्ज और आंसू गैस के गोले दागे, Abhijeet Dipke ने अनशन तोड़ा',
    'JJP Agenda: Sarkari Hospital Mein Acchi Treatment Laayenge',
  ],
  [
    '✊ You can imprison a revolutionary, but you can never imprison the revolution. 🔥 #Accountability #Education #Truth #Reform 💡 True change begins with ideas, courage, and education. 📚 Stand for accountability, seek truth, and inspire progress. 🚀',
    'Jimmedaar Janata Party: Kisanon ko facility · Coal khatm · Rojgar · Food tax kam · Safe fruit · Sarkari school · Sarkari hospital · Mahangai rokna',
  ],
  ['addresses Jimmedaar at the inaugural rally', 'presents eight agendas at the launch rally'],
  [
    'Verified supporters keeping the servers on and the dev in chai. Amounts stay private — recognition is a thank-you, never an ad.',
    'Supporters who stand with Jimmedaar agendas — farmers, jobs, schools, hospitals and fair prices.',
  ],
  [
    'Website queries only — accounts, bugs, memes about this site, and Indian-law grievances for this intermediary.',
    'Agenda queries — farmers, jobs, schools, hospitals, mahangai — email the website inbox.',
  ],
  [
    'Independent satirical commentary website — satire and civic commentary only; not the official Jimmedaar Janata Party and not affiliated with the movement. Not endorsed by or connected to the movement or its founder. Not a registered political party; does not field candidates or accept election funds. Membership and cards on this site are symbolic website participation only and do not enrol you in the official movement. Operated in compliance with applicable Indian law. Official site: jimmedaarjanataparty.org.',
    'Jimmedaar Janata Party isi agenda per kaam karega: (1) Kisanon ko facility (2) Contract coal khatm (3) Garibon ke liye rojgar (4) Food tax kam (5) Jahrile fruit nahi (6) Sarkari school shiksha (7) Sarkari hospital treatment (8) Mahangai rokna. Official site: jimmedaarjanataparty.org.',
  ],
  ['India cockroach party', 'Jimmedaar Janata Party'],
  ['cockroach party', 'Jimmedaar Janata Party'],
  ['cjp-founder', 'jjp-agenda'],
  ['/news/cjp-', '/news/jjp-'],
  ['/news/abhijeet-dipke', '/news/jjp-agenda'],
  ['/news/was-abhijeet', '/news/jjp-agenda'],
  ['/news/students-are-not-terrorists-cjp', '/news/jjp-agenda'],
  ['/news/become-an-influencer', '/news/jjp-agenda'],
  ['/news/just-the-beginning', '/news/jjp-agenda'],
  ['/news/no-legal-action-against-cjp', '/news/jjp-agenda'],
  ['Governance as Content', 'Sarkari Hospital Mein Acchi Treatment'],
  ['Assam Drops NEET Protester Cases', 'Food Items Par Tax Kam — Kitchen Relief'],
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

console.log(`\nDone. ${changed} file(s) updated.`);
