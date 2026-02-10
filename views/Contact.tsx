
import React from 'react';
import { Mail, Phone, Instagram, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] p-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-title text-red-600 tracking-wider">ENTRE NA RODA</h2>
          <p className="text-gray-400">Dúvidas, parcerias ou interesse em aulas? Fale conosco.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Nossos Canais</h3>
            <a href="#" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all group">
              <div className="w-12 h-12 bg-green-600/10 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">WhatsApp</p>
                <p className="font-bold">(92) 99999-0000</p>
              </div>
            </a>
            
            <a href="#" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-red-500/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 text-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Instagram</p>
                <p className="font-bold">@incendeiacapoeira</p>
              </div>
            </a>

            <a href="#" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">E-mail</p>
                <p className="font-bold">contato@incendeia.com</p>
              </div>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Mande uma Mensagem</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all" />
              <input type="email" placeholder="E-mail" className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all" />
              <textarea placeholder="Sua mensagem..." rows={4} className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all resize-none"></textarea>
              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl shadow-red-900/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2">
                <Send size={18} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
