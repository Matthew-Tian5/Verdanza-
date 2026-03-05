import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
// Changed Link to useNavigate
import { useNavigate } from 'react-router-dom';

const SolutionTwo: React.FC = () => {
  const navigate = useNavigate();

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

        {/* X Button to Close - Updated to Navigate Back */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 right-8 z-20 p-3 rounded-full bg-gray-100/80 hover:bg-gray-200 text-charcoal transition-all hover:rotate-90 hover:shadow-md"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        {/* Box Content - Aligned Right for variety */}
        <div className="p-10 md:p-16 lg:p-20 overflow-y-auto flex flex-col items-end text-right">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-verdanza-blue/10 text-verdanza-blue font-bold uppercase tracking-wider text-sm">
            Community Initiative
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-10">
            Community Workshops
          </h1>

          <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed max-w-4xl flex flex-col items-end">
            <p className="mb-8 text-2xl font-light text-gray-500">
              We promote sustainable habits through education and community engagement, with a focus on early childhood learning to instill lifelong behaviours.
            </p>
            <p className="mb-8">
              Through fun, interactive workshops, we teach students in Grades 2–9 about food waste and empower them to become changemakers in their homes and communities. Children have a powerful influence on household habits. By educating them early, we create ripple effects that extend into families, communities, and the future.
            </p>
            
            <div className="bg-white/50 rounded-2xl p-8 border border-white/50 shadow-sm my-10 w-full text-left">
              <h3 className="text-2xl font-bold text-charcoal mb-6 font-display">Key Reasons for Our Workshops</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span><strong>Behavioral Change at an Early Age</strong> – Research shows that habits formed in early childhood tend to persist into adulthood. Teaching kids to value food and reduce waste ensures long-term impact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span><strong>Develop Sustainable Habits Early</strong> – Teaching kids to respect food ensures they grow up mindful of waste.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span><strong>Interactive and Engaging Learning</strong> – Our workshops use hands-on activities, storytelling, and games to make learning fun and impactful.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span><strong>Empowering Future Changemakers</strong> – Children influence their households. Educating them means indirectly educating families, leading to broader community impact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-verdanza-blue mt-2.5" />
                  <span><strong>Addressing a Global Issue Locally</strong> – Food waste is a significant problem worldwide, and Ontario is no exception. Teaching kids about sustainability fosters a generation that prioritizes mindful consumption.</span>
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