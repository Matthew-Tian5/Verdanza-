import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';

const EmailSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already dismissed it in session storage logic could go here
      setIsVisible(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
           {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
          />

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 md:top-auto md:bottom-8 md:right-8 w-full md:w-96 h-full md:h-auto z-[70] bg-white/90 backdrop-blur-xl border border-gray-200/50 md:rounded-2xl shadow-2xl p-8 flex flex-col justify-center md:block"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-verdanza/10 flex items-center justify-center text-verdanza mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 4 5l10-10 10 10s2 2 2 4.5V17z"></path></svg>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-charcoal">Join the Movement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay updated with the latest in sustainable AI technology and our Plate Patrol initiatives.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 rounded-xl text-green-700 flex items-center gap-3"
                >
                  <Check size={20} />
                  <span className="font-medium">Thanks for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-charcoal text-white font-medium hover:bg-black transition-all flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EmailSidebar;