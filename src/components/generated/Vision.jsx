export default function Vision() {
  return (
    <>
      <section id={"vision"} className={"py-20 sm:py-28 md:py-32 relative"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center"}>
      <div>
      <div className={"eyebrow text-ink/65 mb-6"}>
      Our Promise
      </div>
      <h2 className={"text-5xl sm:text-6xl md:text-7xl mb-8 leading-[0.95]"}>
      Our Movement's 
      <em className={"text-gold-ink"}>
      Vision.
      </em>
      </h2>
      <p className={"text-base sm:text-lg leading-relaxed text-ink/80 mb-8 max-w-xl"}>
      Hum yahan bhashan ke liye nahi hain. Hum yahan kisan, garib, school, hospital aur thali ke daam ke liye hain — aath clear agendas, daily kaam.
      </p>
      <div className={"border-l-4 border-gold pl-5 max-w-xl"}>
      <div className={"eyebrow text-gold-ink mb-2"}>
      Our Mission
      </div>
      <p className={"text-base sm:text-lg leading-relaxed text-ink/85"}>
      Jimmedaar Janata Party isi agenda per kaam karegi: farmers facility, contract coal khatm, garibon ka rojgar, food tax kam, jahrile fruit band, sarkari school shiksha, sarkari hospital treatment, aur badhti mahangai rokna.
      </p>
      </div>
      <p className={"mt-6 max-w-xl text-sm leading-relaxed text-ink/60"}>
      Jimmedaar Janata Party logon ke aath agendas par kaam karti hai — kisan se lekar mahangai tak. Transparent, responsible, janata-first.
      <a className={"text-gold-ink underline underline-offset-2 hover:text-ink transition"} href={"/legal"}>
      {"Legal & transparency"}
      </a>
      .
      </p>
      </div>
      <aside className={"relative"}>
      <div className={"relative aspect-[4/5] border-2 border-ink rounded-sm overflow-hidden shadow-[6px_6px_0_0_rgba(42,24,72,0.35)]"}>
      <img alt={"Jimmedaar Janata Party banner with the crowd raising fists"} loading={"lazy"} decoding={"async"} data-nimg={"fill"} className={"object-cover"} style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes={"(max-width: 768px) 100vw, 40vw"} srcSet={"/images/image_318.jpg 256w, /images/image_254.jpg 384w, /images/image_249.jpg 640w, /images/image_256.jpg 750w, /images/image_334.jpg 828w, /images/image_325.jpg 1080w, /images/image_308.jpg 1200w, /images/image_264.jpg 1920w, /images/image_260.jpg 2048w, /images/image_18.jpg 3840w"} src={"/images/image_18.jpg"} />
      </div>
      <div className={"absolute -bottom-5 left-4 right-4 sm:right-auto sm:w-72 bg-paper border-2 border-ink rounded-sm px-4 py-3 flex items-center justify-between"}>
      <div className={"condensed text-[0.7rem] text-ink/70"}>
      Agenda · The People's Promise
      </div>
      <div className={"font-display text-sm text-ink"}>
      16 . 05 . 2026
      </div>
      </div>
      </aside>
      </div>
      </section>
    </>
  );
}
