import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-gold-400 font-sans tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up">
          Experience Culinary Excellence
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Taste the <span className="italic text-gold-400">Extraordinary</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
          A fusion of modern gastronomy and timeless tradition. Let your senses guide you through an unforgettable journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a 
            href="#menu" 
            className="px-8 py-3 bg-gold-500 text-dark-900 font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors duration-300 rounded-sm"
          >
            View Menu
          </a>
          <a 
            href="#reservation" 
            className="px-8 py-3 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-dark-900 transition-colors duration-300 rounded-sm"
          >
            Book a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white hover:text-gold-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;