import { useEffect, useState } from 'react';
import HomePage from './components/HomePage.jsx';
import JoinForm from './components/JoinForm.jsx';
import VerifyMember from './components/VerifyMember.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import { useSiteInteractions } from './hooks/useSiteInteractions.js';
import siteMeta from './site-meta.json';

function getRouteFromHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#/admin/login')) return 'admin-login';
  if (hash.startsWith('#/admin/dashboard')) return 'admin-dashboard';
  return 'home';
}

export default function App() {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [showVerifyMember, setShowVerifyMember] = useState(false);
  const [route, setRoute] = useState(getRouteFromHash);
  useSiteInteractions();

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = 'en-IN';
    document.documentElement.dataset.locale = 'en';
    document.documentElement.className = siteMeta.htmlClass;

    if (route.startsWith('admin')) {
      document.title = route === 'admin-login' ? 'Admin Login — JJP' : 'Admin Dashboard — JJP';
    } else {
      document.title = siteMeta.title;
    }

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
  }, [route]);

  if (route === 'admin-login') {
    return <AdminLogin />;
  }

  if (route === 'admin-dashboard') {
    return <AdminDashboard />;
  }

  return (
    <>
      <HomePage setShowJoinForm={setShowJoinForm} setShowVerifyMember={setShowVerifyMember} />
      {showJoinForm && <JoinForm onClose={() => setShowJoinForm(false)} />}
      {showVerifyMember && <VerifyMember onClose={() => setShowVerifyMember(false)} />}
    </>
  );
}
