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
    <img
      src="/images/iconv1.jpeg"
      alt="Jimmedaar Janata Party"
      width={48}
      height={48}
      className="shrink-0 drop-shadow-sm rounded-sm object-cover w-12 h-12 border-2 border-ink"
    />
  );
}

export default function SiteHeader({ setShowJoinForm, setShowVerifyMember }) {
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
              setShowJoinForm?.(true);
            }}
          >
            JOIN JIMMEDAAR →
          </a>
          <a
            className="hidden xl:inline-flex items-center condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-3.5 py-3 min-h-[44px] rounded-sm hover:bg-ink hover:text-paper transition whitespace-nowrap"
            href="/voice/raise"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
              setShowVerifyMember?.(true);
            }}
          >
            VERIFY MEMBER →
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
                setShowJoinForm?.(true);
              }}
            >
              JOIN JIMMEDAAR →
            </a>
            <a
              className="condensed text-xs font-semibold tracking-wider border-2 border-ink text-ink px-5 py-3 rounded-sm text-center"
              href="/voice/raise"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
                setShowVerifyMember?.(true);
              }}
            >
              VERIFY MEMBER →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
