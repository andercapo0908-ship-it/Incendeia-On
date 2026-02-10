
import React, { useState } from 'react';
import { Camera, Film, LayoutGrid, Search, Maximize2 } from 'lucide-react';
import { MOCK_GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Eventos', 'Treinos', 'Técnica', 'Cultura'];

  const filteredItems = MOCK_GALLERY.filter(item => 
    filter === 'Todos' || item.category === filter
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-title text-red-600 tracking-wider">Mural Incendeia</h1>
          <p className="text-gray-400">Nossa história capturada em cada movimento</p>
        </div>

        <div className="flex bg-[#121212] p-1 rounded-2xl border border-white/5 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === cat ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative aspect-square overflow-hidden rounded-3xl bg-[#121212] border border-white/5 cursor-pointer"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-black">{item.category}</span>
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur rounded-2xl text-white">
                  {item.type === 'IMAGE' ? <Camera size={20} /> : <Film size={20} />}
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
              <div className="p-2 bg-black/50 backdrop-blur rounded-xl text-white">
                <Maximize2 size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
