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
      <img src={"/images/iconv1.jpeg"} alt={"Jimmedaar Janata Party"} width={48} height={48} className={"shrink-0 drop-shadow-sm rounded-sm object-cover w-12 h-12 border-2 border-paper"} />
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
      Jimmedaar Janata Party — aath agendas: kisan, coal, rojgar, food tax, safe fruit, schools, hospitals, mahangai. Headquartered wherever the people need us.
      </p>
      <p className={"text-paper/50 text-xs leading-relaxed mt-3"}>
      Jimmedaar Janata Party isi agenda per kaam karega. Official site:
      <a href={"https://jimmedaarjanataparty.org"} target={"_blank"} rel={"noopener noreferrer nofollow"} className={"text-gold/80 underline underline-offset-2 hover:text-gold transition"}>
      jimmedaarjanataparty.org
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
      <a className={"inline-block py-1 text-sm text-paper/80 hover:text-gold transition"} href={"#manifesto"}>
      Agendas
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
      Join Jimmedaar
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
      Leave Jimmedaar
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
      Eight agendas · One mission
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
