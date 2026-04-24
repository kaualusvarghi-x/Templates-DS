import { useState } from 'react';
import './portal/portal.css';
import LandingPage from './portal/LandingPage';
import ServiceSearch from './portal/ServiceSearch';
import DepartmentsPage from './portal/DepartmentsPage';
import NewsPage from './portal/NewsPage';
import NotificationsPage from './portal/NotificationsPage';
import Dashboard from './portal/Dashboard';
import { INITIAL_NOTIFICATIONS, NotificationItem } from './data';

type PortalView = 'landing' | 'search' | 'departments' | 'news' | 'notifications' | 'dashboard';

const USER = {
  name: 'João Silva',
  cpf: '***.452.***-00',
  avatarUrl: 'https://picsum.photos/100/100',
};

export default function App() {
  const [view, setView] = useState<PortalView>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(['2', '6']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');
  const [_fontSize, setFontSize] = useState(100);

  const navigate = (v: string) => {
    if (v === 'dashboard' || v === 'notifications') setIsLoggedIn(true);
    setView(v as PortalView);
  };

  const handleFontSize = (action: 'increase' | 'decrease') => {
    setFontSize((prev) => {
      const next = action === 'increase' ? Math.min(prev + 10, 130) : Math.max(prev - 10, 80);
      document.documentElement.style.fontSize = `${next}%`;
      return next;
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('landing');
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const sharedProps = {
    isLoggedIn,
    userName: USER.name,
    avatarUrl: USER.avatarUrl,
    cpf: USER.cpf,
    notifications,
    globalSearchTerm,
    setGlobalSearchTerm,
    onNavigate: navigate,
    onFontSize: handleFontSize,
  };

  return (
    <>
      {view === 'landing' && (
        <LandingPage {...sharedProps} favorites={favorites} />
      )}
      {view === 'search' && (
        <ServiceSearch {...sharedProps} />
      )}
      {view === 'departments' && (
        <DepartmentsPage {...sharedProps} />
      )}
      {view === 'news' && (
        <NewsPage {...sharedProps} />
      )}
      {view === 'notifications' && (
        <NotificationsPage
          {...sharedProps}
          setNotifications={setNotifications}
        />
      )}
      {view === 'dashboard' && (
        <Dashboard
          {...sharedProps}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setNotifications={setNotifications}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
