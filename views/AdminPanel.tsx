
import React, { useState } from 'react';
import { 
  BarChart3, Users, PlayCircle, Plus, 
  ArrowUpRight, ArrowDownRight, MoreVertical,
  BookOpen, Calendar, MapPin, Settings as SettingsIcon,
  Search, Edit2, Trash2, Save, X, Image as ImageIcon, Briefcase,
  Lock, Key, Palette, Eye, Layout as LayoutIcon, FileText, Camera
} from 'lucide-react';
import { MOCK_VIDEOS, MOCK_MASTERS, MOCK_EVENTS, MOCK_LOCATIONS, MOCK_GALLERY, MOCK_PARTNERS } from '../constants';
import { ThemeConfig, MasterHistory } from '../types';

type AdminTab = 'stats' | 'lessons' | 'masters' | 'events' | 'locations' | 'gallery' | 'partners' | 'settings' | 'layout';

interface AdminPanelProps {
  themeConfig: ThemeConfig;
  onUpdateTheme: (theme: Partial<ThemeConfig>) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ themeConfig, onUpdateTheme }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('stats');
  const [searchQuery, setSearchQuery] = useState('');
  const [showError, setShowError] = useState(false);
  
  // Estado para formulário de mestre
  const [isAddingMaster, setIsAddingMaster] = useState(false);
  const [newMaster, setNewMaster] = useState<Partial<MasterHistory>>({
    name: '',
    title: '',
    bio: '',
    image: '',
    achievements: []
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'AMAZONAS') {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setPasswordInput('');
    }
  };

  const handleSaveMaster = () => {
    // Aqui seria a lógica de integração com API
    console.log("Novo Mestre Salvo:", newMaster);
    setIsAddingMaster(false);
    setNewMaster({ name: '', title: '', bio: '', image: '', achievements: [] });
    alert("Mestre cadastrado com sucesso no sistema Incendeia!");
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#121212] border border-white/10 p-10 rounded-[3rem] space-y-8 animate-fade-in shadow-2xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-red-600/20 rounded-3xl flex items-center justify-center text-red-600">
              <Lock size={40} />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Área Restrita</h2>
              <p className="text-gray-500 text-sm">Insira a senha de mestre para prosseguir</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                autoFocus
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Senha de Acesso"
                className={`w-full bg-black/40 border ${showError ? 'border-red-600 animate-shake' : 'border-white/10'} rounded-2xl px-12 py-4 text-center text-xl tracking-[0.2em] focus:outline-none focus:border-red-600 transition-all text-white font-bold`}
              />
            </div>
            {showError && (
              <p className="text-red-500 text-center text-[10px] font-black uppercase tracking-widest animate-pulse">
                Acesso Negado. Verifique a credencial.
              </p>
            )}
            <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-red-900/20 uppercase tracking-[0.2em] text-xs">
              Autenticar Mestre
            </button>
          </form>
          <div className="pt-4 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-relaxed">
              Senha: AMAZONAS
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderMastersManager = () => (
    <div className="space-y-6 animate-fade-in">
      {isAddingMaster ? (
        <div className="bg-[#121212] border border-red-600/30 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl"></div>
          
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Plus className="text-red-600" size={20} />
              <span>Cadastrar Mestre do Grupo</span>
            </h3>
            <button onClick={() => setIsAddingMaster(false)} className="text-gray-500 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Nome do Mestre</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  <input 
                    type="text" 
                    value={newMaster.name}
                    onChange={(e) => setNewMaster({...newMaster, name: e.target.value})}
                    placeholder="Ex: Mestre Pastinha"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-10 py-3 text-sm focus:border-red-600 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Título / Cargo</label>
                <input 
                  type="text" 
                  value={newMaster.title}
                  onChange={(e) => setNewMaster({...newMaster, title: e.target.value})}
                  placeholder="Ex: Grão-Mestre"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-600 transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">URL da Foto (Perfil)</label>
                <div className="relative">
                  <Camera className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  <input 
                    type="text" 
                    value={newMaster.image}
                    onChange={(e) => setNewMaster({...newMaster, image: e.target.value})}
                    placeholder="https://imagem-do-mestre.jpg"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-10 py-3 text-sm focus:border-red-600 transition-all outline-none font-mono text-[10px]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Biografia / História (Texto)</label>
              <div className="relative h-full">
                <FileText className="absolute left-3 top-3 text-gray-600" size={16} />
                <textarea 
                  value={newMaster.bio}
                  onChange={(e) => setNewMaster({...newMaster, bio: e.target.value})}
                  placeholder="Conte a trajetória do mestre aqui..."
                  className="w-full h-[calc(100%-24px)] bg-black/40 border border-white/10 rounded-xl px-10 py-3 text-sm focus:border-red-600 transition-all outline-none resize-none min-h-[150px]"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 space-x-4">
            <button 
              onClick={() => setIsAddingMaster(false)}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-400 font-bold rounded-xl text-xs transition-all"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSaveMaster}
              className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-red-900/20"
            >
              Salvar Mestre
            </button>
          </div>
        </div>
      ) : (
        renderContentManager('Gestão de Mestres', MOCK_MASTERS, BookOpen, 'master')
      )}
    </div>
  );

  const renderLayoutSettings = () => (
    <div className="max-w-4xl space-y-8 animate-fade-in">
      <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 space-y-10">
        <div className="flex items-center space-x-3 border-b border-white/5 pb-6">
          <Palette className="text-red-600" size={24} />
          <h3 className="text-xl font-bold">Personalização do Layout</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colors */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Cores da Identidade</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold block">Cor Primária</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="color" 
                    value={themeConfig.primaryColor}
                    onChange={(e) => onUpdateTheme({ primaryColor: e.target.value })}
                    className="w-12 h-12 rounded-lg bg-transparent cursor-pointer border-none"
                  />
                  <input 
                    type="text" 
                    value={themeConfig.primaryColor}
                    onChange={(e) => onUpdateTheme({ primaryColor: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs font-mono uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">Cor Secundária</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="color" 
                    value={themeConfig.secondaryColor}
                    onChange={(e) => onUpdateTheme({ secondaryColor: e.target.value })}
                    className="w-12 h-12 rounded-lg bg-transparent cursor-pointer border-none"
                  />
                  <input 
                    type="text" 
                    value={themeConfig.secondaryColor}
                    onChange={(e) => onUpdateTheme({ secondaryColor: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs font-mono uppercase"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Visibility & Style */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Opções de Estilo</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold text-sm">Grafismos Amazônicos</p>
                  <p className="text-[10px] text-gray-500">Exibir padrões indígenas no fundo.</p>
                </div>
                <button 
                  onClick={() => onUpdateTheme({ showPatterns: !themeConfig.showPatterns })}
                  className={`w-12 h-6 rounded-full transition-colors relative ${themeConfig.showPatterns ? 'bg-red-600' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${themeConfig.showPatterns ? 'translate-x-7' : 'translate-x-1'}`}></div>
                </button>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-sm">Modo de Exibição</p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => onUpdateTheme({ layoutMode: 'spacious' })}
                    className={`p-4 rounded-xl border text-center transition-all ${themeConfig.layoutMode === 'spacious' ? 'border-red-600 bg-red-600/10' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                  >
                    <LayoutIcon className="mx-auto mb-2" size={20} />
                    <span className="text-[10px] font-bold uppercase">Espaçoso</span>
                  </button>
                  <button 
                    onClick={() => onUpdateTheme({ layoutMode: 'compact' })}
                    className={`p-4 rounded-xl border text-center transition-all ${themeConfig.layoutMode === 'compact' ? 'border-red-600 bg-red-600/10' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                  >
                    <LayoutIcon className="mx-auto mb-2 rotate-90" size={20} />
                    <span className="text-[10px] font-bold uppercase">Compacto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Alunos', value: '1,284', change: '+12%', type: 'up' },
          { label: 'Acessos Hoje', value: '452', change: '+5%', type: 'up' },
          { label: 'Galeria (Itens)', value: MOCK_GALLERY.length.toString(), change: '+2', type: 'up' },
          { label: 'Apps Parceiros', value: MOCK_PARTNERS.length.toString(), change: '0%', type: 'up' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#121212] border border-white/5 p-6 rounded-2xl space-y-2 hover:border-red-500/20 transition-all">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <div className={`flex items-center text-xs font-bold ${stat.type === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.type === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#121212] border border-white/5 rounded-2xl p-6">
          <h3 className="font-bold mb-6 flex items-center space-x-2">
            <BarChart3 size={20} className="text-red-600" />
            <span>Fluxo Multitarefa</span>
          </h3>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-red-600/20 to-red-600 rounded-t-lg transition-all hover:scale-105" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6">
          <h3 className="font-bold mb-6 flex items-center space-x-2">
            <Users size={20} className="text-orange-500" />
            <span>Controle Rápido</span>
          </h3>
          <div className="space-y-3">
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all flex items-center px-4 space-x-3">
              <ImageIcon size={16} className="text-red-500" />
              <span>Subir Fotos da Roda</span>
            </button>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all flex items-center px-4 space-x-3">
              <Briefcase size={16} className="text-orange-500" />
              <span>Novo Parceiro App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function renderContentManager(title: string, data: any[], icon: any, type: string) {
    return (
      <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden animate-fade-in">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-600/10 rounded-lg text-red-600">
              {React.createElement(icon, { size: 20 })}
            </div>
            <h3 className="font-bold">{title}</h3>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-black/40 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-red-600 w-full md:w-48 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => { if(type === 'master') setIsAddingMaster(true); }}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-xs font-bold transition-all"
            >
              <Plus size={16} />
              <span>Adicionar</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-gray-500 uppercase tracking-[0.2em] bg-white/5 font-black">
                <th className="px-6 py-4">Nome / Título</th>
                <th className="px-6 py-4">Info</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group text-sm">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {item.image || item.thumbnail || item.url || item.logo ? (
                        <img src={item.image || item.thumbnail || item.url || item.logo} className="w-10 h-10 rounded-lg object-cover border border-white/5" alt="" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-600">
                          {React.createElement(icon, { size: 16 })}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-gray-100">{item.name || item.title}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.category || item.type || 'Geral'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-400 max-w-xs truncate">
                     {item.bio || item.description || item.address || item.category}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão Incendeia</h1>
          <p className="text-gray-400">Ambiente Administrativo Seguro</p>
        </div>
        
        <div className="flex bg-[#121212] p-1.5 rounded-2xl border border-white/5 overflow-x-auto scrollbar-hide">
          {[
            { id: 'stats', label: 'Dashboard', icon: BarChart3 },
            { id: 'layout', label: 'Layout', icon: Palette },
            { id: 'lessons', label: 'Aulas', icon: PlayCircle },
            { id: 'masters', label: 'Mestres', icon: BookOpen },
            { id: 'events', label: 'Eventos', icon: Calendar },
            { id: 'gallery', label: 'Galeria', icon: ImageIcon },
            { id: 'partners', label: 'Parceiros', icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'}
              `}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {activeTab === 'stats' && renderStats()}
        {activeTab === 'layout' && renderLayoutSettings()}
        {activeTab === 'lessons' && renderContentManager('Gerenciar Aulas', MOCK_VIDEOS, PlayCircle, 'lesson')}
        {activeTab === 'masters' && renderMastersManager()}
        {activeTab === 'events' && renderContentManager('Calendário de Eventos', MOCK_EVENTS, Calendar, 'event')}
        {activeTab === 'gallery' && renderContentManager('Acervo Galeria', MOCK_GALLERY, ImageIcon, 'gallery')}
        {activeTab === 'partners' && renderContentManager('Vitrine de Parceiros', MOCK_PARTNERS, Briefcase, 'partner')}
      </div>
    </div>
  );
};

export default AdminPanel;
