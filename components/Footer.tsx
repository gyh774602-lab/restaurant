import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl text-white font-bold mb-6">LUMINA</h3>
            <p className="text-gray-400 leading-relaxed">
              Elevating dining through innovation and tradition. Experience the future of gastronomy.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold-400 font-sans font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Culinary Avenue, Food District</li>
              <li>New York, NY 10012</li>
              <li>+1 (212) 555-0123</li>
              <li>reservations@luminabistro.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-sans font-bold uppercase tracking-widest text-sm mb-6">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between md:justify-start gap-8">
                <span>Mon - Thu</span>
                <span>17:00 - 22:00</span>
              </li>
              <li className="flex justify-between md:justify-start gap-8">
                <span>Fri - Sat</span>
                <span>17:00 - 23:00</span>
              </li>
              <li className="flex justify-between md:justify-start gap-8">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Lumina Bistro. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;