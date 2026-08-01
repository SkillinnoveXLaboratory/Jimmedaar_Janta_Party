import { useEffect } from 'react';
import HomePage from './components/HomePage.jsx';
import { useSiteInteractions } from './hooks/useSiteInteractions.js';
import siteMeta from './site-meta.json';

export default function App() {
  useSiteInteractions();

  useEffect(() => {
    document.documentElement.lang = 'en-IN';
    document.documentElement.dataset.locale = 'en';
    document.documentElement.className = siteMeta.htmlClass;
    document.title = siteMeta.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = siteMeta.description;

    if (siteMeta.ldJson) {
      let ld = document.getElementById('ld-json');
      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = 'ld-json';
        document.head.appendChild(ld);
      }
      ld.textContent = siteMeta.ldJson;
    }
  }, []);

  return <HomePage />;
}
