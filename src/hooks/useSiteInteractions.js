import { useEffect } from 'react';

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
  '/legal': '#contact',
  '/privacy': '#contact',
};

function initCarousels(root) {
  root.querySelectorAll('[data-slot="carousel"]').forEach((carousel) => {
    const content = carousel.querySelector('[data-slot="carousel-content"] > div, [data-slot="carousel-content"]');
    const track = content?.firstElementChild ?? content;
    const prev = carousel.querySelector('[data-slot="carousel-previous"]');
    const next = carousel.querySelector('[data-slot="carousel-next"]');
    if (!track || !prev || !next) return;

    let index = 0;
    const items = [...track.querySelectorAll('[data-slot="carousel-item"]')];
    if (items.length <= 1) return;

    const gap = 16;
    const step = () => {
      const item = items[0];
      if (!item) return item?.offsetWidth ?? 320;
      return item.getBoundingClientRect().width + gap;
    };

    const update = () => {
      const amount = step() * index;
      track.style.transform = `translate3d(-${amount}px, 0, 0)`;
      track.style.transition = 'transform 0.35s ease';
      prev.disabled = index <= 0;
      next.disabled = index >= items.length - 1;
    };

    prev.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      update();
    });
    next.addEventListener('click', () => {
      index = Math.min(items.length - 1, index + 1);
      update();
    });

    prev.disabled = false;
    next.disabled = items.length <= 1;
    update();
  });
}

export function useSiteInteractions() {
  useEffect(() => {
    const root = document.getElementById('root');

    const onClick = (event) => {
      const anchor = event.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      const hash = SECTION_ROUTES[href.split('?')[0]];
      if (hash) {
        event.preventDefault();
        const target = document.querySelector(hash);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (hash === '#main-content') window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const onSubmit = (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
    };

    root?.addEventListener('click', onClick);
    root?.addEventListener('submit', onSubmit);
    initCarousels(root ?? document);

    return () => {
      root?.removeEventListener('click', onClick);
      root?.removeEventListener('submit', onSubmit);
    };
  }, []);
}
