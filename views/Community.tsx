
import React from 'react';
import { MessageSquare, Heart, Share2, Plus, MessageCircle } from 'lucide-react';
import { MOCK_FORUM } from '../constants';

const Community: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Forum Feed */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Comunidade</h1>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-red-900/20">
            <Plus size={18} />
            <span>Novo Post</span>
          </button>
        </div>

        <div className="space-y-4">
          {MOCK_FORUM.map((post) => (
            <div key={post.id} className="bg-[#121212] border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-xs">
                  {post.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{post.author}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{post.date}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{post.content}</p>
              </div>

              <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors text-xs font-bold">
                  <Heart size={16} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors text-xs font-bold">
                  <MessageCircle size={16} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors text-xs font-bold">
                  <Share2 size={16} />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar: Photo Mural & Active Users */}
      <div className="space-y-8">
        <section className="bg-[#121212] border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
            <Share2 size={20} className="text-orange-500" />
            <span>Mural de Fotos</span>
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map(i => (
              <img 
                key={i} 
                src={`https://picsum.photos/seed/capo${i}/300/300`} 
                className="w-full aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" 
                alt="Community"
              />
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-colors">
            Ver Tudo
          </button>
        </section>

        <section className="bg-[#121212] border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
            <MessageSquare size={20} className="text-red-500" />
            <span>Online Agora</span>
          </h3>
          <div className="space-y-4">
            {['Mestre Incendeia', 'João Graduado', 'Maria Capoeira', 'Curupira'].map((user, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#121212]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-300">{user}</span>
                </div>
                <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <MessageCircle size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
