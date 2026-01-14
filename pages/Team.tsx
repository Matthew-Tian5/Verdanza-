import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Urvi Budhiraja",
    role: "Founder, CEO",
    quote: "We are creating long-term, sustainable change by transforming how individuals and families perceive, manage, and value food.",
    image: "https://picsum.photos/400/400?random=10" // Placeholder
  },
  {
    name: "Helen Sue",
    role: "Co-Founder, COO",
    quote: "By engaging children early, we help extend impact beyond the classroom and into households and communities.",
    image: "https://picsum.photos/400/400?random=11" // Placeholder
  }
];

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-display font-bold text-charcoal mb-8">Who We Are</h1>
          
          <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-600 text-lg leading-relaxed bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-100 shadow-sm">
            <p>
              Verdanza Tech is an Ontario-based enterprise dedicated to reducing household food waste through data-driven insights, behavioral incentives, and education. Co-founded by Urvi and Helen, our mission is to create long-term, sustainable change by transforming how individuals and families perceive, manage, and value food in their homes.
            </p>
            <p>
              In addition to our technology-driven solutions, Verdanza Tech delivers interactive educational workshops for elementary schools designed to promote early behavioral change. These age-appropriate programs empower students with practical skills, environmental awareness, and positive food habits, encouraging them to become food-conscious decision-makers both at school and at home. By engaging children early, we help extend impact beyond the classroom and into households and communities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white shadow-sm hover:shadow-xl hover:shadow-verdanza/10 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-verdanza/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">{member.name}</h3>
                    <p className="text-verdanza-dark font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
                  </div>
                  <blockquote className="text-gray-600 italic border-l-4 border-verdanza pl-4 py-1">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;