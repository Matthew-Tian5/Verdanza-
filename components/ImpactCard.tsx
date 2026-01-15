import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImpactCardProps {
  title: string;
  value: string;
  description: string;
  percentage: number; // 0 to 100
}

const ImpactCard: React.FC<ImpactCardProps> = ({ title, value, description, percentage }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Circle config
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative w-full h-64 bg-white/60 backdrop-blur-md rounded-2xl border border-verdanza/10 shadow-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Layer - Fades on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 0.3 : 1, filter: isHovered ? 'blur(2px)' : 'blur(0px)' }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 p-8 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-display font-bold text-charcoal mb-2">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="text-4xl font-bold text-verdanza tracking-tighter font-display">
          {value}
        </div>
      </motion.div>

      {/* Interactive Overlay Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative flex items-center justify-center">
          {/* SVG Pie Chart */}
          <svg width="120" height="120" className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#06b48b"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: isHovered ? strokeDashoffset : circumference }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          
          {/* Center Text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="absolute text-charcoal font-bold text-lg font-display"
          >
            {percentage}%
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactCard;