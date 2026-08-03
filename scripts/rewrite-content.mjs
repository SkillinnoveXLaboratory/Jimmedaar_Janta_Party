import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');

const REPLACEMENTS = [
  // Brand cleanup
  ['cockroachjantaparty.org', 'jimmedaarjanataparty.org'],
  ['contact@cockroachjantaparty.org', 'contact@jimmedaarjanataparty.org'],
  ['/cockroach-tracker', '/agenda-tracker'],
  ['Cockroach Tracker', 'Agenda Tracker'],
  ['JOIN THE SWARM', 'JOIN JIMMEDAAR'],
  ['Join the swarm', 'Join Jimmedaar'],
  ['Leave the swarm', 'Leave Jimmedaar'],
  ['Swarm Chat', 'JJP Chat'],
  ['the swarm', 'Jimmedaar'],
  ['The swarm', 'Jimmedaar'],
  [' cockroaches', ' members'],
  ['You Cannot Squash A Movement', 'Eight Agendas · One Mission'],
  ['Together We Survive', 'Kisanon Ko Facility'],
  ['Stronger Together', 'Mahangai Rokna Hai'],
  ['Unity · Resilience · Progress', 'Rojgar · Shiksha · Sehat'],
  ['Fan poster (satire) · No. 001', 'Agenda poster · No. 001'],
  ['Sponsored by no one. Funded by the swarm.', 'Sponsored by no one. Funded by the people.'],
  ['Independent Satire · Civic Commentary · Community Project', 'Kisan · Rojgar · Shiksha · Sehat · Mahangai'],
  ['Voice of the', 'Jimmedaar'],
  ['Burnt-Out Youth.', 'Janata Party.'],
  ['Five demands. Community funded. One large, stubborn swarm.', 'Eight agendas. Community powered. Jimmedaar Janata Party isi agenda per kaam karega.'],
  ['Independent satirical commentary for the people the system forgot to count. ', ''],
  ['Live rally · Since 2026', 'Eight Agendas · Since 2026'],
  ['Demands', 'Agendas'],
  ['\n      5\n', '\n      8\n'],
  ['Peaceful protest guidelines', 'Read our eight agendas'],
  ['We are not bugs, we are voters', 'Kisanon ko facility denge'],
  ['JJP rally swells past Sansad Bhavan', 'JJP: Kisanon ko facility denge'],
  ['Burnt-Out Youth bloc surges +14', 'Garibon ke liye rojgar laayenge'],
  ['Godi-media shares slip on licence review', 'Food items par tax kam karenge'],
  ['Smoke advisory near Jantar Mantar', 'Badhti mahangai rokna hai'],
  ['addresses the swarm at the inaugural rally', 'presents the eight agendas at the launch rally'],
  ['Official movement: cockroachjantaparty.org', 'Official site: jimmedaarjanataparty.org'],
  ['Official movement', 'Official site'],
  ['"cockroach" as a slur against young, unemployed and politically active Indians. It reclaims the insult and pairs it with five demands covering judicial reform, electoral integrity, women\'s reservation, media monopoly, and the anti-defection law.', 'common people\'s needs — farmers, jobs, food tax, safe fruit, government schools, government hospitals, and rising prices.'],
  ['The name reclaims a slur used against young, jobless and online Indians. Reclaiming insults — Tories, Quakers, Suffragettes, Queer — is a recurring pattern in political movements: the more derisive the original term, the more durable the eventual movement. The full argument is in our essay on reclaimed symbols.', 'Jimmedaar means responsible. Janata means the people. The name stands for a party that works only on its eight agendas for farmers, workers, schools, hospitals, and fair prices.'],
  ['Why is it called Jimmedaar Janata Party?', 'Why Jimmedaar Janata Party?'],
  ['More from the swarm', 'More from the agendas'],
  ['The swarm\'s', "Jimmedaar's"],
  ["Jimmedaar's", "Jimmedaar's"],
  ['top patrons.', 'supporters.'],
  ['Latest protest update', 'Latest agenda update'],
  ['When the Party Door Knocks, It Usually Wants Your Soul', 'Kisanon Ko Facility: Jimmedaar Ka Pehla Wada'],
  ['A mother’s account of threats aimed at the JJP founder reminds us that in Indian politics, the only thing worse than being ignored is being noticed.', 'Jimmedaar Janata Party farmers ke liye MSP, irrigation, cold storage aur easy credit ensure karegi. Kisan pehle — har district plan mein.'],
  ['Jimmedaar Janata Party: Why Critics Fear the Floor', 'Contract Coal Khatm: Transparent Policy'],
  ['Critics are busy counting legs while we are busy building a movement. Here is why the JJP protest is more than just a nuisance.', 'Illegal coal contracts aur opaque deals khatm. Worker safety aur clean policy — Jimmedaar Janata Party ka dusra agenda.'],
  ['Delhi Protesters Get A Reprieve: The System Blinks First', 'Garibon Ke Liye Rojgar: Real Jobs'],
  ['Delhi authorities have signaled a retreat on legal action against JJP protesters, with a formal review of recent arrests now underway.', 'Local skill training, fair-wage work, aur block-level rojgar desks — gareeb parivaar ke liye asli mauka.'],
  ['Abhijeet Dipke and the Ministerial Gaslight Special', 'Food Items Par Tax Kam'],
  ['When a minister hits back at claims, the public gets a masterclass in deflection. Here is our take on the latest political theater.', 'Atta, dal, oil, sabzi, doodh — basic food par tax burden ghatayenge taaki kitchen ko rahat mile.'],
  ['Students Are Not Terrorists', 'Jahrile Fruit Bechne Nahi Denge'],
  ['India Exam Paper Leaks: A 5-Year Crisis Analysis', 'Sarkari Schoolon Mein Acchi Shiksha'],
  ['Between 2021 and 2026, India\'s public examination system faced an unprecedented crisis. Explore our comprehensive analysis of the paper leak epidemic.', 'Trained teachers, books, toilets, digital tools — har bachche ko barabar mauka, bina private school ki majboori.'],
  ['Paper Leaks in India: How Exam Corruption Undermines Education', 'Sarkari Hospital Mein Acchi Treatment'],
  ['Every paper leak steals more than an exam—it steals years of preparation, public trust, and equal opportunity. India needs systemic reform, not temporary fixes.', 'Doctors duty par, medicines stock mein, saaf wards — sarkari hospital healing ka jagah ho.'],
  ['Ethanol Fuel in India: Benefits, Risks & Impact on Existing Vehicles', 'Badhti Hui Mahangai Rokna'],
  ["India's transition to E20 petrol promises lower oil imports and cleaner emissions, but existing vehicle compatibility, fuel efficiency, agricultural impacts, and long-term sustainability remain subjects of intense debate.", 'Fuel, food, rent aur daily essentials par control — hoarding ke against action aur common family ke liye relief.'],
  ['Are you eligible to', 'Do you stand with our'],
  ['join?', 'agendas?'],
  ['We do not check religion, caste, or gender. We do, however, have four (4) standards.', 'Jimmedaar Janata Party isi agenda per kaam karega. Tap the agendas you support.'],
  ['Overqualified', 'Kisanon Ko Facility'],
  ['Three certificates. Zero callbacks.', 'MSP, irrigation, cold storage, easy credit for farmers.'],
  ['Politically Frustrated', 'Contract Coal Khatm'],
  ['Complains professionally. Votes emotionally.', 'End exploitative coal contracts and opaque deals.'],
  ['Civic Anger', 'Garibon Ke Liye Rojgar'],
  ['Triggered by fuel prices, layoffs, and unpaid internships.', 'Honest jobs, skills training, fair wages for the poor.'],
  ['Financially Confused', 'Food Tax Kam + Mahangai Rokna'],
  ['Salary comes. EMI takes. UPI finishes the rest.', 'Lower food tax and stop rising prices on the thali.'],
  ['Tap the standards that describe you. (All of them. It’s fine.)', 'Tap the agendas you believe in. (All eight. It’s fine.)'],
  ['Voice of India\'s Burnt-Out Youth', 'Eight Agendas for the People'],
  ['Independent satirical commentary website — satire and civic commentary only; not the official Jimmedaar Janata Party and not affiliated with the movement.', 'Jimmedaar Janata Party — kisi an agenda: kisan, coal, rojgar, food tax, safe fruit, schools, hospitals, mahangai.'],
  ['Independent satire', 'Eight agendas'],
  ['Not a registered party', 'People first'],
  ['Symbolic membership only', 'Join the mission'],
  ['⚠ A work of satire', 'Eight agendas · One mission'],
  ['Build a party for a generation raised on promises, notifications, and low battery warnings. A generation that is overqualified, frustrated, angry at what\'s broken, and financially confused. That\'s it. That\'s the mission. The rest is satire.', 'Jimmedaar Janata Party isi agenda per kaam karegi: farmers facility, contract coal khatm, garibon ka rojgar, food tax kam, jahrile fruit band, sarkari school shiksha, sarkari hospital treatment, aur badhti mahangai rokna.'],
  ['We are not here to set up another PM CARES, holiday in Davos on the taxpayer\'s salary slip, or rebrand corruption as “strategic spending.” We are here to ask — loudly, repeatedly, in writing — where the money went.', 'Hum yahan bhashan ke liye nahi hain. Hum yahan kisan, garib, school, hospital aur thali ke daam ke liye hain — aath clear agendas, daily kaam.'],
  ['Jimmedaar Janata Party is an independent satire and civic-engagement project that uses humour and creative storytelling to encourage public discussion. It is not a registered political party or election campaign, and is not affiliated with any political organisation.', 'Jimmedaar Janata Party logon ke aath agendas par kaam karti hai — kisan se lekar mahangai tak. Transparent, responsible, janata-first.'],
  ['Rally · The People\'s Banner', 'Agenda · The People\'s Promise'],
  ['Chapter One', 'Our Promise'],
  ['About the', 'About our'],
  ['movement.', 'agendas.'],
  ['Get in touch', 'Connect'],
  ['Connect', 'Sampark'],
  ['with us.', 'karein.'],
  ['Website bugs, account help, or grievances about this site? Email the website inbox. Movement membership, volunteering, and party matters go to the official Jimmedaar Janata Party — not here.', 'Questions on agendas — farmers, jobs, schools, hospitals, mahangai? Email us. Jimmedaar Janata Party isi agenda per kaam karega.'],
  ['Wherever the wifi works.', 'Wherever the people need us.'],
  ['HQ: Wherever the wifi works', 'HQ: With the people'],
  ['Filed under: General Disgruntlement', 'Filed under: Eight Agendas'],
  ['Now accepting rants, retweets, and resentment', 'Now accepting support for farmers, jobs & fair prices'],
  ['Party Launch · Volume 1, Edition 1', 'Jimmedaar Launch · Eight Agendas'],
  ['#cjp', '#jjp'],
  ['#jimmedaarjanataparty', '#JimmedaarJanataParty'],
  ['#cockroachparty', '#JimmedaarJanataParty'],
  ['Hero — JJP nighttime rally', 'Hero — Jimmedaar Janata Party agendas'],
  ['bg-black text-paper', 'jjp-hero text-paper'],
  ['bg-[#7a1410] text-paper border-t-2 border-[#c9a227]/70', 'jjp-hero-ticker text-paper border-t-2'],
  ['background: "radial-gradient(ellipse at 50% 30%, #2a0a08 0%, #160603 45%, #0a0301 100%)"', 'background: "radial-gradient(ellipse at 50% 30%, #4c1d95 0%, #2a1848 55%, #1e1038 100%)"'],
  ['background: "radial-gradient(ellipse at 50% 100%, rgba(176,34,18,0.35) 0%, rgba(120,16,8,0.18) 35%, transparent 70%)"', 'background: "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.35) 0%, rgba(76,29,149,0.2) 35%, transparent 70%)"'],
  ['background: "#c9a227"', 'background: "#a78bfa"'],
  ['fill="#F4EBD7"', 'fill="#F4F7FC"'],
  ['stroke="#1A1108"', 'stroke="#2A1848"'],
  ['stroke="#C9A227"', 'stroke="#7C3AED"'],
  ['fill="#C9A227"', 'fill="#7C3AED"'],
  ['fill="#1A1108"', 'fill="#2A1848"'],
  ['stroke="#F4EBD7"', 'stroke="#F4F7FC"'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx|js|json|css|html|md)$/i.test(entry.name)) out.push(full);
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
