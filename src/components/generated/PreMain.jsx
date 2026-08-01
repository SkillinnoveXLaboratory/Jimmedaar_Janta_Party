export default function PreMain() {
  return (
    <>
      <a href={"#main-content"} className={"skip-link"}>
      Skip to content
      </a>
      <div role={"region"} aria-label={"Site announcement"} className={"relative z-40 border-b-2 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none -translate-y-1.5 opacity-0 border-ink/25 bg-gold text-ink"}>
      <div className={"relative mx-auto flex max-w-5xl items-center justify-center gap-2 py-2.5 sm:gap-2.5 sm:py-2.5 px-4 sm:px-6"}>
      <span aria-hidden={"true"} className={"hidden sm:inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink"}>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-megaphone"} aria-hidden={"true"}>
      <path d={"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}></path>
      <path d={"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}></path>
      <path d={"M8 6v8"}></path>
      </svg>
      </span>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-megaphone pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 sm:hidden text-ink/80"} aria-hidden={"true"}>
      <path d={"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}></path>
      <path d={"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}></path>
      <path d={"M8 6v8"}></path>
      </svg>
      <p className={"min-w-0 flex-1 text-center text-[0.8rem] sm:text-sm font-semibold leading-normal tracking-[0.005em] text-balance"} aria-live={"polite"}>
      ✊ You can imprison a revolutionary, but you can never imprison the revolution. 🔥 #Accountability #Education #Truth #Reform 💡 True change begins with ideas, courage, and education. 📚 Stand for accountability, seek truth, and inspire progress. 🚀
      </p>
      </div>
      </div>
      <button type={"button"} aria-label={"Swarm Chat"} aria-expanded={"false"} className={" fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center gap-2 px-3 py-3 sm:px-4 sm:py-3.5 bg-ink text-paper rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] border-2 border-gold/60 hover:bg-gold hover:text-ink hover:border-ink active:bg-gold/90 transition min-h-[52px] min-w-[52px] "}>
      <svg xmlns={"http://www.w3.org/2000/svg"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-message-circle"} aria-hidden={"true"}>
      <path d={"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}></path>
      </svg>
      <span className={"hidden sm:inline text-[0.72rem] sm:text-[0.75rem] font-bold tracking-[0.18em] uppercase"} style={{fontFamily: "var(--font-condensed)"}}>
      Swarm Chat
      </span>
      </button>
      <link rel={"preload"} as={"image"} imagesrcset={"/_next/image?url=%2Fhero-main.jpg&w=32&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 32w, /_next/image?url=%2Fhero-main.jpg&w=48&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 48w, /_next/image?url=%2Fhero-main.jpg&w=64&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 64w, /_next/image?url=%2Fhero-main.jpg&w=96&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 96w, /_next/image?url=%2Fhero-main.jpg&w=128&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 128w, /_next/image?url=%2Fhero-main.jpg&w=256&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 256w, /_next/image?url=%2Fhero-main.jpg&w=384&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 384w, /_next/image?url=%2Fhero-main.jpg&w=640&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 640w, /_next/image?url=%2Fhero-main.jpg&w=750&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 750w, /_next/image?url=%2Fhero-main.jpg&w=828&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 828w, /_next/image?url=%2Fhero-main.jpg&w=1080&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 1080w, /_next/image?url=%2Fhero-main.jpg&w=1200&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 1200w, /_next/image?url=%2Fhero-main.jpg&w=1920&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 1920w, /_next/image?url=%2Fhero-main.jpg&w=2048&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 2048w, /_next/image?url=%2Fhero-main.jpg&w=3840&q=75&dpl=dpl_F2kEqVggSuhiuEHGMXxU799tMezK 3840w"} imagesizes={"(max-width: 640px) 140px, (max-width: 768px) 180px, 210px"} />
    </>
  );
}
