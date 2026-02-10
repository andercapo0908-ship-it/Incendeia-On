
import React, { useState } from 'react';
import { Search, Filter, Clock, ChevronRight, Heart } from 'lucide-react';
import { MOCK_VIDEOS } from '../constants';
import { VideoLevel } from '../types';

interface ClassesProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const Classes: React.FC<ClassesProps> = ({ favorites, onToggleFavorite }) => {
  const [filter, setFilter] = useState<VideoLevel | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredVideos = MOCK_VIDEOS.filter(video => 
    (filter === 'All' || video.level === filter) &&
    (video.title.toLowerCase().includes(search.toLowerCase()) || video.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Videoaulas</h1>
          <p className="text-gray-400">Explore nossa biblioteca de conhecimento</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text"
              placeholder="Pesquisar aulas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#121212] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-full sm:w-64"
            />
          </div>
          <button className="flex items-center space-x-2 bg-[#121212] border border-white/5 px-4 py-2 rounded-xl text-sm hover:border-white/10 transition-colors">
            <Filter size={18} />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Levels Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All', ...Object.values(VideoLevel)].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level as any)}
            className={`
              px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all
              ${filter === level 
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' 
                : 'bg-[#121212] text-gray-500 border border-white/5 hover:border-white/20'}
            `}
          >
            {level === 'All' ? 'Todos' : level}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div key={video.id} className="group bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all flex flex-col relative">
            <div className="relative aspect-video">
              <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={video.title} />
              <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                {video.level}
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur rounded-lg text-[10px] font-bold text-white flex items-center space-x-1">
                <Clock size={12} />
                <span>{video.duration}</span>
              </div>
              {/* Favorite Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(video.id);
                }}
                className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-20 ${
                  favorites.includes(video.id) 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' 
                    : 'bg-black/40 text-gray-300 hover:text-white hover:bg-black/60'
                }`}
              >
                <Heart size={18} fill={favorites.includes(video.id) ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-xs text-orange-500 font-bold uppercase tracking-widest">{video.category}</span>
              <h3 className="text-lg font-bold mt-1 group-hover:text-red-500 transition-colors">{video.title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2 flex-1">{video.description}</p>
              <button className="mt-4 w-full py-3 bg-white/5 hover:bg-orange-600 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 group/btn">
                <span>Assistir Aula</span>
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-[#121212] rounded-full flex items-center justify-center mx-auto border border-white/5 text-gray-500">
            <Search size={32} />
          </div>
          <p className="text-gray-400">Nenhuma aula encontrada com esses critérios.</p>
        </div>
      )}
    </div>
  );
};

export default Classes;
