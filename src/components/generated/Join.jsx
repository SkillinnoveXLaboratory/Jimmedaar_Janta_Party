export default function Join() {
  const agendas = [
    { id: '01', title: 'Kisanon Ko Facility', desc: 'MSP, irrigation, cold storage, easy credit for farmers.' },
    { id: '02', title: 'Contract Coal Khatm', desc: 'End exploitative coal contracts and opaque deals.' },
    { id: '03', title: 'Garibon Ke Liye Rojgar', desc: 'Honest jobs, skills training, fair wages for the poor.' },
    { id: '04', title: 'Food Items Par Tax Kam', desc: 'Lower tax on atta, dal, oil, sabzi and doodh.' },
    { id: '05', title: 'Jahrile Fruit Nahi', desc: 'No toxic or chemically poisoned fruit in markets.' },
    { id: '06', title: 'Sarkari School Shiksha', desc: 'Quality education in government schools for every child.' },
    { id: '07', title: 'Sarkari Hospital Treatment', desc: 'Doctors, medicines and clean care in government hospitals.' },
    { id: '08', title: 'Badhti Mahangai Rokna', desc: 'Stop rising prices on fuel, food, rent and essentials.' },
  ];

  return (
    <>
      <section id={"join"} className={"py-20 sm:py-28 md:py-32"}>
      <div className={"max-w-5xl mx-auto px-4 sm:px-6"}>
      <div className={"text-center mb-14 max-w-2xl mx-auto"}>
      <div className={"eyebrow text-ink/65 mb-5"}>
      Membership
      </div>
      <h2 className={"text-5xl sm:text-6xl md:text-7xl mb-6"}>
      Do you stand with our{" "}
      <em className={"text-gold-ink"}>
      agendas?
      </em>
      </h2>
      <p className={"text-base sm:text-lg text-ink/75"}>
      Jimmedaar Janata Party isi agenda per kaam karega. Tap the agendas you support.
      </p>
      </div>
      <ul className={"space-y-4"}>
      {agendas.map((item) => (
      <li key={item.id}>
      <button type={"button"} aria-pressed={"false"} className={"w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 items-center border-2 rounded-sm px-5 sm:px-7 py-5 sm:py-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 bg-paper-soft border-ink hover:border-gold"}>
      <div className={"condensed text-[0.7rem] text-ink/70 hidden sm:block w-16"}>
      REQ / {item.id}
      </div>
      <div>
      <div className={"font-display text-xl sm:text-2xl"}>
      {item.title}
      </div>
      <div className={"text-sm sm:text-base text-ink/70 mt-1"}>
      {item.desc}
      </div>
      </div>
      <div aria-hidden={"true"} className={"w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display text-lg transition text-ink/25"}>
      ✓
      </div>
      </button>
      </li>
      ))}
      </ul>
      <div className={"text-center mt-8 mb-6 min-h-[3rem]"} aria-live={"polite"}>
      <p className={"text-sm text-ink/70 italic max-w-xl mx-auto leading-relaxed"}>
      Tap the agendas you believe in. (All eight. It’s fine.)
      </p>
      </div>
      <div className={"text-center mt-10"}>
      <a className={"condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-4 rounded-sm hover:bg-gold hover:text-ink transition inline-flex items-center gap-2"} href={"/join"}>
      JOIN JIMMEDAAR
      <span aria-hidden={"true"}>
      →
      </span>
      </a>
      <p className={"text-sm text-ink/70 mt-4 max-w-md mx-auto leading-relaxed"}>
      Join{" "}
      <strong className={"text-ink"}>
      39,514
      </strong>
      {" "}members · 4382 joined this week. Free, lifelong, and revocable only by you. No fees.
      </p>
      </div>
      </div>
      </section>
    </>
  );
}
