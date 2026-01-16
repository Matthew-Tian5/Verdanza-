import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-lg shadow-verdanza/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-1 group">
          <img 
            src="/images/Copy of Verdanza Tech Logo.png" 
            alt="Verdaza Tech" 
            className="h-25 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-verdanza ${
                  isActive ? 'text-verdanza font-semibold' : 'text-gray-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
             to="/contact"
             className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#1ad8ac] to-[#06b48b] text-white text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_10px_rgba(6,180,139,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_15px_rgba(6,180,139,0.4)] hover:-translate-y-0.5 transition-all border border-[#06b48b]/20"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-charcoal"
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-b border-white/50 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? 'text-verdanza' : 'text-gray-600'}`
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
  );
};

export default Navbar;