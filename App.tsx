import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue, 
  animate 
} from 'framer-motion';
import Lenis from 'lenis'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailSidebar from './components/EmailSidebar';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Waitlist from './pages/Waitlist';
import SolutionOne from './pages/SolutionOne';
import SolutionTwo from './pages/SolutionTwo';
import backgroundImage from './images/Opening Background.jpg';

// Handles scrolling logic via Lenis and Router
const ScrollManager: React.FC<{ lenis: Lenis | null }> = ({ lenis }) => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If navigating to a new page (PUSH) or Replacing, force scroll to top
    // We ignore 'POP' (Back button) so the browser/manual logic can restore position
    if (navType !== 'POP') {
      // 1. Force native scroll
      window.scrollTo(0, 0);
      
      // 2. Force Lenis scroll (critical for smooth scroll sync)
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, navType, lenis]);
  
  return null;
};

const BackgroundLayers: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.15]);
  const blurValue = useTransform(scrollY, [0, 600], [2, 12]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.4, 1]);
  const revealPercentage = useMotionValue(-20);

  useEffect(() => {
    if (isHome) {
      const enterAnimation = animate(revealPercentage, 150, {
        duration: 4,          
        ease: "easeInOut",
        delay: 1.5,           
      });
      return () => enterAnimation.stop();
    }
  }, [revealPercentage, isHome]);

  const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${revealPercentage}%, black calc(${revealPercentage}% + 20%))`;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white">
      {isHome && (
        <>
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              y,      
              scale,  
              filter  
            }}
          />
          <motion.div
            className="absolute inset-0 bg-white z-10 pointer-events-none"
            style={{ 
              maskImage,
              WebkitMaskImage: maskImage 
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-white z-20"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-br from-verdanza/10 via-transparent to-verdanza-blue/5 pointer-events-none" />
        </>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Smooth Scroll (Lenis)
  useEffect(() => {
    const newLenis = new Lenis({
      duration: 0, 
      easing: (t) => Math.min(5, 1.001 - Math.pow(5, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    setLenis(newLenis);

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollManager lenis={lenis} />
      
      <BackgroundLayers />
      
      <div className="relative z-30 min-h-screen flex flex-col font-sans text-charcoal selection:bg-verdanza selection:text-charcoal">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/solution-1" element={<SolutionOne />} />
            <Route path="/solution-2" element={<SolutionTwo />} />
          </Routes>
        </main>

        <Footer />
        <EmailSidebar />
      </div>
    </Router>
  );
};

export default App;