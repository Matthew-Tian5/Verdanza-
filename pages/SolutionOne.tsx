import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionOne: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center relative z-10">
      {/* Background shape for the page underneath */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-verdanza/5 -z-10 rounded-l-[100px]" />

      {/* The Large "Box" Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/60 relative overflow-hidden flex flex-col"
        style={{ minHeight: '80vh' }}
      >
        {/* Decorative gradient bar at the top inside the box */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-verdanza to-verdanza-light" />

        {/* X Button to Close */}
        <Link
          to="/"
          className="absolute top-8 right-8 z-20 p-3 rounded-full bg-gray-100/80 hover:bg-gray-200 text-charcoal transition-all hover:rotate-90 hover:shadow-md"
          aria-label="Close"
        >
          <X size={32} />
        </Link>

        {/* Box Content */}
        <div className="p-10 md:p-16 lg:p-20 overflow-y-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-verdanza/10 text-verdanza font-bold uppercase tracking-wider text-sm">
            Our Solution
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-10">
            Solution One Title
          </h1>

          <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed max-w-4xl">
            <p className="mb-8 text-2xl font-light text-gray-500">
              This is a larger description for Solution One. It provides in-depth details about the technology, methodology, and impact of this specific initiative, presented in a focused, card-like view.
            </p>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="bg-white/50 rounded-2xl p-8 border border-white/50 shadow-sm my-10">
              <h3 className="text-2xl font-bold text-charcoal mb-6 font-display">Key Features</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza mt-2.5" />
                  <span>Feature point one describing a key benefit or technological advantage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza mt-2.5" />
                  <span>Feature point two describing the user impact and sustainability metrics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza mt-2.5" />
                  <span>Feature point three explaining the integration with household habits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionOne;