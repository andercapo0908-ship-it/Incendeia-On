
import React, { useState, useEffect } from 'react';
import Portal from './views/Portal';
import Layout from './components/Layout';
import StudentDashboard from './views/StudentDashboard';
import Classes from './views/Classes';
import Community from './views/Community';
import Masters from './views/Masters';
import AdminPanel from './views/AdminPanel';
import Locations from './views/Locations';
import Events from './views/Events';
import Contact from './views/Contact';
import Registration from './views/Registration';
import Gallery from './views/Gallery';
import Partners from './views/Partners';
import { UserRole, Language, ThemeConfig } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>(Language.PT);
  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: '#dc2626',
    secondaryColor: '#f97316',
    showPatterns: true,
    layoutMode: 'spacious'
  });

  useEffect(() => {
    const savedFavs = localStorage.getItem('incendeia_favorites');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    
    const savedLang = localStorage.getItem('incendeia_lang');
    if (savedLang) setLanguage(savedLang as Language);

    const savedTheme = localStorage.getItem('incendeia_theme');
    if (savedTheme) setTheme(JSON.parse(savedTheme));
  }, []);

  // Update CSS Variables for Dynamic Theme
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
  }, [theme]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('incendeia_favorites', JSON.stringify(next));
      return next;
    });
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('incendeia_lang', lang);
  };

  const handleUpdateTheme = (newTheme: Partial<ThemeConfig>) => {
    const updated = { ...theme, ...newTheme };
    setTheme(updated);
    localStorage.setItem('incendeia_theme', JSON.stringify(updated));
  };

  const handleSelectRole = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setCurrentView(selectedRole === UserRole.ADMIN ? 'admin' : 'dashboard');
  };

  const handleLogout = () => {
    setRole(null);
    setCurrentView('dashboard');
  };

  const t = TRANSLATIONS[language];

  if (!role) {
    return <Portal onSelectRole={handleSelectRole} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <StudentDashboard favorites={favorites} onToggleFavorite={toggleFavorite} t={t} />;
      case 'classes':
        return <Classes favorites={favorites} onToggleFavorite={toggleFavorite} />;
      case 'community':
        return <Community />;
      case 'gallery':
        return <Gallery />;
      case 'partners':
        return <Partners />;
      case 'masters':
        return <Masters />;
      case 'locations':
        return <Locations />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      case 'profile':
        return <Registration t={t} />;
      case 'admin':
        return <AdminPanel themeConfig={theme} onUpdateTheme={handleUpdateTheme} />;
      default:
        return <div className="flex items-center justify-center h-full text-gray-500 italic">Em breve: {currentView}</div>;
    }
  };

  return (
    <div className={theme.showPatterns ? 'amazon-pattern min-h-screen bg-[#0a0a0a]' : 'min-h-screen bg-[#0a0a0a]'}>
      <Layout 
        role={role} 
        currentView={currentView} 
        onNavigate={setCurrentView}
        onLogout={handleLogout}
        language={language}
        onSetLanguage={handleSetLanguage}
        t={t}
      >
        {renderView()}
      </Layout>
    </div>
  );
};

export default App;
