import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-display font-bold text-verdanza mb-4">Verdanza Tech</h2>
          <p className="text-gray-400 max-w-sm">
            Revolutionizing sustainability through artificial intelligence. 
            Building a greener future, one algorithm at a time.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Platform</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-verdanza transition-colors">Sustain AI</a></li>
            <li><a href="#" className="hover:text-verdanza transition-colors">Plate Patrol</a></li>
            <li><a href="#" className="hover:text-verdanza transition-colors">Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#/team" className="hover:text-verdanza transition-colors">About Us</a></li>
            <li><a href="#/team" className="hover:text-verdanza transition-colors">Careers</a></li>
            <li><a href="#/contact" className="hover:text-verdanza transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Verdanza Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;