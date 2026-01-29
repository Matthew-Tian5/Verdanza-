import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue, 
  animate 
} from 'framer-motion';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Extracted Background Component to use Router Context
const BackgroundLayers: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // --- Animation Hooks (Moved from App) ---
  const { scrollY } = useScroll();

  // Parallax: Background moves down slightly (0px to 200px)
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  
  // Scale: Subtle zoom in (105% to 115%)
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.15]);
  
  // Blur: Sharp to blurry (2px to 12px) mimics camera focus shifting
  const blurValue = useTransform(scrollY, [0, 600], [2, 12]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  
  // Opacity: The white overlay gets stronger (0.4 to 1)
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.4, 1]);

  // --- Entrance "Ripple" Animation ---
  const revealPercentage = useMotionValue(-20);

  useEffect(() => {
    // Only run the entrance animation if we are on the home page
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
      {/* Only render the complex forest background on Home */}
      {isHome && (
        <>
          {/* 1. The Dynamic Forest Layer (Bottom) */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              y,      
              scale,  
              filter  
            }}
          />
          
          {/* 2. The Loading White Ripple Layer (Middle) */}
          <motion.div
            className="absolute inset-0 bg-white z-10 pointer-events-none"
            style={{ 
              maskImage,
              WebkitMaskImage: maskImage // Required for Safari
            }}
          />
          
          {/* 3. The Scroll Overlay (Top) */}
          <motion.div 
            className="absolute inset-0 bg-white z-20"
            style={{ opacity: overlayOpacity }}
          />
          
          {/* 4. Brand Gradient Tint (Overlay) */}
          <div className="absolute inset-0 z-20 bg-gradient-to-br from-verdanza/10 via-transparent to-verdanza-blue/5 pointer-events-none" />
        </>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Background Logic handles visibility based on route */}
      <BackgroundLayers />
      
      {/* UI Layer */}
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