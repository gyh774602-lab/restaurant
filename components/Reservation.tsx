import React from 'react';

const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-20 bg-dark-900 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Image Side */}
        <div className="md:w-1/2 relative min-h-[300px]">
          <img 
            src="https://picsum.photos/600/800" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gold-900/20 mix-blend-multiply"></div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 bg-white p-10 md:p-12">
          <h3 className="font-serif text-3xl font-bold text-dark-900 mb-2">Book a Table</h3>
          <p className="text-gray-500 mb-8 font-light">Reserve your spot for an unforgettable evening.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Date</label>
                <input type="date" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Time</label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900 bg-transparent">
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Guests</label>
                 <select className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900 bg-transparent">
                   {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} Person{n > 1 ? 's' : ''}</option>)}
                 </select>
              </div>
               <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
              <input type="text" placeholder="John Doe" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900" />
            </div>

             <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors text-dark-900" />
            </div>

            <button type="button" className="w-full bg-dark-900 text-white font-bold py-4 mt-4 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300">
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;