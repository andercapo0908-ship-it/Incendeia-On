
import React, { useState } from 'react';
import { Trophy, TrendingUp, Calendar, Zap, Send, Heart, PlayCircle as PlayIcon } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { MOCK_VIDEOS } from '../constants';

interface StudentDashboardProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  t: any;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ favorites, onToggleFavorite, t }) => {
  const [question, setQuestion] = useState('');
  const [masterAnswer, setMasterAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskMaster = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    const answer = await geminiService.askVirtualMaster(question);
    setMasterAnswer(answer);
    setIsLoading(false);
  };

  const favoriteVideosList = MOCK_VIDEOS.filter(v => favorites.includes(v.id));

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 p-8 text-white">
        <div className="relative z-10 space-y-2">
          <h2 className="text-3xl font-bold">{t.welcome} 👋</h2>
          <p className="text-white/80 max-w-md">Seu treino de hoje está esperando. Você está a apenas 2 aulas do próximo nível.</p>
          <div className="pt-4 flex items-center space-x-4">
            <button className="px-6 py-2 bg-white text-orange-600 rounded-full font-bold text-sm hover:bg-white/90 transition-colors">
              Continuar Treino
            </button>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100`} className="w-8 h-8 rounded-full border-2 border-red-600" alt="Alunos" />
              ))}
              <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-[10px] font-bold">+12</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none amazon-pattern rotate-45"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Aulas Concluídas', value: '24', icon: Trophy, color: 'text-yellow-500' },
              { label: 'Dias Seguidos', value: '7', icon: Zap, color: 'text-orange-500' },
              { label: 'Média Semanal', value: '4.5h', icon: TrendingUp, color: 'text-green-500' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                <stat.icon className={`${stat.color} mb-3`} size={28} />
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Favorited Videos Section */}
          {favoriteVideosList.length > 0 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Heart className="text-red-500" size={24} fill="currentColor" />
                  <span>{t.favorites}</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {favoriteVideosList.map((video) => (
                  <div key={video.id} className="group flex bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all cursor-pointer">
                    <div className="w-32 relative flex-shrink-0">
                      <img src={video.thumbnail} className="h-full object-cover" alt={video.title} />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{video.level}</span>
                          <h4 className="font-bold text-sm leading-tight mt-1">{video.title}</h4>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(video.id);
                          }}
                          className="text-red-600 hover:text-red-400 p-1"
                        >
                          <Heart size={14} fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <PlayCircle className="text-red-500" size={24} />
                <span>Recomendado para Você</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {MOCK_VIDEOS.slice(0, 2).map((video) => (
                <div key={video.id} className="group bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all cursor-pointer">
                  <div className="relative aspect-video">
                    <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={video.title} />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <PlayCircle size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">{video.level}</span>
                    <h4 className="font-bold mt-1">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Zap className="text-orange-500" size={20} />
              <span>Mestre Virtual</span>
            </h3>
            
            <div className="space-y-4">
              <div className="text-sm text-gray-400 bg-white/5 p-4 rounded-xl italic min-h-[80px] flex items-center justify-center text-center">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                ) : masterAnswer ? (
                  <p className="text-gray-200">"{masterAnswer}"</p>
                ) : (
                  <p>Salve, camará! Alguma dúvida sobre nossa arte ou sobre seu treino hoje?</p>
                )}
              </div>
              
              <form onSubmit={handleAskMaster} className="relative">
                <input 
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={t.askMaster}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-all pr-12"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-2 p-1.5 bg-orange-600 rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Calendar className="text-red-500" size={20} />
              <span>{t.upcomingEvents}</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex flex-col items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <span className="text-[10px] font-bold uppercase">Sáb</span>
                  <span className="text-lg font-bold">14</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold">Roda de Conversa</h4>
                  <p className="text-xs text-gray-500">Com Mestre Incendeia • 19:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex flex-col items-center justify-center text-gray-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <span className="text-[10px] font-bold uppercase">Seg</span>
                  <span className="text-lg font-bold">16</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold">Treino de Agilidade</h4>
                  <p className="text-xs text-gray-500">Prof. Curupira • 08:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayCircle = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

export default StudentDashboard;
