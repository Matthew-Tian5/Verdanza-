import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12 mt-20 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <img 
            src="/images/Verdanza logo clear.png" 
            alt="Verdaza Tech" 
            className="h-10 w-auto mb-6 opacity-80"
          />
          <p className="text-gray-400 max-w-sm font-light">
            Revolutionizing sustainability through artificial intelligence. 
            Building a greener future, one algorithm at a time.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-display text-verdanza">Platform</h4>
          <ul className="space-y-2 text-gray-400 text-sm font-light">
            <li><a href="#" className="hover:text-verdanza-light transition-colors">Sustain AI</a></li>
            <li><a href="#" className="hover:text-verdanza-light transition-colors">Plate Patrol</a></li>
            <li><a href="#" className="hover:text-verdanza-light transition-colors">Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-display text-verdanza">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm font-light">
            <li><a href="#/team" className="hover:text-verdanza-light transition-colors">About Us</a></li>
            <li><a href="#/team" className="hover:text-verdanza-light transition-colors">Careers</a></li>
            <li><a href="#/contact" className="hover:text-verdanza-light transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-light">
        © {new Date().getFullYear()} Verdaza Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;