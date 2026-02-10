
import React from 'react';
import { User, ShieldCheck } from 'lucide-react';
import { UserRole } from '../types';

const GrafismoIndigena = ({ className = "" }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L90 20 L80 10 L70 20 L60 10 L50 20 L40 10 L30 20 L20 10 L10 20 Z" 
      fill="currentColor" opacity="0.2" />
  </svg>
);

const Portal: React.FC<{ onSelectRole: (role: UserRole) => void }> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] amazon-pattern flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Grafismos de Canto */}
      <GrafismoIndigena className="absolute top-0 left-0 w-full h-8 text-red-600 rotate-180 z-0" />
      <GrafismoIndigena className="absolute bottom-0 left-0 w-full h-8 text-orange-600 z-0" />

      {/* Brilhos de Fundo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
        <div className="flex flex-col items-center animate-fade-in">
          {/* Logo Brand Mark */}
          <div className="mb-8 relative w-40 h-40 p-4 bg-gradient-to-b from-white/5 to-transparent rounded-full border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              {/* Berimbau Estilizado */}
              <path d="M120 20 Q180 100 120 180" stroke="#dc2626" strokeWidth="8" fill="none" strokeLinecap="round" />
              <line x1="120" y1="20" x2="120" y2="180" stroke="white" strokeWidth="3" opacity="0.8" />
              <circle cx="120" cy="140" r="25" fill="#dc2626" />
              {/* Grafismo na cabaça */}
              <path d="M105 140 Q120 125 135 140" stroke="black" strokeWidth="2" opacity="0.4" fill="none" />
            </svg>
            <div className="absolute inset-0 rounded-full border border-red-600/20 animate-pulse"></div>
          </div>
          
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full border border-red-600/30 bg-red-600/10">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-red-500 font-black">
                Academia Digital
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-title text-white tracking-[0.2em] leading-none drop-shadow-lg">
              INCENDEIA <span className="text-red-600">CAPOEIRA</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-400 font-medium tracking-widest uppercase">
              Mestre Cristiano
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Botão Aluno */}
          <button
            onClick={() => onSelectRole(UserRole.STUDENT)}
            className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] transition-all hover:scale-[1.02] hover:border-red-500/50 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/10 rounded-full group-hover:bg-red-600/20 transition-colors"></div>
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                <User size={32} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Acesso Aluno</h3>
                <p className="text-gray-400 text-xs mt-2 font-medium">Treinos, aulas e sua evolução</p>
              </div>
            </div>
          </button>

          {/* Botão Administração */}
          <button
            onClick={() => onSelectRole(UserRole.ADMIN)}
            className="group relative overflow-hidden bg-black/40 border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] transition-all hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Gestão</h3>
                <p className="text-gray-400 text-xs mt-2 font-medium">Painel administrativo</p>
              </div>
            </div>
          </button>
        </div>

        <div className="pt-12 text-gray-600 text-[10px] tracking-[0.8em] uppercase flex items-center justify-center space-x-6 font-bold">
          <span className="hover:text-red-500 transition-colors cursor-default">Respeito</span>
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          <span className="hover:text-red-500 transition-colors cursor-default">Disciplina</span>
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          <span className="hover:text-red-500 transition-colors cursor-default">Tradição</span>
        </div>
      </div>
    </div>
  );
};

export default Portal;
