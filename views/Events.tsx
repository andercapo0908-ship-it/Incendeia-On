
import React from 'react';
import { Calendar, MapPin, Clock, Info } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="grid gap-6">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="bg-[#121212] border border-white/5 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center group hover:border-red-500/30 transition-all">
            <div className={`w-24 h-24 rounded-3xl flex flex-col items-center justify-center font-bold flex-shrink-0 shadow-xl ${event.type === 'RODA' ? 'bg-orange-600/10 text-orange-500 border border-orange-500/20' : 'bg-red-600 text-white'}`}>
              <span className="text-xs uppercase tracking-widest">{event.type}</span>
              <span className="text-2xl">{event.date.split('/')[0]}</span>
              <span className="text-[10px] uppercase">{event.date.split('/')[1]}</span>
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold group-hover:text-red-500 transition-colors">{event.title}</h3>
              <p className="text-gray-400 text-sm max-w-2xl">{event.description}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-orange-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-red-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all border border-white/5">
              Mais Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
