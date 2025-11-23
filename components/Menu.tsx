import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="menu" className="py-20 bg-dark-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-sans tracking-widest uppercase text-sm mb-2">Discover</h2>
          <h3 className="font-serif text-4xl text-white font-bold">Our Menu</h3>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-sans text-sm tracking-wide ${
                activeCategory === cat
                  ? 'bg-gold-500 border-gold-500 text-dark-900 font-bold'
                  : 'border-gray-700 text-gray-400 hover:border-gold-400 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div key={item.id} className="group relative bg-dark-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold-900/10 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl text-white group-hover:text-gold-400 transition-colors">{item.name}</h4>
                  <span className="text-gold-400 font-bold font-sans">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                {item.popular && (
                  <span className="absolute top-4 right-4 bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;