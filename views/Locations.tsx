
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { MOCK_LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_LOCATIONS.map((loc) => (
          <div key={loc.id} className="bg-[#121212] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-orange-500/30 transition-all">
            <div className="h-64 relative">
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">{loc.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">{loc.address}</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="text-orange-500 flex-shrink-0" size={20} />
                  <p className="text-sm">{loc.schedule}</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="text-yellow-500 flex-shrink-0" size={20} />
                  <p className="text-sm">{loc.contact}</p>
                </div>
              </div>
              <button className="w-full py-4 bg-white/5 hover:bg-red-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-red-900/20">
                Ver no Mapa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
