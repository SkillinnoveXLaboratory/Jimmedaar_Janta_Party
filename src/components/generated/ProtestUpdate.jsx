export default function ProtestUpdate() {
  return (
    <>
      <section className={"py-12 sm:py-16 border-y-2 border-ink/10 bg-paper-soft"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6"}>
      <div className={"grid md:grid-cols-[1fr_auto] gap-6 items-center"}>
      <div>
      <div className={"eyebrow text-gold-ink mb-2"}>
      Latest protest update
      </div>
      <h2 className={"font-display text-2xl sm:text-3xl leading-tight mb-2"}>
      <a className={"hover:text-gold-ink transition"} href={"/protests"}>
      When the Party Door Knocks, It Usually Wants Your Soul
      </a>
      </h2>
      <p className={"text-sm text-ink/70"}>
      <time dateTime={"2026-08-01 09:53:34"}>
      1 Aug 2026
      </time>
      </p>
      </div>
      <div className={"flex flex-col sm:flex-row gap-3 md:justify-end"}>
      <a className={"condensed text-xs font-semibold tracking-wider bg-ink text-paper px-6 py-3 rounded-sm hover:bg-gold hover:text-ink transition text-center"} href={"/protests"}>
      VIEW TIMELINE →
      </a>
      <a href={"http://localhost:5173/news/cjp-founder-abhijeet-dipke-received-bjp-join-or-face-consequences-threat-claims"} rel={"noopener noreferrer"} className={"condensed text-xs font-semibold tracking-wider border-2 border-ink px-6 py-3 rounded-sm hover:border-gold hover:text-gold-ink transition text-center"}>
      READ DISPATCH →
      </a>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
