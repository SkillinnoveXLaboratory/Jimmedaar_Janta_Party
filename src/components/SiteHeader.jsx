import { useState, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Vision', href: '#vision' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Articles', href: '/articles' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Members', href: '/members' },
  { label: 'Issues', href: '/voice' },
  { label: 'Agendas', href: '#manifesto' },
  { label: 'Protests', href: '/protests' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_ROUTES = {
  '/': '#main-content',
  '/join': '#join',
  '/articles': '#articles',
  '/gallery': '#viral-videos',
  '/members': '#join',
  '/voice': '#contact',
  '/agenda-tracker': '#manifesto',
  '/protests': '#news',
  '/support-the-developer': '#contact',
  '/voice/raise': '#contact',
};

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true">
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PartyEmblem() {
  return (
    <svg width="48" height="48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jimmedaar Janata Party emblem" className="shrink-0 drop-shadow-sm">
      <circle cx="100" cy="100" r="96" fill="#F4F7FC" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="#2A1848" strokeWidth="6" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="#2A1848" strokeWidth="1.8" />
      <g fill="#7C3AED">
        <polygon points="100,18 101.8,22.6 106.8,22.6 102.7,25.4 104.4,30 100,27.2 95.6,30 97.3,25.4 93.2,22.6 98.2,22.6" />
        <polygon points="100,182 101.8,177.4 106.8,177.4 102.7,174.6 104.4,170 100,172.8 95.6,170 97.3,174.6 93.2,177.4 98.2,177.4" />
        <circle cx="18" cy="100" r="2.4" />
        <circle cx="182" cy="100" r="2.4" />
      </g>
      <g transform="translate(100 107)" fill="#2A1848" stroke="#2A1848" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -3 -34 Q -15 -50 -30 -56" fill="none" strokeWidth="3" />
        <path d="M 3 -34 Q 15 -50 30 -56" fill="none" strokeWidth="3" />
        <path d="M -12 -10 Q -28 -16 -42 -22" fill="none" strokeWidth="3.6" />
        <path d="M -16 2 Q -34 4 -48 2" fill="none" strokeWidth="3.6" />
        <path d="M -12 20 Q -28 30 -40 38" fill="none" strokeWidth="3.6" />
        <path d="M 12 -10 Q 28 -16 42 -22" fill="none" strokeWidth="3.6" />
        <path d="M 16 2 Q 34 4 48 2" fill="none" strokeWidth="3.6" />
        <path d="M 12 20 Q 28 30 40 38" fill="none" strokeWidth="3.6" />
        <ellipse cx="0" cy="-28" rx="8" ry="6" />
        <path d="M -14 -22 Q -14 -8 -10 -4 L 10 -4 Q 14 -8 14 -22 Q 0 -27 -14 -22 Z" />
        <path d="M -16 -5 Q -22 4 -18 18 Q -12 32 0 34 Q 12 32 18 18 Q 22 4 16 -5 Z" />
        <line x1="0" y1="-3" x2="0" y2="32" stroke="#F4F7FC" strokeWidth="1.4" opacity="0.55" />
      </g>
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navigate = useCallback((href, event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);

    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const hash = SECTION_ROUTES[href.split('?')[0]];
    if (hash) {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (hash === '#main-content') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 border-b-2 border-ink/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
        <a className="flex shrink-0 items-center gap-3 group" href="/" onClick={(e) => navigate('/', e)}>
          <PartyEmblem />
          <div className="leading-none">
            <div className="condensed text-[0.95rem] sm:text-base font-semibold tracking-wider whitespace-nowrap text-ink">
              <div>JIMMEDAAR</div>
              <div>JANATA PARTY</div>
            </div>
            <div className="text-[0.65rem] mt-1 whitespace-nowrap text-ink/60">जिम्मेदार जनता पार्टी · Est. 2026</div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-4 xl:gap-5" aria-label="Primary">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              className="condensed text-[0.8rem] xl:text-[0.85rem] font-medium hover:text-gold transition"
              href={href}
              onClick={(e) => navigate(href, e)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="false"
              className="flex items-center gap-1.5 px-2.5 py-2 condensed text-xs font-medium tracking-wider rounded-sm border border-transparent text-ink hover:text-gold hover:border-ink/20 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="hidden sm:inline">English</span>
              <span className="sm:hidden uppercase">en</span>
              <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform ">
                <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <a
            className="hidden xl:inline-flex items-center condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-3.5 py-3 min-h-[44px] rounded-sm hover:bg-ink hover:text-paper transition whitespace-nowrap"
            href="/support-the-developer"
            onClick={(e) => navigate('/support-the-developer', e)}
          >
            SUPPORT THE DEV →
          </a>
          <a
            className="hidden sm:inline-flex items-center condensed text-xs font-semibold tracking-wider bg-ink text-paper px-3.5 sm:px-4 py-3 min-h-[44px] rounded-sm hover:bg-gold hover:text-ink transition whitespace-nowrap"
            href="/join"
            onClick={(e) => navigate('/join', e)}
          >
            JOIN JIMMEDAAR →
          </a>
          <a
            className="hidden xl:inline-flex items-center condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-3.5 py-3 min-h-[44px] rounded-sm hover:bg-ink hover:text-paper transition whitespace-nowrap"
            href="/voice/raise"
            onClick={(e) => navigate('/voice/raise', e)}
          >
            RAISE AN ISSUE →
          </a>

          <button
            type="button"
            className="xl:hidden p-2 -mr-1 text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-ink/15 bg-paper" aria-label="Mobile" data-mobile-nav="">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                className="condensed text-sm font-medium"
                href={href}
                onClick={(e) => navigate(href, e)}
              >
                {label}
              </a>
            ))}
            <a
              className="condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-5 py-3 rounded-sm text-center"
              href="/support-the-developer"
              onClick={(e) => navigate('/support-the-developer', e)}
            >
              SUPPORT THE DEV →
            </a>
            <a
              className="condensed text-xs font-semibold tracking-wider bg-ink text-paper px-5 py-3 rounded-sm text-center mt-2"
              href="/join"
              onClick={(e) => navigate('/join', e)}
            >
              JOIN JIMMEDAAR →
            </a>
            <a
              className="condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-5 py-3 rounded-sm text-center"
              href="/voice/raise"
              onClick={(e) => navigate('/voice/raise', e)}
            >
              RAISE AN ISSUE →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
