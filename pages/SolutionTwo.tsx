import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionTwo: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center relative z-10">
      {/* Background shape for the page underneath */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-verdanza-blue/5 -z-10 rounded-r-[100px]" />

      {/* The Large "Box" Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/60 relative overflow-hidden flex flex-col"
        style={{ minHeight: '80vh' }}
      >
        {/* Decorative gradient bar at the top inside the box */}
        <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-r from-verdanza-blue to-verdanza-dark" />

        {/* X Button to Close */}
        <Link
          to="/"
          className="absolute top-8 right-8 z-20 p-3 rounded-full bg-gray-100/80 hover:bg-gray-200 text-charcoal transition-all hover:rotate-90 hover:shadow-md"
          aria-label="Close"
        >
          <X size={32} />
        </Link>

        {/* Box Content - Aligned Right for variety */}
        <div className="p-10 md:p-16 lg:p-20 overflow-y-auto flex flex-col items-end text-right">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-verdanza-blue/10 text-verdanza-blue font-bold uppercase tracking-wider text-sm">
            Community Initiative
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-10">
            Solution Two Title
          </h1>

          <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed max-w-4xl flex flex-col items-end">
            <p className="mb-8 text-2xl font-light text-gray-500">
              This is a larger description for Solution Two. It focuses on the community aspects, educational programs, or broader impact strategies.
            </p>
            <p className="mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="bg-white/50 rounded-2xl p-8 border border-white/50 shadow-sm my-10 w-full text-left">
              <h3 className="text-2xl font-bold text-charcoal mb-6 font-display">Program Goals</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span>Goal one focused on sustainability metrics and tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span>Goal two focused on deep community engagement and workshops.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span>Goal three focused on long-term behavioral change in households.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionTwo;