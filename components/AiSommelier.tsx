import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getAiRecommendation } from '../services/geminiService';

const AiSommelier: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setRecommendation('');
    
    const result = await getAiRecommendation(query);
    
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai-sommelier" className="py-20 relative overflow-hidden bg-dark-800">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-dark-900 rounded-full mb-4 border border-gold-500/30">
            <Sparkles className="text-gold-400 w-6 h-6" />
          </div>
          <h2 className="font-serif text-4xl text-white font-bold mb-4">Ask Our AI Sommelier</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Not sure what to order? Tell our AI concierge your mood, flavor preferences, or favorite ingredients, and we'll curate the perfect pairing for you.
          </p>
        </div>

        <div className="bg-dark-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
          <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., 'I want something spicy and red wine' or 'I love seafood'"
              className="flex-1 bg-dark-800 border border-gray-700 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-gray-500"
            />
            <button 
              type="submit" 
              disabled={loading || !query.trim()}
              className="bg-gold-500 hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed text-dark-900 font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              <span className="hidden sm:inline">Ask</span>
            </button>
          </form>

          {recommendation && (
            <div className="animate-fade-in bg-dark-800 rounded-xl p-6 border-l-4 border-gold-500">
              <h4 className="text-gold-400 font-sans uppercase tracking-wider text-xs mb-2">Recommendation</h4>
              <p className="text-gray-200 text-lg font-serif leading-relaxed italic">
                "{recommendation}"
              </p>
            </div>
          )}
          
          {!recommendation && !loading && (
             <div className="text-center text-gray-600 text-sm mt-4">
               Try asking: "I'm in the mood for something light"
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiSommelier;