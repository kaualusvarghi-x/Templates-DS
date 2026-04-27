import { useState } from 'react';
import LandingPage from './LandingPage';
import ServiceSearch from './ServiceSearch';
import DepartmentsPage from './DepartmentsPage';
import NewsPage from './NewsPage';
import NotificationsPage from './NotificationsPage';
import Dashboard from './Dashboard';
import { INITIAL_NOTIFICATIONS, NotificationItem } from '../data';

type PortalView = 'landing' | 'search' | 'departments' | 'news' | 'notifications' | 'dashboard';

const USER = {
  name: 'João Silva',
  cpf: '***.452.***-00',
  avatarUrl: 'https://picsum.photos/100/100',
};

export default function PortalApp(_props?: { onNavigate?: (page: string) => void }) {
  const [view, setView] = useState<PortalView>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(['2', '6']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');
  const [_fontSize, setFontSize] = useState(100);

  const navigate = (v: string) => {
    if (v === 'dashboard' || v === 'notifications') setIsLoggedIn(true);
    if (v === 'landing' && !isLoggedIn) setView('landing');
    else setView(v as PortalView);
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
        <LandingPage
          {...sharedProps}
          favorites={favorites}
        />
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

      {/* Dev nav — quick view switcher */}
      <div className="portal-dev-nav">
        <span className="portal-dev-nav__label">DevNav:</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'landing' ? 'active' : ''}
          onClick={() => navigate('landing')}
        >
          Home
        </xds-button>
        <span>|</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'search' ? 'active' : ''}
          onClick={() => navigate('search')}
        >
          Busca
        </xds-button>
        <span>|</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'departments' ? 'active' : ''}
          onClick={() => navigate('departments')}
        >
          Órgãos
        </xds-button>
        <span>|</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'news' ? 'active' : ''}
          onClick={() => navigate('news')}
        >
          Notícias
        </xds-button>
        <span>|</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'notifications' ? 'active' : ''}
          onClick={() => navigate('notifications')}
        >
          Notificações
        </xds-button>
        <span>|</span>
        <xds-button
          kind="ghost"
          size="sm"
          className={view === 'dashboard' ? 'active' : ''}
          onClick={() => navigate('dashboard')}
        >
          Entrar
        </xds-button>
      </div>
    </>
  );
}
