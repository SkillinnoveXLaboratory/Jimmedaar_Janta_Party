import PreMain from './generated/PreMain.jsx';
import SiteHeader from './SiteHeader.jsx';
import MainIntro from './generated/MainIntro.jsx';
import SiteFooter from './generated/SiteFooter.jsx';
import Hero from './generated/Hero.jsx';
import ProtestUpdate from './generated/ProtestUpdate.jsx';
import ViralVideos from './generated/ViralVideos.jsx';
import TopPatronHeading from './generated/TopPatronHeading.jsx';
import Vision from './generated/Vision.jsx';
import Manifesto from './generated/Manifesto.jsx';
import Faq from './generated/Faq.jsx';
import News from './generated/News.jsx';
import Articles from './generated/Articles.jsx';
import Join from './generated/Join.jsx';
import RevolutionariesHeading from './generated/RevolutionariesHeading.jsx';
import Contact from './generated/Contact.jsx';

export default function HomePage({ setShowJoinForm, setShowVerifyMember }) {
  return (
    <>
      <PreMain />
      <main id="main-content" className="min-h-screen bg-paper text-ink relative">
        <SiteHeader setShowJoinForm={setShowJoinForm} setShowVerifyMember={setShowVerifyMember} />
        <MainIntro />
      <Hero setShowJoinForm={setShowJoinForm} />
      <ProtestUpdate />
      <ViralVideos />
      <TopPatronHeading />
      <Vision />
      <Manifesto />
      <Faq />
      <News />
      <Articles />
      <Join setShowJoinForm={setShowJoinForm} />
      <RevolutionariesHeading />
      <Contact />
        <SiteFooter />
      </main>
    </>
  );
}
