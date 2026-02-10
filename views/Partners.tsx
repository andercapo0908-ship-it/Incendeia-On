
import React from 'react';
import { ExternalLink, ShoppingBag, Music, HeartPulse, Sparkles } from 'lucide-react';
import { MOCK_PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-block p-3 bg-red-600/10 rounded-2xl text-red-600 mb-2">
          <Sparkles size={32} />
        </div>
        <h1 className="text-5xl font-title text-white tracking-widest">ECOSSISTEMA <span className="text-red-600">INCENDEIA</span></h1>
        <p className="text-gray-400">Conecte-se com ferramentas e parceiros que potencializam sua jornada na capoeira.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PARTNERS.map((partner) => (
          <div 
            key={partner.id} 
            className="bg-[#121212] border border-white/5 p-8 rounded-[2.5rem] space-y-6 hover:border-orange-500/30 transition-all group relative overflow-hidden"
          >
            {/* Design Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all"></div>
            
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 bg-black/40 rounded-3xl p-4 border border-white/5">
                <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
              </div>
              <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-red-500 transition-colors">
                {partner.category}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">{partner.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{partner.description}</p>
            </div>

            <button className="w-full flex items-center justify-center space-x-3 py-4 bg-white/5 hover:bg-white text-gray-400 hover:text-black rounded-2xl font-bold transition-all border border-white/10 group/btn">
              <span>Acessar App</span>
              <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Featured Partner Banner */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-white/10 rounded-[3rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="amazon-pattern absolute inset-0 opacity-10"></div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold">Seja um Parceiro Incendeia</h2>
          <p className="text-white/60 max-w-xl">Tem um projeto, app ou serviço voltado para a cultura brasileira? Vamos incendiar o mundo juntos.</p>
          <button className="px-8 py-3 bg-white text-red-900 font-bold rounded-xl hover:scale-105 transition-all">
            Falar com a Gestão
          </button>
        </div>
        <div className="relative z-10 lg:w-1/3">
           <div className="aspect-square bg-white/5 backdrop-blur rounded-[2rem] border border-white/10 flex items-center justify-center">
             <ShoppingBag size={80} className="text-red-500 opacity-40" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
