
import React, { useState, useEffect } from 'react';
import { User, Tag, Calendar, Phone, Award, Save, CheckCircle } from 'lucide-react';
import { Graduation } from '../types';

interface RegistrationProps {
  t: any;
}

const Registration: React.FC<RegistrationProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    birthDate: '',
    contact: '',
    graduation: Graduation.ALUNO
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('incendeia_profile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('incendeia_profile', JSON.stringify(formData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-title text-red-600 tracking-wider uppercase">{t.registration}</h2>
          <p className="text-gray-400 text-sm">Mantenha seus dados atualizados na academia</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome Completo */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center space-x-2">
                <User size={14} className="text-red-500" />
                <span>{t.name}</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-all text-white"
                required
              />
            </div>

            {/* Apelido */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center space-x-2">
                <Tag size={14} className="text-orange-500" />
                <span>{t.nickname}</span>
              </label>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="Ex: Curupira"
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-orange-500 transition-all text-white"
              />
            </div>

            {/* Data de Nascimento */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center space-x-2">
                <Calendar size={14} className="text-yellow-500" />
                <span>{t.birthDate}</span>
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-all text-white appearance-none"
                required
              />
            </div>

            {/* Contato */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center space-x-2">
                <Phone size={14} className="text-green-500" />
                <span>{t.contact}</span>
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="(92) 99999-9999"
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-green-500 transition-all text-white"
                required
              />
            </div>

            {/* Graduação */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center space-x-2">
                <Award size={14} className="text-red-600" />
                <span>{t.graduation}</span>
              </label>
              <select
                name="graduation"
                value={formData.graduation}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-all text-white appearance-none cursor-pointer"
              >
                {Object.values(Graduation).map((grad) => (
                  <option key={grad} value={grad} className="bg-[#121212]">
                    {grad}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-xl ${
                isSaved 
                  ? 'bg-green-600 text-white shadow-green-900/20' 
                  : 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-red-900/20 hover:scale-[1.01]'
              }`}
            >
              {isSaved ? <CheckCircle size={20} /> : <Save size={20} />}
              <span>{isSaved ? 'Salvo com Sucesso!' : t.save}</span>
            </button>
          </div>
        </form>

        <div className="pt-4 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Ao se cadastrar, você concorda com as diretrizes do Grupo Incendeia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
