export default function Articles() {
  return (
    <>
      <section id={"articles"} className={"py-20 sm:py-28 md:py-32 bg-paper-soft border-y-2 border-ink/15"}>
      <div className={"max-w-6xl mx-auto px-4 sm:px-6"}>
      <div className={"flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"}>
      <div>
      <div className={"eyebrow text-ink/65 mb-5"}>
      The Journal
      </div>
      <h2 className={"text-4xl sm:text-5xl md:text-6xl leading-tight"}>
      Latest 
      <em className={"text-gold-ink"}>
      essays.
      </em>
      </h2>
      </div>
      <a className={"condensed text-sm font-semibold tracking-wider hover:text-gold-ink transition inline-flex items-center gap-2"} href={"/articles"}>
      ALL ARTICLES 
      <span aria-hidden={"true"}>
      →
      </span>
      </a>
      </div>
      <div className={"relative w-full"} role={"region"} aria-roledescription={"carousel"} data-slot={"carousel"} aria-label={"Latest essays"}>
      <div className={"overflow-hidden"} data-slot={"carousel-content"}>
      <div className={"flex -ml-3 sm:-ml-4 items-stretch"}>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/india-exam-paper-leaks-5-year-crisis-analysis"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      1 Aug 2026 · 13 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Sarkari Schoolon Mein Acchi Shiksha
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Trained teachers, books, toilets, digital tools — har bachche ko barabar mauka, bina private school ki majboori.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <div className={"w-full h-full min-h-[22rem] sm:min-h-[24rem]"}>
      <aside aria-label={"Advertisement"} data-ad-placement={"home_articles_inline"} data-ad-variant={"card"} data-testid={"ad-slot"} className={"m-0 flex w-full min-h-0 flex-col border border-ink/80 bg-paper-soft p-4 sm:p-5 my-0 h-full"} style={{minHeight: "352px"}}>
      <div className={"flex items-center gap-3 shrink-0 mb-3"} aria-hidden={"true"}>
      <span className={"condensed text-[0.65rem] tracking-[0.2em] uppercase text-ink/45"}>
      Advertisement
      </span>
      <span className={"h-px flex-1 bg-ink/15"}></span>
      </div>
      <div className={"min-h-0 flex-1 w-full"}>
      <ins className={"adsbygoogle"} style={{display: "block", width: "100%", height: "100%", minHeight: "280px"}} data-ad-client={"ca-pub-4127993377562392"} data-ad-slot={"2830448517"} data-ad-format={"auto"} data-full-width-responsive={"true"}></ins>
      </div>
      </aside>
      </div>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/paper-leaks-india-education-policy"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      10 Jul 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Sarkari Hospital Mein Acchi Treatment
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Doctors duty par, medicines stock mein, saaf wards — sarkari hospital healing ka jagah ho.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/ethanol-fuel-india-benefits-risks-existing-vehicles"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      10 Jul 2026 · 6 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      {"Badhti Hui Mahangai Rokna"}
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Fuel, food, rent aur daily essentials par control — hoarding ke against action aur common family ke liye relief.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/division-and-misinformation-challenge"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Kisanon Ko Facility: Village Markets Strong
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Farmers deserve fair MSP, irrigation, cold storage and easy credit — Jimmedaar agenda 01.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/digital-divide-behind-indias-internet-revolution"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Contract Coal Khatm: Clean Transparent Policy
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Illegal coal contracts and opaque deals must end. Transparent policy for workers and land.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/indias-cities-growing-faster-than-they-can-cope"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Garibon Ke Liye Rojgar: Block-Level Jobs
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Local skill training, fair-wage work and block-level rojgar desks for poor families.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <div className={"w-full h-full min-h-[22rem] sm:min-h-[24rem]"}>
      <aside aria-label={"Advertisement"} data-ad-placement={"home_articles_inline"} data-ad-variant={"card"} data-testid={"ad-slot"} className={"m-0 flex w-full min-h-0 flex-col border border-ink/80 bg-paper-soft p-4 sm:p-5 my-0 h-full"} style={{minHeight: "352px"}}>
      <div className={"flex items-center gap-3 shrink-0 mb-3"} aria-hidden={"true"}>
      <span className={"condensed text-[0.65rem] tracking-[0.2em] uppercase text-ink/45"}>
      Advertisement
      </span>
      <span className={"h-px flex-1 bg-ink/15"}></span>
      </div>
      <div className={"min-h-0 flex-1 w-full"}>
      <ins className={"adsbygoogle"} style={{display: "block", width: "100%", height: "100%", minHeight: "280px"}} data-ad-client={"ca-pub-4127993377562392"} data-ad-slot={"2830448517"} data-ad-format={"auto"} data-full-width-responsive={"true"}></ins>
      </div>
      </aside>
      </div>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/india-political-electoral-reform"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Jahrile Fruit Bechne Nahi Denge
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Toxic fruit and adulteration endanger families. Safe food is a Jimmedaar agenda.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/justice-delayed-is-justice-denied-india"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Sarkari School + Hospital: Equal Care
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Quality teachers, books, medicines and clean wards in every government school and hospital.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/building-india-beyond-highways-and-headlines"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Food Tax Kam: Relief on the Thali
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Cut tax on atta, dal, oil, sabzi and doodh so every kitchen feels relief.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      <div role={"group"} aria-roledescription={"slide"} data-slot={"carousel-item"} className={"min-w-0 shrink-0 grow-0 pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-auto flex"}>
      <a className={"flex flex-col h-full w-full border p-6 sm:p-8 transition group min-h-[22rem] sm:min-h-[24rem] border-ink/80 bg-paper-soft hover:border-gold"} href={"/articles/womens-safety-indias-development-issue"}>
      <div className={"condensed text-[0.65rem] tracking-wider uppercase mb-4 text-ink/60"}>
      14 Jun 2026 · 3 min read
      </div>
      <h3 className={"font-display text-xl sm:text-2xl leading-tight mb-3 transition group-hover:text-gold-ink"}>
      Badhti Mahangai Rokna: Price Control
      </h3>
      <p className={"text-sm leading-relaxed flex-1 text-ink/70"}>
      Control fuel, food, rent and daily essentials — stop rising mahangai for common families.
      </p>
      <div className={"mt-6 condensed text-xs font-semibold tracking-wider inline-flex items-center gap-2 transition text-ink group-hover:text-gold-ink"}>
      READ 
      <span aria-hidden={"true"}>
      →
      </span>
      </div>
      </a>
      </div>
      </div>
      </div>
      <button data-slot={"carousel-previous"} className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -translate-y-1/2 border-ink text-ink bg-paper hover:bg-gold hover:text-ink -left-2 sm:-left-12 shadow-[2px_2px_0_0_rgba(26,17,8,0.85)]"} disabled>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-left"} aria-hidden={"true"}>
      <path d={"m12 19-7-7 7-7"}></path>
      <path d={"M19 12H5"}></path>
      </svg>
      <span className={"sr-only"}>
      Previous slide
      </span>
      </button>
      <button data-slot={"carousel-next"} className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -translate-y-1/2 border-ink text-ink bg-paper hover:bg-gold hover:text-ink -right-2 sm:-right-12 shadow-[2px_2px_0_0_rgba(26,17,8,0.85)]"} disabled>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-right"} aria-hidden={"true"}>
      <path d={"M5 12h14"}></path>
      <path d={"m12 5 7 7-7 7"}></path>
      </svg>
      <span className={"sr-only"}>
      Next slide
      </span>
      </button>
      </div>
      </div>
      </section>
    </>
  );
}
