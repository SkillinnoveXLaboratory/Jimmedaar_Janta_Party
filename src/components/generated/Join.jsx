export default function Join() {
  return (
    <>
      <section id={"join"} className={"py-20 sm:py-28 md:py-32"}>
      <div className={"max-w-5xl mx-auto px-4 sm:px-6"}>
      <div className={"text-center mb-14 max-w-2xl mx-auto"}>
      <div className={"eyebrow text-ink/65 mb-5"}>
      Membership
      </div>
      <h2 className={"text-5xl sm:text-6xl md:text-7xl mb-6"}>
      Are you eligible 
      <span className={"whitespace-nowrap"}>
      to 
      <em className={"text-gold-ink"}>
      join?
      </em>
      </span>
      </h2>
      <p className={"text-base sm:text-lg text-ink/75"}>
      We do not check religion, caste, or gender. We do, however, have four (4) standards.
      </p>
      </div>
      <ul className={"space-y-4"}>
      <li>
      <button type={"button"} aria-pressed={"false"} className={"w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 items-center border-2 rounded-sm px-5 sm:px-7 py-5 sm:py-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 bg-paper-soft border-ink hover:border-gold"}>
      <div className={"condensed text-[0.7rem] text-ink/70 hidden sm:block w-16"}>
      REQ / 01
      </div>
      <div>
      <div className={"font-display text-xl sm:text-2xl"}>
      Overqualified
      </div>
      <div className={"text-sm sm:text-base text-ink/70 mt-1"}>
      Three certificates. Zero callbacks.
      </div>
      </div>
      <div aria-hidden={"true"} className={"w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display text-lg transition text-ink/25"}>
      ✓
      </div>
      </button>
      </li>
      <li>
      <button type={"button"} aria-pressed={"false"} className={"w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 items-center border-2 rounded-sm px-5 sm:px-7 py-5 sm:py-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 bg-paper-soft border-ink hover:border-gold"}>
      <div className={"condensed text-[0.7rem] text-ink/70 hidden sm:block w-16"}>
      REQ / 02
      </div>
      <div>
      <div className={"font-display text-xl sm:text-2xl"}>
      Politically Frustrated
      </div>
      <div className={"text-sm sm:text-base text-ink/70 mt-1"}>
      Complains professionally. Votes emotionally.
      </div>
      </div>
      <div aria-hidden={"true"} className={"w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display text-lg transition text-ink/25"}>
      ✓
      </div>
      </button>
      </li>
      <li>
      <button type={"button"} aria-pressed={"false"} className={"w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 items-center border-2 rounded-sm px-5 sm:px-7 py-5 sm:py-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 bg-paper-soft border-ink hover:border-gold"}>
      <div className={"condensed text-[0.7rem] text-ink/70 hidden sm:block w-16"}>
      REQ / 03
      </div>
      <div>
      <div className={"font-display text-xl sm:text-2xl"}>
      Civic Anger
      </div>
      <div className={"text-sm sm:text-base text-ink/70 mt-1"}>
      Triggered by fuel prices, layoffs, and unpaid internships.
      </div>
      </div>
      <div aria-hidden={"true"} className={"w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display text-lg transition text-ink/25"}>
      ✓
      </div>
      </button>
      </li>
      <li>
      <button type={"button"} aria-pressed={"false"} className={"w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 items-center border-2 rounded-sm px-5 sm:px-7 py-5 sm:py-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 bg-paper-soft border-ink hover:border-gold"}>
      <div className={"condensed text-[0.7rem] text-ink/70 hidden sm:block w-16"}>
      REQ / 04
      </div>
      <div>
      <div className={"font-display text-xl sm:text-2xl"}>
      Financially Confused
      </div>
      <div className={"text-sm sm:text-base text-ink/70 mt-1"}>
      Salary comes. EMI takes. UPI finishes the rest.
      </div>
      </div>
      <div aria-hidden={"true"} className={"w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display text-lg transition text-ink/25"}>
      ✓
      </div>
      </button>
      </li>
      </ul>
      <div className={"text-center mt-8 mb-6 min-h-[3rem]"} aria-live={"polite"}>
      <p className={"text-sm text-ink/70 italic max-w-xl mx-auto leading-relaxed"}>
      Tap the standards that describe you. (All of them. It’s fine.)
      </p>
      </div>
      <div className={"text-center mt-10"}>
      <a className={"condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-4 rounded-sm hover:bg-gold hover:text-ink transition inline-flex items-center gap-2"} href={"/join"}>
      JOIN THE SWARM
      <span aria-hidden={"true"}>
      →
      </span>
      </a>
      <p className={"text-sm text-ink/70 mt-4 max-w-md mx-auto leading-relaxed"}>
      Join 
      <strong className={"text-ink"}>
      39,514
      </strong>
       cockroaches
       · 4382 joined this week
      .
      Free, lifelong, and revocable only by you. No fees.
      </p>
      </div>
      </div>
      </section>
    </>
  );
}
