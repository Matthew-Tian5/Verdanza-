import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-verdanza-yellow/20 -z-10 rounded-l-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-display font-bold text-charcoal mb-6">Contact Us</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Have questions? We'd love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-verdanza shrink-0 border border-gray-100">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold font-display text-charcoal text-xl">Email Us</h3>
                  <p className="text-gray-500">verdanzatech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-verdanza shrink-0 border border-gray-100">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold font-display text-charcoal text-xl">Call Us</h3>
                  <p className="text-gray-500">+1 (647) 871-6709</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-bold font-display text-charcoal text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-verdanza hover:text-white transition-colors shadow-lg hover:shadow-verdanza/30">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-verdanza hover:text-white transition-colors shadow-lg hover:shadow-verdanza/30">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-verdanza/5 border border-white/50"
          >
            <h2 className="text-3xl font-bold font-display text-charcoal mb-6">Join Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-bold text-charcoal uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-bold text-charcoal uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all backdrop-blur-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-bold text-charcoal uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all backdrop-blur-sm"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-base font-bold text-charcoal uppercase tracking-wider">Topic</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all backdrop-blur-sm"
                >
                  <option value="">Select a topic</option>
                  <option value="Sustain Platform">Sustain Platform</option>
                  <option value="Plate Patrol">Plate Patrol</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-bold text-charcoal uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-verdanza/50 focus:border-verdanza transition-all backdrop-blur-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-b from-[#1ad8ac] to-[#06b48b] text-white font-bold text-xl hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_15px_rgba(6,180,139,0.4)] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_10px_rgba(6,180,139,0.3)] flex items-center justify-center gap-2 group border border-[#06b48b]/20 hover:-translate-y-0.5"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;