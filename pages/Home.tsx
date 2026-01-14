import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, BarChart3, Target, Smartphone, Users, Database, ShoppingCart, Percent, Globe } from 'lucide-react';
import ImpactCard from '../components/ImpactCard';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const scrollToStats = () => {
    const element = document.getElementById('impact-stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-verdanza/10 text-verdanza-dark text-xs font-bold uppercase tracking-wider border border-verdanza/20">
                Next Gen Sustainability
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-charcoal leading-tight mb-6">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.04 } }
                }}
              >
                {"AI-driven solutions for a ".split('').map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, textShadow: "0 0 0px rgba(74, 222, 128, 0)" }}
                animate={{ 
                  opacity: 1, 
                  textShadow: "0 0 30px rgba(74, 222, 128, 0.6)" 
                }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                className="text-verdanza inline-block"
              >
                sustainable
              </motion.span>

              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.04, delayChildren: 2.2 } }
                }}
              >
                {" future.".split('').map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
            >
              We bridge the gap between technology and nature. Our Sustain Platform empowers households and schools to reduce waste intelligently.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={scrollToStats}
                className="px-8 py-4 rounded-2xl bg-charcoal text-white font-medium hover:bg-black transition-all flex items-center gap-2 shadow-xl shadow-verdanza/10 group"
              >
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <Link 
                to="/team" 
                className="px-8 py-4 rounded-2xl bg-white text-charcoal border border-gray-200 font-medium hover:border-verdanza hover:text-verdanza-dark transition-all"
              >
                Meet the Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-white/50 backdrop-blur-sm border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold text-charcoal mb-6">The Problem</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Food waste is a pressing issue, with households in Canada contributing to over 60% of total food waste. 
              This not only has significant economic consequences but also exacerbates environmental issues such as greenhouse gas emissions and resource depletion. 
              Many families lack awareness or practical solutions to minimize waste effectively.
            </p>
          </div>
          
          <div id="impact-stats" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <ImpactCard 
              title="Total Waste" 
              value="60%" 
              percentage={60}
              description="Of Canada's total food waste comes from households." 
            />
            <ImpactCard 
              title="At Home" 
              value="47%" 
              percentage={47}
              description="Of food waste happens at the household level." 
            />
            <ImpactCard 
              title="Annual Cost" 
              value="$1,500" 
              percentage={80}
              description="Worth of food wasted per family annually." 
            />
            <ImpactCard 
              title="Volume" 
              value="79kg" 
              percentage={79}
              description="Food waste per Canadian household per year." 
            />
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-charcoal mb-4">Our Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Verdanza Tech addresses food waste through a multi-faceted approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-verdanza/10 rounded-xl flex items-center justify-center text-verdanza-dark mb-4">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">AI-Powered App</h3>
                <p className="text-gray-600">A mobile and web-based platform designed to track food consumption, provide waste reduction tips, and incentivize sustainable behaviors. It leverages AI to personalize recommendations.</p>
             </div>
             
             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-verdanza/10 rounded-xl flex items-center justify-center text-verdanza-dark mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Behavioral Change Strategies</h3>
                <p className="text-gray-600">Targeting behavioral shifts, particularly among children, to instill lifelong habits of mindful consumption and waste reduction.</p>
             </div>

             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-verdanza/10 rounded-xl flex items-center justify-center text-verdanza-dark mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Educational Workshops</h3>
                <p className="text-gray-600">We conduct interactive workshops in schools and community centers to raise awareness and provide actionable strategies for food waste reduction.</p>
             </div>

             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-verdanza/10 rounded-xl flex items-center justify-center text-verdanza-dark mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Data-Driven Insights</h3>
                <p className="text-gray-600">By analyzing user data, we offer customized solutions to help households reduce waste and save money effectively.</p>
             </div>
          </div>

          {/* App Features Subsection */}
          <div className="bg-charcoal text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-verdanza/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-12 text-center md:text-left">App Features</h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <div className="flex items-center gap-3 mb-4 text-verdanza">
                     <Target />
                     <h4 className="text-xl font-bold">Personalized Recommendations</h4>
                   </div>
                   <p className="text-gray-400 mb-6">
                     Use AI to understand user consumption habits and offer personalized tips. Suggestions include meal planning, optimal storage methods, or recipes based on leftover ingredients.
                   </p>
                </div>

                <div>
                   <div className="flex items-center gap-3 mb-4 text-verdanza">
                     <ShoppingCart />
                     <h4 className="text-xl font-bold">Grocery Integration</h4>
                   </div>
                   <ul className="space-y-4 text-gray-400">
                     <li className="flex gap-2">
                       <span className="text-verdanza mt-1">•</span>
                       <span><strong>List Upload:</strong> Scan or take a picture of your grocery list.</span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-verdanza mt-1">•</span>
                       <span><strong>Smart Suggestions:</strong> AI suggests recipes based on purchased groceries and fridge inventory.</span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-verdanza mt-1">•</span>
                       <span><strong>Promotions:</strong> Notifications about deals on frequently purchased items.</span>
                     </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals SDGs */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl font-display font-bold text-charcoal mb-12 text-center">Our Impact Goals</h2>
           <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
             Verdanza Tech aligns with the United Nations Sustainable Development Goals (SDGs) to create a meaningful impact.
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-[#BF8B2E] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#BF8B2E]/20">12</div>
                <h4 className="font-bold text-charcoal mb-2">Responsible Consumption</h4>
                <p className="text-xs text-gray-500">Encouraging sustainable food management at the household level.</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-[#A21942] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#A21942]/20">8</div>
                <h4 className="font-bold text-charcoal mb-2">Decent Work & Growth</h4>
                <p className="text-xs text-gray-500">Promoting cost savings for families through reduced waste.</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-[#3F7E44] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#3F7E44]/20">13</div>
                <h4 className="font-bold text-charcoal mb-2">Climate Action</h4>
                <p className="text-xs text-gray-500">Reducing food waste lowers methane emissions and mitigates climate impact.</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-[#19486A] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#19486A]/20">17</div>
                <h4 className="font-bold text-charcoal mb-2">Partnerships</h4>
                <p className="text-xs text-gray-500">Collaborating with schools, businesses, and policymakers to scale solutions.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;