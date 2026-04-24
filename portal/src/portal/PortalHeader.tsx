import { useEffect, useRef, useState } from 'react';
import { NotificationItem } from '../data';

interface PortalHeaderProps {
  isLoggedIn: boolean;
  userName: string;
  avatarUrl: string;
  cpf: string;
  notifications: NotificationItem[];
  globalSearchTerm: string;
  setGlobalSearchTerm: (v: string) => void;
  onNavigate: (view: string) => void;
  onFontSize: (action: 'increase' | 'decrease') => void;
  view?: 'landing' | 'search' | 'departments' | 'news' | 'dashboard' | 'notifications';
}

function PortalLogo({ onNavigate, privateArea }: { onNavigate: (view: string) => void; privateArea?: boolean }) {
  return (
    <button className="portal-brand" onClick={() => onNavigate('landing')}>
      <span className="portal-brand__icon">
        <xds-icon name="account_balance" size="sm"></xds-icon>
      </span>

      <span className="portal-brand__gov">
        <xds-text variant="logo" as="strong" className="portal-brand__title">
          PORTAL<span>GOV</span>
        </xds-text>
        <xds-text variant="caption" as="span" className="portal-brand__sub">OFICIAL</xds-text>
      </span>

      <span className="portal-brand__divider" />

      <span className="portal-brand__service">
        <xds-text variant="h3" as="strong">{privateArea ? 'Área do Cidadão' : 'Serviços Digitais'}</xds-text>
        <xds-text variant="caption" as="span">{privateArea ? 'Acesso verificado' : 'Simplificando sua vida'}</xds-text>
      </span>
    </button>
  );
}

