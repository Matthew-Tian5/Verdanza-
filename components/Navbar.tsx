import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls if navbar is shown
  const [isScrolled, setIsScrolled] = useState(false); // Controls bg style
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // On Home page: Show navbar ONLY after scrolling past hero (approx 100vh)
      if (isHome) {
        setIsVisible(scrollY > windowHeight - 100); 
      } else {
        // On other pages: Always visible
        setIsVisible(true);
      }
      
      // Standard scroll effect for background
      setIsScrolled(scrollY > 20);
    };

    // Run once on mount to check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Waitlist', path: '/waitlist' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'py-4 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-lg shadow-verdanza/5' 
              : 'py-6 bg-white/50 backdrop-blur-md'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-1 group relative z-50">
               <MagneticButton>
                <img 
                    src="/images/Verdanza logo clear.png" 
                    alt="Verdanza Tech" 
                    className="h-[80px] w-auto object-contain"
                />
              </MagneticButton>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <MagneticButton key={link.path}>
                    <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                        `px-4 py-2 text-base font-medium transition-colors hover:text-verdanza block ${
                        isActive ? 'text-verdanza font-semibold' : 'text-gray-600'
                        }`
                    }
                    >
                    {link.name}
                    </NavLink>
                </MagneticButton>
              ))}
              
              <MagneticButton>
                <NavLink
                    to="/contact"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#1ad8ac] to-[#06b48b] text-white text-base font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_10px_rgba(6,180,139,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_15px_rgba(6,180,139,0.4)] transition-all border border-[#06b48b]/20 block"
                >
                    Get Started
                </NavLink>
              </MagneticButton>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-charcoal relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100vh' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-white/50 overflow-hidden shadow-xl pt-32"
              >
                <div className="flex flex-col p-6 gap-6 items-center text-center">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-2xl font-medium ${isActive ? 'text-verdanza' : 'text-gray-600'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;