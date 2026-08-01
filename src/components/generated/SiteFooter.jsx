export default function SiteFooter() {
  return (
    <>
      <footer className={"bg-ink text-paper pt-12 sm:pt-16 pb-6 sm:pb-8 border-t-2 border-ink"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6"}>
      <div className={"grid lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 lg:gap-16 items-start pb-8 sm:pb-10 mb-8 sm:mb-10 border-b border-rule-on-ink"}>
      <div>
      <div className={"eyebrow text-gold mb-3"}>
      The Dispatch
      </div>
      <h3 className={"font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3"}>
      One email. 
      <em className={"text-gold"}>
      When it matters.
      </em>
      </h3>
      <p className={"text-paper/65 text-sm leading-relaxed max-w-md"}>
      New essays, manifesto updates, and the occasional open letter. No spam, no corporate drip sequence.
      </p>
      </div>
      <div className={"w-full"}>
      <form className={"w-full"} noValidate action={""} encType={"multipart/form-data"} method={"POST"}>
      <input type={"hidden"} name={"source"} value={"footer"} />
      <input type={"text"} tabIndex={"-1"} autoComplete={"off"} className={"hidden"} aria-hidden={"true"} name={"website"} />
      <div className={"flex flex-col sm:flex-row gap-2"}>
      <label className={"flex-1 min-w-0"}>
      <span className={"sr-only"}>
      Email address
      </span>
      <div className={"relative"}>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 text-paper/55"} aria-hidden={"true"}>
      <path d={"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}></path>
      <rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>
      </svg>
      <input type={"email"} required placeholder={"you@example.in"} autoComplete={"email"} className={"w-full bg-paper/10 border-2 border-paper/30 rounded-sm px-4 py-3 text-paper placeholder:text-paper/45 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 transition pl-10"} name={"email"} />
      </div>
      </label>
      <button type={"submit"} className={"condensed text-sm font-semibold tracking-wider bg-gold text-ink px-6 py-3 rounded-sm hover:bg-paper transition inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"}>
      SUBSCRIBE
      </button>
      </div>
      <div className={"mt-3"}>
      <label className={"flex items-start gap-2 cursor-pointer text-paper/80"}>
      <input type={"checkbox"} required className={"mt-1 w-4 h-4 accent-gold cursor-pointer shrink-0"} name={"transferOk"} />
      <span className={"text-sm leading-relaxed [color:inherit]"}>
      I understand my personal data may be processed by infrastructure providers
      <strong>
      outside India
      </strong>
       (hosting, database, email, analytics, captcha) as described in the
      <a className={"text-gold-ink underline hover:opacity-80 transition"} href={"/privacy#processors"}>
      Privacy Policy
      </a>
      .
      <span className={"text-gold-ink ml-1"} aria-hidden={"true"}>
      *
      </span>
      </span>
      </label>
      </div>
      <div className={"mt-2"}>
      <div className={"min-h-[65px]"}>
      <span className={"sr-only"}>
      Security check loads when this form is visible
      </span>
      </div>
      </div>
      <p className={"text-xs text-paper/55 mt-2"}>
      One email, when there's something to say. Unsubscribe anytime.
      </p>
      </form>
      </div>
      </div>
      <div className={"grid gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-x-12 xl:gap-x-16 pb-10 sm:pb-12 border-b border-rule-on-ink"}>
      <div className={"max-w-md lg:max-w-xs"}>
      <a className={"flex shrink-0 items-center gap-3 group"} href={"/"}>
      <svg width={"48"} height={"48"} viewBox={"0 0 200 200"} xmlns={"http://www.w3.org/2000/svg"} role={"img"} aria-label={"Jimmedaar Janata Party emblem"} className={"shrink-0 drop-shadow-sm"}>
      <circle cx={"100"} cy={"100"} r={"96"} fill={"#1A1108"}></circle>
      <circle cx={"100"} cy={"100"} r={"96"} fill={"none"} stroke={"#F4EBD7"} strokeWidth={"6"}></circle>
      <circle cx={"100"} cy={"100"} r={"85"} fill={"none"} stroke={"#C9A227"} strokeWidth={"1.6"} strokeDasharray={"3 4"}></circle>
      <circle cx={"100"} cy={"100"} r={"76"} fill={"none"} stroke={"#F4EBD7"} strokeWidth={"1.8"}></circle>
      <g fill={"#C9A227"}>
      <polygon points={"100,18 101.8,22.6 106.8,22.6 102.7,25.4 104.4,30 100,27.2 95.6,30 97.3,25.4 93.2,22.6 98.2,22.6"}></polygon>
      <polygon points={"100,182 101.8,177.4 106.8,177.4 102.7,174.6 104.4,170 100,172.8 95.6,170 97.3,174.6 93.2,177.4 98.2,177.4"}></polygon>
      <circle cx={"18"} cy={"100"} r={"2.4"}></circle>
      <circle cx={"182"} cy={"100"} r={"2.4"}></circle>
      </g>
      <g transform={"translate(100 107)"} fill={"#F4EBD7"} stroke={"#F4EBD7"} strokeLinecap={"round"} strokeLinejoin={"round"}>
      <path d={"M -3 -34 Q -15 -50 -30 -56"} fill={"none"} strokeWidth={"3"}></path>
      <path d={"M 3 -34 Q 15 -50 30 -56"} fill={"none"} strokeWidth={"3"}></path>
      <path d={"M -12 -10 Q -28 -16 -42 -22"} fill={"none"} strokeWidth={"3.6"}></path>
      <path d={"M -16 2 Q -34 4 -48 2"} fill={"none"} strokeWidth={"3.6"}></path>
      <path d={"M -12 20 Q -28 30 -40 38"} fill={"none"} strokeWidth={"3.6"}></path>
      <path d={"M 12 -10 Q 28 -16 42 -22"} fill={"none"} strokeWidth={"3.6"}></path>
      <path d={"M 16 2 Q 34 4 48 2"} fill={"none"} strokeWidth={"3.6"}></path>
      <path d={"M 12 20 Q 28 30 40 38"} fill={"none"} strokeWidth={"3.6"}></path>
      <ellipse cx={"0"} cy={"-28"} rx={"8"} ry={"6"}></ellipse>
      <path d={"M -14 -22 Q -14 -8 -10 -4 L 10 -4 Q 14 -8 14 -22 Q 0 -27 -14 -22 Z"}></path>
      <path d={"M -16 -5 Q -22 4 -18 18 Q -12 32 0 34 Q 12 32 18 18 Q 22 4 16 -5 Z"}></path>
      <line x1={"0"} y1={"-3"} x2={"0"} y2={"32"} stroke={"#1A1108"} strokeWidth={"1.4"} opacity={"0.55"}></line>
      </g>
      </svg>
      <div className={"leading-none"}>
      <div className={"condensed text-[0.95rem] sm:text-base font-semibold tracking-wider whitespace-nowrap text-paper"}>
      <div>
      JIMMEDAAR
      </div>
      <div>
      JANATA PARTY
      </div>
      </div>
      <div className={"text-[0.65rem] mt-1 whitespace-nowrap text-paper/70"}>
      जिम्मेदार जनता पार्टी · Est. 2026
      </div>
      </div>
      </a>
      <p className={"text-paper/65 text-sm leading-relaxed mt-5 sm:mt-6"}>
      Independent satirical commentary website — satire and civic commentary only; not the official Jimmedaar Janata Party and not affiliated with the movement. Operated in compliance with applicable Indian law. Headquartered wherever the wifi works.
      </p>
      <p className={"text-paper/50 text-xs leading-relaxed mt-3"}>
      Not affiliated with Jimmedaar Janata Party movement. The official movement is at
      <a href={"https://cockroachjantaparty.org"} target={"_blank"} rel={"noopener noreferrer nofollow"} className={"text-gold/80 underline underline-offset-2 hover:text-gold transition"}>
      cockroachjantaparty.org
      </a>
      .
      </p>
      </div>
      <div className={"grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-10"}>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      The Party
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"#vision"}>
      Vision
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"#manifesto"}>
      The Manifesto
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/articles"}>
      Articles
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/gallery"}>
      Gallery
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/cockroach-tracker"}>
      Tracker
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/protests"}>
      Protests
      </a>
      </li>
      </ul>
      </div>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      Topics
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/meme"}>
      Memes
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/issues"}>
      Issues
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/manifesto"}>
      Manifesto
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/news"}>
      News
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/quotes"}>
      Quotes
      </a>
      </li>
      </ul>
      </div>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      Participate
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/join"}>
      Join the swarm
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/members"}>
      Members
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/card"}>
      Get your card
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/voice"}>
      Raise your voice
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/leave"}>
      Leave the swarm
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/support-the-developer"}>
      Support the Developer
      </a>
      </li>
      </ul>
      </div>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      Community
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/community-guidelines"}>
      Community Guidelines
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/protest-guidelines"}>
      Protest Guidelines
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/community-guidelines#bitchat"}>
      Responsible BitChat use
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/protest-guidelines#offline-comms"}>
      Stay connected offline
      </a>
      </li>
      </ul>
      </div>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      Legal
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/legal"}>
      {"Legal & Transparency"}
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/privacy"}>
      Privacy Policy
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/terms"}>
      Terms of Use
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/disclaimer"}>
      Disclaimer
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/cookies"}>
      Cookie Policy
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/editorial-policy"}>
      Editorial Policy
      </a>
      </li>
      </ul>
      </div>
      <div className={"min-w-0"}>
      <h4 className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] text-paper/55 mb-4"} style={{fontFamily: "var(--font-condensed)"}}>
      {"Policies & site"}
      </h4>
      <ul className={"space-y-2.5"}>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/transparency"}>
      Transparency
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/refund-policy"}>
      Refund Policy
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/support-policy"}>
      Support Policy
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/accessibility"}>
      Accessibility
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/about"}>
      About
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"/press"}>
      Press
      </a>
      </li>
      <li>
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"#contact"}>
      Contact
      </a>
      </li>
      </ul>
      </div>
      </div>
      </div>
      <div className={"pt-6 text-[0.7rem] sm:text-xs text-paper/55"}>
      <div className={"flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left"}>
      <div>
      © 2026 Jimmedaar Janata Party ·
      <a className={"hover:text-gold transition"} href={"/copyright"}>
      All rights reserved
      </a>
      .
      </div>
      <div className={"font-bold tracking-[0.18em] uppercase text-[0.62rem] sm:text-[0.7rem]"} style={{fontFamily: "var(--font-condensed)"}}>
      ⚠ A work of satire
      </div>
      <nav className={"hidden sm:flex flex-wrap items-center gap-3"} aria-label={"Quick links"}>
      <a className={"hover:text-gold transition"} href={"/legal"}>
      Legal
      </a>
      <span aria-hidden={"true"}>
      ·
      </span>
      <a className={"hover:text-gold transition"} href={"/privacy"}>
      Privacy
      </a>
      <span aria-hidden={"true"}>
      ·
      </span>
      <a className={"hover:text-gold transition"} href={"/terms"}>
      Terms
      </a>
      <span aria-hidden={"true"}>
      ·
      </span>
      <a className={"hover:text-gold transition"} href={"/about"}>
      About
      </a>
      <span aria-hidden={"true"}>
      ·
      </span>
      <a className={"hover:text-gold transition"} href={"/press"}>
      Press
      </a>
      <span aria-hidden={"true"}>
      ·
      </span>
      <a className={"hover:text-gold transition"} href={"#contact"}>
      Contact
      </a>
      </nav>
      </div>
      </div>
      </div>
      </footer>
    </>
  );
}
