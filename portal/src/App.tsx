import { useEffect, useRef, useState } from 'react';
import './portal/styles/index.css';
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
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(['2', '6']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');
  const [_fontSize, setFontSize] = useState(100);
  const loginTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (loginTimerRef.current !== null) {
        window.clearTimeout(loginTimerRef.current);
      }
    };
  }, []);

  const startLoginLoading = (targetView: PortalView) => {
    setIsLoginLoading(true);
    if (loginTimerRef.current !== null) {
      window.clearTimeout(loginTimerRef.current);
    }

    loginTimerRef.current = window.setTimeout(() => {
      setIsLoggedIn(true);
      setView(targetView);
      setIsLoginLoading(false);
      loginTimerRef.current = null;
    }, 3000);
  };

  const navigate = (v: string) => {
    const targetView = v as PortalView;
    if (isLoginLoading) return;

    if ((targetView === 'dashboard' || targetView === 'notifications') && !isLoggedIn) {
      startLoginLoading(targetView);
      return;
    }

    if (targetView === 'dashboard' || targetView === 'notifications') {
      setIsLoggedIn(true);
    }

    setView(targetView);
  };

  const handleFontSize = (action: 'increase' | 'decrease') => {
    setFontSize((prev) => {
      const next = action === 'increase' ? Math.min(prev + 10, 130) : Math.max(prev - 10, 80);
      document.documentElement.style.fontSize = `${next}%`;
      return next;
    });
  };

  const handleLogout = () => {
    if (loginTimerRef.current !== null) {
      window.clearTimeout(loginTimerRef.current);
      loginTimerRef.current = null;
    }
    setIsLoginLoading(false);
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
      <xds-external-link-guard></xds-external-link-guard>
      {isLoginLoading ? (
        <section className="portal-login-loading" aria-live="polite" aria-busy="true">
          <div className="portal-login-loading__center">
            <div className="portal-login-loading__spinner-wrap">
              <xds-loading active assistive-text="Conectando aos órgãos governamentais">
                <xds-icon slot="icon" name="account_balance" size="lg"></xds-icon>
              </xds-loading>
              <span className="portal-login-loading__dot portal-login-loading__dot--amber"></span>
              <span className="portal-login-loading__dot portal-login-loading__dot--green"></span>
            </div>

            <xds-text variant="h2" as="p" className="portal-login-loading__brand">PortalGov</xds-text>
            <xds-text variant="body" as="p" className="portal-login-loading__status">
              Conectando aos órgãos governamentais...
            </xds-text>
          </div>

          <div className="portal-login-loading__footer">
            <div className="portal-login-loading__ellipsis" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <xds-text variant="label" as="span" className="portal-login-loading__caption">
              PROCESSANDO DADOS SEGUROS
            </xds-text>
          </div>
        </section>
      ) : (
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
      )}
    </>
  );
}
