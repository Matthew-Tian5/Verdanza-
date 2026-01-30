import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';
import { ArrowRight, Target, ShoppingCart } from 'lucide-react';
import ImpactCard from '../components/ImpactCard';
import { Link } from 'react-router-dom';

// Global variable to track if the preloader has shown in this session
let hasLoadedOnce = false;

const Home: React.FC = () => {
  const scrollToStats = () => {
    const element = document.getElementById('impact-stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- MOUSE TRACKING FOR PARALLAX/GLOW ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Subtle light glow effect (Greenish tint for the new light theme)
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${useTransform(smoothMouseX, [-0.5, 0.5], ["40%", "60%"])} ${useTransform(smoothMouseY, [-0.5, 0.5], ["40%", "60%"])}, rgba(6, 180, 139, 0.1), transparent 50%)`;


  // --- SCROLL ANIMATIONS ---
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scaleHero = useTransform(heroScrollProgress, [0, 0.8], [1, 0.98]); // Subtle scale
  const borderRadiusHero = useTransform(heroScrollProgress, [0, 0.8], ["0px", "48px"]);
  const opacityOverlay = useTransform(heroScrollProgress, [0, 0.5], [0.8, 0.95]); // Fades to more white as you scroll

  // --- PRELOADER STATE ---
  // Initialize based on whether we've loaded before
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);
  
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        hasLoadedOnce = true; // Mark as loaded for future visits
      }, 2400); 
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Logo Reveal Animation
  const logoContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  };

  const logoItem: Variants = {
    hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const lineGrow: Variants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { duration: 0.8, delay: 0.8, ease: "circOut" } 
    }
  };

  const sloganItem: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };


  // --- PARTNER DATA ---
  const partners = [
    { name: "Zero Hunger", img: "/images/ZeroHunger.jpg", desc: "UN SDG Goal 2" },
    { name: "Partner 2", img: null, desc: "Community Partner" },
    { name: "Partner 3", img: null, desc: "Tech Partner" },
    { name: "Partner 4", img: null, desc: "Research Lab" },
    { name: "Partner 5", img: null, desc: "Green Initiative" },
  ];
  const seamlessPartners = [...partners, ...partners];


  return (
    <>
      {/* --------------------------------------------------
          1. LOADING SCREEN (WHITE BACKGROUND)
          -------------------------------------------------- */}
      <motion.div
        initial={{ y: isLoading ? 0 : "-100%" }} // Start hidden if not loading
        animate={{ y: isLoading ? 0 : "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-verdanza-dark"
      >
         <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex flex-col items-center gap-6"
         >
            <div className="w-16 h-16 border-t-4 border-verdanza rounded-full animate-spin" />
            
            <div className="overflow-hidden h-12 relative text-center">
              <motion.span 
                className="font-display font-bold text-3xl md:text-4xl tracking-widest block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                VERDANZA
              </motion.span>
            </div>
         </motion.div>
      </motion.div>


      <div className="w-full relative bg-white selection:bg-verdanza selection:text-white">
        
        {/* --------------------------------------------------
            2. HERO SECTION (UPDATED COLORS & BLUR)
            -------------------------------------------------- */}
        <div ref={heroRef} className="h-[120vh] relative z-20 bg-white">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white">
            
            <motion.div 
               style={{ 
                 scale: scaleHero, 
                 borderRadius: borderRadiusHero
               }}
               className="w-full h-full relative overflow-hidden shadow-2xl origin-center"
             >
                {/* Background Layer */}
                <div className="absolute inset-0">
                   {/* Original Background Image */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop')] bg-cover bg-center" />
                   
                   {/* UPDATED: White Blur Overlay */}
                   <motion.div 
                      style={{ opacity: opacityOverlay }}
                      className="absolute inset-0 bg-white/85 backdrop-blur-sm" 
                   />

                   {/* Mouse Glow Effect Overlay (Subtle Green) */}
                   <motion.div 
                      style={{ background: glowBackground }}
                      className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none"
                   />
                </div>

                {/* Centered Content - Recreating the Logo Layout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-30">
                  
                  {/* The Logo Lockup */}
                  <motion.div 
                    className="flex items-center gap-6 md:gap-10 transform scale-75 md:scale-100 lg:scale-125"
                    variants={logoContainer}
                    initial="hidden"
                    animate={!isLoading ? "visible" : "hidden"}
                  >
                    
                    {/* Left Side: Verdanza / Tech (GREEN) */}
                    <div className="flex flex-col items-end">
                      <motion.span 
                        variants={logoItem} 
                        className="font-display font-bold text-6xl md:text-8xl text-verdanza tracking-tighter leading-none"
                      >
                        Verdanza
                      </motion.span>
                      <motion.span 
                        variants={logoItem} 
                        className="font-display font-bold text-3xl md:text-5xl text-verdanza tracking-tighter leading-none mt-1"
                      >
                        Tech
                      </motion.span>
                    </div>

                    {/* Middle: Divider Line (BLACK) */}
                    <motion.div 
                      variants={lineGrow}
                      className="w-[3px] h-24 md:h-32 bg-charcoal origin-top"
                    />

                    {/* Right Side: World / Without / Waste (BLACK) */}
                    <div className="flex flex-col items-start justify-center gap-0 md:gap-1 text-left">
                      <motion.span variants={sloganItem} className="font-sans text-2xl md:text-4xl text-charcoal font-normal leading-none">
                        World
                      </motion.span>
                      <motion.span variants={sloganItem} className="font-sans text-2xl md:text-4xl text-charcoal font-normal leading-none">
                        Without
                      </motion.span>
                      <motion.span variants={sloganItem} className="font-sans text-2xl md:text-4xl text-charcoal font-normal leading-none">
                        Waste
                      </motion.span>
                    </div>

                  </motion.div>

                  {/* CTA Button (Updated for Light Theme) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ 
                      // Reduce delay if already loaded, otherwise wait for loader
                      delay: hasLoadedOnce ? 0.2 : 2.2, 
                      duration: 0.8 
                    }}
                    className="mt-16"
                  >
                     <button 
                        onClick={scrollToStats}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-charcoal/5 border border-charcoal/10 rounded-full hover:bg-verdanza hover:text-white hover:border-verdanza transition-all duration-300 backdrop-blur-md text-charcoal"
                     >
                        <span className="uppercase tracking-widest text-sm font-bold">Explore Ecosystem</span>
                        <div className="w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-white group-hover:text-verdanza transition-colors duration-300">
                          <ArrowRight size={16} />
                        </div>
                     </button>
                  </motion.div>

                  {/* Scroll Indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      // Reduce delay if already loaded
                      delay: hasLoadedOnce ? 0.5 : 3.0, 
                      duration: 1 
                    }}
                    className="absolute bottom-12 left-0 right-0 mx-auto text-center z-20"
                  >
                    <p className="text-gray-400 text-sm md:text-base animate-bounce font-medium tracking-widest uppercase inline-block">
                      Scroll
                    </p>
                  </motion.div>
                </div>
             </motion.div>
          </div>
        </div>


        {/* --------------------------------------------------
            3. THE PROBLEM SECTION
            -------------------------------------------------- */}
        {/* Removed negative margin to prevent overlap issues */}
        <motion.section 
          id="problem" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-24 bg-white relative z-30 shadow-[0_-20px_60px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-charcoal mb-6">The Problem</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 text-xl leading-relaxed max-w-4xl">
                Food waste is a pressing issue, with households in Canada contributing to over 60% of total food waste. 
                This not only has significant economic consequences but also exacerbates environmental issues such as greenhouse gas emissions and resource depletion. 
                Many families lack awareness or practical solutions to minimize waste effectively.
              </motion.p>
            </div>
            
            <motion.div 
              id="impact-stats" 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
               <ImpactCard title="Total Waste" value="60%" percentage={60} description="Of Canada's total food waste comes from households." />
               <ImpactCard title="At Home" value="47%" percentage={47} description="Of food waste happens at the household level." />
               <ImpactCard title="Annual Cost" value="$1,500" percentage={80} description="Worth of food wasted per family annually." />
               <ImpactCard title="Volume" value="79kg" percentage={79} description="Food waste per Canadian household per year." />
            </motion.div>
          </div>
        </motion.section>

        {/* --------------------------------------------------
            4. OUR SOLUTION SECTION
            -------------------------------------------------- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-24 relative z-30 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-charcoal mb-4">Our Solution</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                Verdanza Tech addresses food waste through a multi-faceted approach.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Box 1 */}
              <Link to="/solution-1" className="group w-full">
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-[600px] p-8 bg-white backdrop-blur-md rounded-[3rem] shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-verdanza/20 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-100" />
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-verdanza to-verdanza-light" />
                  
                  <div className="relative z-10 flex flex-col items-center h-full justify-center">
                      <h3 className="text-5xl font-display font-bold text-charcoal mb-6 group-hover:text-verdanza transition-colors">Solution One</h3>
                      <p className="text-gray-600 text-xl leading-relaxed max-w-sm mb-8">
                        This is a placeholder description for the first solution. Click here to read the full details.
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-verdanza font-bold text-lg opacity-80 group-hover:opacity-100 group-hover:gap-4 transition-all">
                          <span>Learn More</span>
                          <ArrowRight size={24} />
                      </div>
                  </div>
                </motion.div>
              </Link>

              {/* Box 2 */}
              <Link to="/solution-2" className="group w-full">
                 <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-[600px] p-8 bg-white backdrop-blur-md rounded-[3rem] shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-verdanza-blue/20 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-100" />
                  <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-r from-verdanza-blue to-verdanza-dark" />
                  
                  <div className="relative z-10 flex flex-col items-center h-full justify-center">
                      <h3 className="text-5xl font-display font-bold text-charcoal mb-6 group-hover:text-verdanza-blue transition-colors">Solution Two</h3>
                      <p className="text-gray-600 text-xl leading-relaxed max-w-sm mb-8">
                        This is a placeholder description for the second solution. Click here to read the full details.
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-verdanza-blue font-bold text-lg opacity-80 group-hover:opacity-100 group-hover:gap-4 transition-all">
                          <span>Learn More</span>
                          <ArrowRight size={24} />
                      </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* App Features Subsection */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-deep text-white rounded-[3rem] p-6 md:p-12 overflow-hidden relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-4xl font-display font-bold mb-8 text-center md:text-left">App Features</h3>
                <div className="grid md:grid-cols-2 gap-12 mb-8">
                  <div>
                     <div className="flex items-center gap-3 mb-4 text-verdanza-yellow">
                       <Target />
                       <h4 className="text-2xl font-bold font-display">Personalized Recommendations</h4>
                     </div>
                     <p className="text-gray-100 mb-6 font-light">
                       Use AI to understand user consumption habits and offer personalized tips. Suggestions include meal planning, optimal storage methods, or recipes based on leftover ingredients.
                     </p>
                  </div>

                  <div>
                     <div className="flex items-center gap-3 mb-4 text-verdanza-yellow">
                       <ShoppingCart />
                       <h4 className="text-2xl font-bold font-display">Grocery Integration</h4>
                     </div>
                     <ul className="space-y-4 text-gray-100 font-light">
                       <li className="flex gap-2">
                         <span className="text-verdanza-light mt-1">•</span>
                         <span><strong>List Upload:</strong> Scan or take a picture of your grocery list.</span>
                       </li>
                       <li className="flex gap-2">
                         <span className="text-verdanza-light mt-1">•</span>
                         <span><strong>Smart Suggestions:</strong> AI suggests recipes based on purchased groceries and fridge inventory.</span>
                       </li>
                       <li className="flex gap-2">
                         <span className="text-verdanza-light mt-1">•</span>
                         <span><strong>Promotions:</strong> Notifications about deals on frequently purchased items.</span>
                       </li>
                     </ul>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Link to="/waitlist" className="px-8 py-3 rounded-full bg-white text-verdanza font-bold hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
                    Join the Waitlist
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Impact Goals SDGs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-24 relative z-30 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-5xl font-display font-bold text-charcoal mb-12 text-center">Our Impact Goals</h2>
             <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
               Verdanza Tech aligns with the United Nations Sustainable Development Goals (SDGs) to create a meaningful impact.
             </p>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300 border border-white/50 hover:border-verdanza">
                  <div className="w-16 h-16 mx-auto bg-[#BF8B2E] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#BF8B2E]/20">12</div>
                  <h4 className="font-bold text-charcoal mb-2 font-display">Responsible Consumption</h4>
                  <p className="text-xs text-gray-500">Encouraging sustainable food management at the household level.</p>
               </div>
               <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300 border border-white/50 hover:border-verdanza">
                  <div className="w-16 h-16 mx-auto bg-[#A21942] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#A21942]/20">8</div>
                  <h4 className="font-bold text-charcoal mb-2 font-display">Decent Work & Growth</h4>
                  <p className="text-xs text-gray-500">Promoting cost savings for families through reduced waste.</p>
               </div>
               <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300 border border-white/50 hover:border-verdanza">
                  <div className="w-16 h-16 mx-auto bg-[#3F7E44] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#3F7E44]/20">13</div>
                  <h4 className="font-bold text-charcoal mb-2 font-display">Climate Action</h4>
                  <p className="text-xs text-gray-500">Reducing food waste lowers methane emissions and mitigates climate impact.</p>
               </div>
               <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300 border border-white/50 hover:border-verdanza">
                  <div className="w-16 h-16 mx-auto bg-[#19486A] rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-[#19486A]/20">17</div>
                  <h4 className="font-bold text-charcoal mb-2 font-display">Partnerships</h4>
                  <p className="text-xs text-gray-500">Collaborating with schools, businesses, and policymakers to scale solutions.</p>
               </div>
             </div>
          </div>
        </motion.section>

        {/* Partners Section - SLIDING CAROUSEL (Limited Width) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-24 border-t border-verdanza/10 overflow-hidden relative z-30 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 mb-12">
             <h2 className="text-5xl font-display font-bold text-charcoal text-center">Our Partners</h2>
          </div>
             
          <div className="relative max-w-5xl mx-auto overflow-hidden" 
               style={{ 
                 maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' 
               }}>
            <div className="w-full flex">
              <motion.div 
                className="flex gap-8 px-4"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ 
                  ease: "linear", 
                  duration: 60,
                  repeat: Infinity 
                }}
              >
                {seamlessPartners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-72 bg-white backdrop-blur-sm p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white transition-colors hover:shadow-lg group"
                  >
                    <div className="w-32 h-32 bg-white rounded-full shadow-sm flex items-center justify-center p-4 mb-6 border border-gray-100 overflow-hidden group-hover:scale-105 transition-transform">
                      {partner.img ? (
                        <img 
                          src={partner.img} 
                          alt={partner.name} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                         <span className="text-verdanza font-bold text-xl">{partner.name.charAt(0)}</span>
                      )}
                    </div>
                    <h4 className="font-bold font-display text-charcoal text-xl mb-1">{partner.name}</h4>
                    <p className="text-sm text-gray-500 font-light">{partner.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;