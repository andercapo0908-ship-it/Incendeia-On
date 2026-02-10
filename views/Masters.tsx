
import React from 'react';
import { MOCK_MASTERS } from '../constants';
import { Award, BookOpen, ChevronRight } from 'lucide-react';

const Masters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-title text-red-600 tracking-wider uppercase">Mestres do Grupo</h1>
        <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-medium">A sabedoria que guia o fogo da nossa roda</p>
      </div>

      <div className="space-y-32 py-12">
        {MOCK_MASTERS.map((master, idx) => (
          <div 
            key={master.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
          >
            {/* Foto do Mestre */}
            <div className="lg:w-2/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] z-10"></div>
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                <img 
                  src={master.image} 
                  alt={master.name} 
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Elementos Decorativos */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full -z-10 blur-3xl group-hover:bg-red-600/10 transition-colors"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/5 rounded-full -z-10 blur-3xl"></div>
            </div>

            {/* Texto e Conteúdo */}
            <div className="lg:w-3/5 space-y-8">
              <div className="space-y-2">
                {master.title && (
                  <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs bg-red-600/10 px-4 py-1.5 rounded-full">
                    {master.title}
                  </span>
                )}
                <h2 className="text-4xl md:text-6xl font-bold pt-4">{master.name}</h2>
                <div className="w-20 h-1 bg-red-600 rounded-full mt-4"></div>
              </div>
              
              <div className="relative">
                <span className="absolute -left-6 top-0 text-6xl text-white/5 font-serif">"</span>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
                  {master.bio}
                </p>
              </div>
              
              {master.achievements && master.achievements.length > 0 && (
                <div className="space-y-4 pt-8 border-t border-white/5">
                  <h4 className="flex items-center space-x-3 font-bold text-gray-200 uppercase tracking-widest text-xs">
                    <Award className="text-red-500" size={18} />
                    <span>Trajetória e Mérito</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {master.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center space-x-3 text-sm text-gray-400 bg-white/5 px-5 py-3 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button className="flex items-center space-x-3 text-red-500 font-bold hover:text-white transition-all group/btn uppercase tracking-widest text-xs">
                  <BookOpen size={18} className="group-hover/btn:scale-110 transition-transform" />
                  <span>História Completa do Mestre</span>
                  <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer da seção */}
      <div className="py-20 text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] uppercase tracking-[1em] font-black">Respeito • Tradição • Ancestralidade</p>
      </div>
    </div>
  );
};

export default Masters;
