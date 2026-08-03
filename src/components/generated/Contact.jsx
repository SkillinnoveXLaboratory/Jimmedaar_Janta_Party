export default function Contact() {
  return (
    <>
      <section id={"contact"} className={"py-20 sm:py-28 md:py-32"}>
      <div className={"max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_1fr] gap-12 lg:gap-20"}>
      <div>
      <div className={"eyebrow text-ink/65 mb-5"}>
      Sampark
      </div>
      <h2 className={"text-5xl sm:text-6xl md:text-7xl mb-6"}>
      Sampark 
      <em className={"text-gold-ink"}>
      karein.
      </em>
      </h2>
      <p className={"text-base sm:text-lg text-ink/75 mb-10 max-w-md"}>
      Questions on agendas — farmers, jobs, schools, hospitals, mahangai? Email us. Jimmedaar Janata Party isi agenda per kaam karega.
      </p>
      <ul className={"space-y-6 border-t border-rule"}>
      <li className={"grid grid-cols-[7.5rem_1fr] gap-4 pt-6 border-b border-rule pb-6"}>
      <div className={"condensed text-[0.7rem] text-ink/70"}>
      Website
      </div>
      <div>
      <a href={"mailto:contact@localhost?subject=Website%20query"} className={"font-medium hover:text-gold-ink transition break-all"}>
      contact@localhost
      </a>
      <p className={"mt-1.5 text-sm text-ink/65 leading-snug"}>
      Agenda queries — farmers, jobs, schools, hospitals, mahangai — email the website inbox.
      </p>
      </div>
      </li>
      <li className={"grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule pb-6"}>
      <div className={"condensed text-[0.7rem] text-ink/70"}>
      Official JJP
      </div>
      <div>
      <a href={"mailto:contact@jimmedaarjanataparty.org"} className={"font-medium hover:text-gold-ink transition break-all"}>
      contact@jimmedaarjanataparty.org
      </a>
      <p className={"mt-1.5 text-sm text-ink/65 leading-snug"}>
      Official site / party matters — not this website.
      <a href={"https://jimmedaarjanataparty.org"} target={"_blank"} rel={"noopener noreferrer"} className={"underline hover:text-gold-ink transition"}>
      jimmedaarjanataparty.org
      </a>
      </p>
      </div>
      </li>
      <li className={"grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule pb-6"}>
      <div className={"condensed text-[0.7rem] text-ink/70"}>
      Press
      </div>
      <a href={"mailto:info@localhost"} className={"font-medium hover:text-gold-ink transition break-all"}>
      info@localhost
      </a>
      </li>
      <li className={"grid grid-cols-[7.5rem_1fr] gap-4"}>
      <div className={"condensed text-[0.7rem] text-ink/70"}>
      Headquarters
      </div>
      <div className={"font-medium"}>
      Wherever the people need us.
      </div>
      </li>
      </ul>
      </div>
      <div className={"bg-paper-soft border-2 border-ink rounded-sm p-8 sm:p-10 flex flex-col justify-center items-center text-center shadow-[6px_6px_0_0_rgba(42,24,72,0.35)]"}>
      <div className={"eyebrow text-gold-ink mb-4"}>
      Drop a line
      </div>
      <p className={"font-display text-3xl sm:text-4xl leading-tight mb-2"}>
      Open your 
      <em className={"text-gold-ink"}>
      mailbox.
      </em>
      </p>
      <p className={"text-sm text-ink/70 max-w-xs mb-8 leading-relaxed"}>
      No forms. No captchas. Agenda questions welcome — for official party matters, write to
      contact@jimmedaarjanataparty.org
      .
      </p>
      <a href={"mailto:contact@localhost?subject=Website%20query"} className={"condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-4 rounded-sm hover:bg-gold hover:text-ink transition inline-flex items-center gap-2"}>
      EMAIL US 
      <span aria-hidden={"true"}>
      →
      </span>
      </a>
      </div>
      </div>
      </section>
      <div className={"max-w-3xl mx-auto px-4 sm:px-6"}>
      <aside aria-label={"Advertisement"} data-ad-placement={"home_end"} data-ad-variant={"block"} data-testid={"ad-slot"} className={"my-10 border border-ink/25 bg-paper-soft px-3 pt-3 pb-4 sm:px-4 sm:pt-3.5 sm:pb-5"} style={{minHeight: "280px"}}>
      <div className={"flex items-center gap-3 shrink-0 mb-3"} aria-hidden={"true"}>
      <span className={"condensed text-[0.65rem] tracking-[0.2em] uppercase text-ink/45"}>
      Advertisement
      </span>
      <span className={"h-px flex-1 bg-ink/15"}></span>
      </div>
      <div className={""}>
      <ins className={"adsbygoogle"} style={{display: "block", width: "100%", minHeight: "224px"}} data-ad-client={"ca-pub-4127993377562392"} data-ad-slot={"2830448517"} data-ad-format={"auto"} data-full-width-responsive={"true"}></ins>
      </div>
      </aside>
      </div>
    </>
  );
}
