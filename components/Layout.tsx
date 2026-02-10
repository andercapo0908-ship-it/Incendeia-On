
import React, { useState } from 'react';
import { 
  Menu, X, Home, PlayCircle, Users, Trophy, MessageSquare, 
  Settings, LogOut, Radio, User, BookOpen, Share2, MapPin, Calendar, Phone, Globe, UserCircle, Image as ImageIcon, Briefcase
} from 'lucide-react';
import { UserRole, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  language: Language;
  onSetLanguage: (lang: Language) => void;
  t: any;
}

const Layout: React.FC<LayoutProps> = ({ children, role, currentView, onNavigate, onLogout, language, onSetLanguage, t }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: t.home, icon: Home, roles: [UserRole.STUDENT] },
    { id: 'profile', label: t.profile, icon: UserCircle, roles: [UserRole.STUDENT] },
    { id: 'classes', label: t.classes, icon: PlayCircle, roles: [UserRole.STUDENT, UserRole.ADMIN] },
    { id: 'events', label: t.events, icon: Calendar, roles: [UserRole.STUDENT] },
    { id: 'locations', label: t.locations, icon: MapPin, roles: [UserRole.STUDENT] },
    { id: 'community', label: t.community, icon: Users, roles: [UserRole.STUDENT] },
    { id: 'gallery', label: t.gallery, icon: ImageIcon, roles: [UserRole.STUDENT] },
    { id: 'partners', label: t.partners, icon: Briefcase, roles: [UserRole.STUDENT] },
    { id: 'masters', label: t.masters, icon: BookOpen, roles: [UserRole.STUDENT] },
    { id: 'contact', label: t.contact, icon: Phone, roles: [UserRole.STUDENT] },
    { id: 'admin', label: t.admin, icon: Settings, roles: [UserRole.ADMIN] },
  ];

  const filteredMenu = menuItems.filter(item => item.roles.includes(role));

  return (
    <div className="min-h-screen flex bg-[#0a0a0a] amazon-pattern">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#121212] border-r border-white/5 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 overflow-hidden
      `}>
        <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-red-600/20 via-orange-600/20 to-transparent opacity-30"></div>
        
        <div className="p-8 flex flex-col items-center relative z-10">
          <div className="mb-4 relative w-20 h-20 p-2 bg-gradient-to-b from-white/5 to-transparent rounded-full border border-white/5 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">
              <path d="M120 20 Q180 100 120 180" stroke="#dc2626" strokeWidth="8" fill="none" strokeLinecap="round" />
              <line x1="120" y1="20" x2="120" y2="180" stroke="white" strokeWidth="3" opacity="0.8" />
              <circle cx="120" cy="140" r="25" fill="#dc2626" />
              <path d="M110 140 H130" stroke="black" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-title text-white tracking-widest leading-none">INCENDEIA</h1>
            <h2 className="text-xl font-title text-red-600 tracking-wider">CAPOEIRA</h2>
            <p className="text-[7px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-2">Mestre Cristiano</p>
          </div>
        </div>

        <nav className="mt-4 px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)] relative z-10">
          {filteredMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center space-x-3 px-5 py-3 rounded-2xl transition-all group
                ${currentView === item.id 
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl shadow-red-900/20' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'}
              `}
            >
              <item.icon size={18} className={currentView === item.id ? 'animate-pulse' : ''} />
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5 space-y-4 bg-[#121212] z-20">
          <div className="flex items-center justify-around bg-black/40 p-2 rounded-xl border border-white/5">
            <button 
              onClick={() => onSetLanguage(Language.PT)}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all ${language === Language.PT ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-gray-500 hover:text-white'}`}
            >
              PT
            </button>
            <button 
              onClick={() => onSetLanguage(Language.ES)}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all ${language === Language.ES ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-gray-500 hover:text-white'}`}
            >
              ES
            </button>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 text-gray-500 hover:text-red-500 bg-white/5 rounded-xl transition-all border border-white/5"
          >
            <LogOut size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl sticky top-0 z-30 indigenous-border">
          <button 
            className="md:hidden text-gray-400 p-2 hover:bg-white/5 rounded-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex-1 px-4 hidden md:block">
            <h2 className="text-xl font-bold text-gray-100 tracking-tight flex items-center space-x-3">
              <span className="w-1 h-5 bg-red-600 rounded-full"></span>
              <span>{menuItems.find(m => m.id === currentView)?.label || 'Painel'}</span>
            </h2>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2.5 bg-white/5 text-gray-400 hover:text-white rounded-xl transition-all border border-white/5">
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full ring-4 ring-[#0a0a0a]"></span>
              <MessageSquare size={20} />
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">Capoeirista</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Graduado</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold shadow-lg shadow-red-900/20 border border-white/10">
                U
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
