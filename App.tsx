import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AiSommelier from './components/AiSommelier';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-gold-500 selection:text-dark-900">
      <Navbar />
      <Hero />
      <Menu />
      <AiSommelier />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;