export default function PortalHeader({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
  view,
}: PortalHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('portal-theme') === 'dark';
  });

  const desktopSearchRef = useRef<HTMLElement | null>(null);
  const mobileSearchRef = useRef<HTMLElement | null>(null);

  const unread = notifications.filter((n) => !n.read).length;
  const hidePrivateNav = view === 'dashboard' || view === 'notifications';

  useEffect(() => {
    const theme = isHighContrast ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-portal-theme', theme);
    window.localStorage.setItem('portal-theme', theme);
  }, [isHighContrast]);

  useEffect(() => {
    const refs = [desktopSearchRef.current, mobileSearchRef.current].filter(Boolean) as HTMLElement[];

    const handleInput = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string }>).detail;
      setGlobalSearchTerm(detail?.value ?? '');
    };

    const handleSubmit = () => {
      setMobileOpen(false);
      onNavigate('search');
    };

    refs.forEach((search) => {
      search.addEventListener('xds-search-input', handleInput as EventListener);
      search.addEventListener('xds-search-submit', handleSubmit);
    });

    return () => {
      refs.forEach((search) => {
        search.removeEventListener('xds-search-input', handleInput as EventListener);
        search.removeEventListener('xds-search-submit', handleSubmit);
      });
    };
  }, [isLoggedIn, mobileOpen, onNavigate, setGlobalSearchTerm]);

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  const TopBar = (
    <div className="portal-topbar">
      <div className="portal-shell portal-topbar__inner">
        <xds-text variant="label" as="span">Acessibilidade:</xds-text>
        <xds-button kind="ghost" size="sm" onClick={() => onFontSize('decrease')}>A-</xds-button>
        <xds-button kind="ghost" size="sm" onClick={() => onFontSize('increase')}>A+</xds-button>
        <xds-button
          kind="ghost"
          size="sm"
          className="portal-topbar__contrast"
          onClick={toggleContrast}
          aria-pressed={isHighContrast}
        >
          <xds-icon slot="icon" name="contrast" size="sm"></xds-icon>
          Alto Contraste
        </xds-button>
        <xds-divider orientation="vertical"></xds-divider>
        <xds-button kind="ghost" size="sm">Transparência</xds-button>
        <xds-button kind="ghost" size="sm">Legislação</xds-button>
        {!isLoggedIn && (
          <xds-button kind="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
            Entrar
          </xds-button>
        )}
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <header className="portal-header portal-header--public">
        {TopBar}

        <div className="portal-header__main">
          <div className="portal-shell portal-header__main-inner">
            <PortalLogo onNavigate={onNavigate} />

            <nav className="portal-header__nav-links">
              <xds-button kind="ghost" size="md" onClick={() => onNavigate('landing')}>Início</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => onNavigate('search')}>Serviços</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => onNavigate('departments')}>Órgãos</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => onNavigate('news')}>Notícias</xds-button>
              <xds-button kind="ghost" size="md">Ouvidoria</xds-button>
            </nav>

            <xds-button kind="primary" size="lg" onClick={() => onNavigate('dashboard')}>
              Entrar
            </xds-button>

            <xds-icon-button
              className="portal-header__mobile-toggle"
              icon={mobileOpen ? 'close' : 'menu'}
              kind="ghost"
              tooltip-text={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            ></xds-icon-button>
          </div>
        </div>

        {mobileOpen && (
          <div className="portal-header__mobile-menu">
            <nav className="portal-header__mobile-nav">
              <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('landing'); }}>Início</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('search'); }}>Serviços</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('departments'); }}>Órgãos</xds-button>
              <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('news'); }}>Notícias</xds-button>
              <xds-button kind="ghost" size="md">Ouvidoria</xds-button>
              <xds-button kind="primary" size="lg" onClick={() => { setMobileOpen(false); onNavigate('dashboard'); }}>
                Entrar
              </xds-button>
            </nav>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="portal-header portal-header--private">
      {TopBar}

      <div className="portal-header__main">
        <div className="portal-shell portal-header__main-inner">
          <PortalLogo onNavigate={onNavigate} privateArea />

          <div className={`portal-header__private-content${view === 'dashboard' ? ' portal-header__private-content--dashboard' : ''}`}>
            <xds-search
              ref={desktopSearchRef}
              className="portal-header__search"
              placeholder="Buscar serviço..."
              size="md"
              radius="pill"
              shadow={false}
              value={globalSearchTerm}
            ></xds-search>

            {!hidePrivateNav && (
              <nav className="portal-header__nav-links portal-header__nav-links--private">
                <xds-button kind="ghost" size="md" onClick={() => onNavigate('dashboard')}>Painel</xds-button>
                <xds-button kind="ghost" size="md" onClick={() => onNavigate('search')}>Serviços</xds-button>
                <xds-button kind="ghost" size="md" onClick={() => onNavigate('departments')}>Órgãos</xds-button>
              </nav>
            )}

            <button
              className="portal-header__notif-btn"
              onClick={() => onNavigate('notifications')}
              title="Notificações"
            >
              <xds-icon name="notifications" size="sm"></xds-icon>
              {unread > 0 && <span className="portal-header__notif-badge">{unread}</span>}
            </button>

            <button className="portal-header__user" onClick={() => onNavigate('dashboard')}>
              <span className="portal-header__user-info">
                <xds-text variant="h3" as="span" className="portal-header__user-name">{userName}</xds-text>
                <xds-text variant="caption" as="span" className="portal-header__user-cpf">CPF: {cpf}</xds-text>
              </span>
              <xds-avatar src={avatarUrl} alt="Avatar" size="sm"></xds-avatar>
            </button>
          </div>

          <xds-icon-button
            className="portal-header__mobile-toggle"
            icon={mobileOpen ? 'close' : 'menu'}
            kind="ghost"
            tooltip-text={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
          ></xds-icon-button>
        </div>
      </div>

      {mobileOpen && (
        <div className="portal-header__mobile-menu">
          <xds-search
            ref={mobileSearchRef}
            placeholder="O que você procura?"
            value={globalSearchTerm}
            radius="pill"
            shadow={false}
          ></xds-search>

          <nav className="portal-header__mobile-nav">
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('landing'); }}>Início</xds-button>
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('search'); }}>Serviços</xds-button>
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('departments'); }}>Órgãos</xds-button>
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('news'); }}>Notícias</xds-button>
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('dashboard'); }}>Meu Painel</xds-button>
            <xds-button kind="ghost" size="md" onClick={() => { setMobileOpen(false); onNavigate('notifications'); }}>
              Notificações {unread > 0 ? `(${unread})` : ''}
            </xds-button>
          </nav>
        </div>
      )}
    </header>
  );
}
