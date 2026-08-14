export default function Hero({ setShowJoinForm }) {
  return (
    <>
      <section aria-label={"Hero — Jimmedaar Janata Party agendas"} className={"relative jjp-hero text-paper overflow-hidden border-b-2 border-[#c9a227]/40 min-h-[100svh] sm:min-h-[88vh] flex"}>
      <div className={"absolute inset-0"} style={{contain: "paint"}} aria-hidden={"true"}>
      <div className={"absolute inset-0"} style={{background: "radial-gradient(ellipse at 50% 30%, #4c1d95 0%, #2a1848 55%, #1e1038 100%)"}}></div>
      <div className={"absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"} style={{background: "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.35) 0%, rgba(76,29,149,0.2) 35%, transparent 70%)"}}></div>
      <div className={"absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none"}></div>
      
      
      <div className={"absolute inset-0 pointer-events-none"} style={{background: "radial-gradient(ellipse at 28% 45%, transparent 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)"}}></div>
      </div>
      <div className={"relative z-10 w-full self-stretch flex items-center"}>
      <div className={"max-w-7xl w-full mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-28 sm:pb-32"}>
      <div className={"max-w-2xl"}>
      <div>
      <div className={"eyebrow text-gold mb-5 sm:mb-6 flex items-center gap-3"}>
      <span className={"inline-block"} style={{width: "12px", height: "12px", background: "#a78bfa", transform: "rotate(45deg)"}} aria-hidden={"true"}></span>
      <span>
      Eight Agendas · Since 2026
      </span>
      </div>
<h1 className="text-[1.9rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.98] sm:leading-[0.92] mb-6 sm:mb-8 break-words font-black">
  <span
    className="block font-black"
    style={{ color: "#138808" }}
  >
    Jimmedaar
  </span>

  <span
    className="block font-black"
    style={{ color: "#FFFFFF" }}
  >
    Janata
  </span>

  <span
    className="block font-black"
    style={{ color: "#FF9933" }}
  >
    Party.
  </span>
</h1>
      </div>
      <p className={"condensed text-[0.68rem] sm:text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft/90 mb-5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"}>
      Kisan · Rojgar · Shiksha · Sehat · Mahangai
      </p>
      <p className={"max-w-xl text-base sm:text-lg leading-relaxed text-paper/85 mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"}>
      Eight agendas. Community powered. Jimmedaar Janata Party isi agenda per kaam karega.
      </p>
      <div className={"flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5"}>
      <a className={"condensed text-sm font-semibold tracking-wider bg-black text-white px-7 py-4 min-h-[48px] rounded-sm hover:bg-paper hover:text-ink transition inline-flex items-center justify-center gap-2 shadow-[0_6px_18px_rgba(124,58,237,0.4)]"} href={"/join"} onClick={(event) => { event.preventDefault(); event.stopPropagation(); setShowJoinForm?.(true); }}>
      JOIN MEMBER
      <span aria-hidden={"true"}>
      →
      </span>
      </a>
      <a className={"condensed text-sm font-semibold tracking-wider border-2 border-paper text-paper px-7 py-4 min-h-[48px] rounded-sm hover:bg-paper hover:text-ink transition inline-flex items-center justify-center backdrop-blur-sm bg-black/20"} href={"#manifesto"}>
      READ THE MANIFESTO
      </a>
      </div>
      <a className={"condensed inline-flex items-center gap-2 text-[0.72rem] sm:text-xs font-semibold tracking-[0.1em] text-paper/70 underline underline-offset-4 decoration-paper/30 hover:text-paper hover:decoration-gold transition mb-12 min-h-[44px] drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"} href={"/protest-guidelines"}>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-shield-check shrink-0 text-gold-soft"} aria-hidden={"true"}>
      <path d={"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}></path>
      <path d={"m9 12 2 2 4-4"}></path>
      </svg>
      Read our eight agendas
      </a>
      </div>
      </div>
      </div>
      <div className={"absolute inset-x-0 bottom-0 z-20"}>
      <div className={"jjp-hero-ticker text-paper border-t-2 py-2 overflow-hidden"}>
      <div className={"news-ticker-track"}>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      BREAKING · JJP: Kisanon ko facility denge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      EXIT POLLS · Garibon ke liye rojgar laayenge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      EXCLUSIVE · "Kisanon ko facility denge" — leader
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      TRENDING · #JimmedaarJanataParty top all India
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      MARKETS · Food items par tax kam karenge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      WEATHER · Badhti mahangai rokna hai
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      BREAKING · JJP: Kisanon ko facility denge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      EXIT POLLS · Garibon ke liye rojgar laayenge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      EXCLUSIVE · "Kisanon ko facility denge" — leader
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      TRENDING · #JimmedaarJanataParty top all India
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      MARKETS · Food items par tax kam karenge
      </span>
      </span>
      <span className={"condensed text-[0.7rem] sm:text-xs font-semibold inline-flex items-center gap-3 px-6"}>
      <span className={"text-gold-soft"}>
      ●
      </span>
      <span>
      WEATHER · Badhti mahangai rokna hai
      </span>
      </span>
      </div>
      </div>
      </div>
      </section>
      <div className={"bg-paper-soft border-y-2 border-ink/15 py-3"}>
      <div className={"overflow-hidden"}>
      <div className={"marquee-track marquee-track-fast"}>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Kisanon Ko Facility
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Mahangai Rokna Hai
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Rojgar · Shiksha · Sehat
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Eight Agendas · One Mission
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Kisanon Ko Facility
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Mahangai Rokna Hai
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Rojgar · Shiksha · Sehat
      </span>
      </span>
      <span className={"condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6"}>
      <span className={"text-gold-ink"}>
      ✦
      </span>
      <span>
      Eight Agendas · One Mission
      </span>
      </span>
      </div>
      </div>
      </div>
    </>
  );
}
