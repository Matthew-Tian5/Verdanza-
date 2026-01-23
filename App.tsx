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
import backgroundImage from './images/Opening Background.jpg';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // --- 1. Scroll Animations (Kept from your code) ---
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

  // --- 2. Entrance "Ripple" Animation ---
  // Start at -20% to ensure the screen is FULLY white (solid) initially.
  // The hole won't appear until this value crosses 0%.
  const revealPercentage = useMotionValue(-20);

  useEffect(() => {
    // Animate from -20% (Solid White) to 150% (Full Forest)
    const enterAnimation = animate(revealPercentage, 150, {
      duration: 4,          // Slow transition
      ease: "easeInOut",
      delay: 1.5,           // Wait for text/content to load
    });
    
    return () => enterAnimation.stop();
  }, [revealPercentage]);

  // The Mask Logic:
  // - transparent: Defines the "Hole" (Reveals the Forest underneath)
  // - black: Defines the "Solid" part (Shows the White layer)
  // By animating from -20%, the 'transparent' part is technically "off-screen" initially, 
  // leaving the mask fully black (opaque/visible).
  const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${revealPercentage}%, black calc(${revealPercentage}% + 20%))`;

  return (
    <Router>
      <ScrollToTop />
      
      {/* Background Layer Group */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-white">
        
        {/* 1. The Dynamic Forest Layer (Bottom) */}
        {/* This layer has your original blur/scale/parallax effects */}
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
        {/* Sits ON TOP of the forest. The mask cuts a hole in it. */}
        <motion.div
          className="absolute inset-0 bg-white z-10 pointer-events-none"
          style={{ 
            maskImage,
            WebkitMaskImage: maskImage // Required for Safari
          }}
        />
        
        {/* 3. The Scroll Overlay (Top) */}
        {/* Fades in white as you scroll down */}
        <motion.div 
          className="absolute inset-0 bg-white z-20"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* 4. Brand Gradient Tint (Overlay) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-verdanza/10 via-transparent to-verdanza-blue/5 pointer-events-none" />
      </div>
      
      {/* UI Layer */}
      <div className="relative z-30 min-h-screen flex flex-col font-sans text-charcoal selection:bg-verdanza selection:text-charcoal">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <EmailSidebar />
      </div>
    </Router>
  );
};

export default App;