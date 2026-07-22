import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import MouseGlow from './components/MouseGlow';
import PageLoader from './components/PageLoader';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import VisionMissionSection from './sections/VisionMissionSection';
import ActivitiesSection from './sections/ActivitiesSection';
import WhySection from './sections/WhySection';
import GallerySection from './sections/GallerySection';
import JourneySection from './sections/JourneySection';
import JoinSection from './sections/JoinSection';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />
      {loaded && (
        <SmoothScroll>
          <ScrollProgress />
          <MouseGlow />
          <BackToTop />
          <main style={{ overflowX: 'clip' }}>
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <VisionMissionSection />
            <ActivitiesSection />
            <WhySection />
            <GallerySection />
            <JourneySection />
            <JoinSection />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
