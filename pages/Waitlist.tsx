import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Zap, Users, Calendar } from 'lucide-react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Store email or send to backend
      // For now, just show success message
      console.log('Waitlist signup:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be among the first to try our revolutionary sustainability app'
    },
    {
      icon: Users,
      title: 'Exclusive Community',
      description: 'Join our community of sustainability advocates and innovators'
    },
    {
      icon: Calendar,
      title: 'Launch Updates',
      description: 'Get exclusive updates and behind-the-scenes insights as we build'
    },
    {
      icon: CheckCircle2,
      title: 'Special Perks',
      description: 'Waitlist members get exclusive benefits and discounts at launch'
    }
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Decorative Geometric Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-verdanza-yellow rounded-bl-full opacity-50 -z-10 translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-verdanza-light/10 rounded-full -z-10 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-verdanza-blue/5 rounded-tl-full -z-10" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-verdanza-yellow text-verdanza-dark text-sm font-bold uppercase tracking-wider border border-verdanza/20 shadow-sm">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 text-charcoal leading-tight"
            >
              The Future of Sustainable Living is Here
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Our groundbreaking app is in development and we want you to be part of this revolution. Join our waitlist to be among the first to experience the future of sustainability.
            </motion.p>

            {/* Email Signup Form */}
            <motion.div variants={itemVariants} className="w-full max-w-md">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-3 rounded-full bg-white/80 border border-white/40 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verdanza focus:border-transparent transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-3 rounded-full bg-gradient-to-b from-[#1ad8ac] to-[#06b48b] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_10px_rgba(6,180,139,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_15px_rgba(6,180,139,0.4)] hover:-translate-y-0.5 transition-all border border-[#06b48b]/20 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isLoading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    We respect your privacy. No spam, just updates.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-full"
                >
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-green-800">Welcome to the waitlist!</p>
                    <p className="text-sm text-green-700">Check your email for updates</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Why Join Our Waitlist?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get exclusive benefits and be part of the sustainability revolution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 hover:border-verdanza/30 transition-all hover:shadow-xl hover:shadow-verdanza/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-verdanza-yellow to-verdanza-light">
                      <Icon className="text-verdanza-dark" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-verdanza via-verdanza-light to-verdanza-blue p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Be among the first to join the sustainable revolution. Reserve your spot on our waitlist today.
            </p>
            <button
              onClick={() => {
                const form = document.querySelector('form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                  const input = form.querySelector('input[type="email"]') as HTMLInputElement;
                  if (input) input.focus();
                }
              }}
              className="px-8 py-3 rounded-full bg-white text-verdanza font-bold hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Join the Waitlist
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
