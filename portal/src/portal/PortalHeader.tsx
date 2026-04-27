import { useEffect, useRef, useState } from 'react';
import { NotificationItem } from '../data';
import { EXTERNAL_LINKS } from './externalLinks';

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

type MobileMenuItem = {
  label: string;
  icon: IconName;
  action: () => void;
};

function PortalLogo({ onNavigate, privateArea }: { onNavigate: (view: string) => void; privateArea?: boolean }) {
  return (
    <xds-button className="portal-brand" kind="ghost" size="sm" icon-position="left" onClick={() => onNavigate('landing')}>
      <span slot="icon" className="portal-brand__icon">
        <xds-icon name="account_balance" size="sm"></xds-icon>
      </span>
      <span className="portal-brand__content">
        <span className="portal-brand__gov">
          <xds-text variant="logo" as="strong" className="portal-brand__title">
            PORTAL<span>GOV</span>
          </xds-text>
          <xds-text variant="caption" as="span" className="portal-brand__sub">OFICIAL</xds-text>
        </span>

        <span className="portal-brand__divider" />

        <span className="portal-brand__service">
          <xds-text variant="h3" as="strong" className="portal-brand__service-title">
            {privateArea ? 'Área do Cidadão' : 'Serviços Digitais'}
          </xds-text>
          <xds-text variant="caption" as="span" className="portal-brand__service-sub">
            {privateArea ? 'Acesso verificado' : 'Simplificando sua vida'}
          </xds-text>
        </span>
      </span>
    </xds-button>
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
  const mobileMenuItems: MobileMenuItem[] = isLoggedIn
    ? [
        { label: 'Início', icon: 'home', action: () => onNavigate('dashboard') },
        { label: 'Serviços', icon: 'search', action: () => onNavigate('search') },
        { label: 'Órgãos e Secretarias', icon: 'account_balance', action: () => onNavigate('departments') },
        { label: 'Notícias', icon: 'calendar_today', action: () => onNavigate('news') },
        { label: `Notificações${unread > 0 ? ` (${unread})` : ''}`, icon: 'notifications', action: () => onNavigate('notifications') },
      ]
    : [
        { label: 'Início', icon: 'home', action: () => onNavigate('landing') },
        { label: 'Serviços', icon: 'search', action: () => onNavigate('search') },
        { label: 'Órgãos e Secretarias', icon: 'account_balance', action: () => onNavigate('departments') },
        { label: 'Notícias', icon: 'calendar_today', action: () => onNavigate('news') },
        { label: 'Ouvidoria', icon: 'support_agent', action: () => onNavigate('landing') },
      ];

  useEffect(() => {
    const theme = isHighContrast ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-portal-theme', theme);
    window.localStorage.setItem('portal-theme', theme);
  }, [isHighContrast]);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(min-width: 1025px)');
    const closeIfDesktop = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    closeIfDesktop(media);
    media.addEventListener('change', closeIfDesktop);
    return () => media.removeEventListener('change', closeIfDesktop);
  }, []);

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
              <xds-button kind="ghost" size="md" href={EXTERNAL_LINKS.ouvidoria} target="_blank">
                Ouvidoria
              </xds-button>
            </nav>

            <xds-button className="portal-header__login-btn" kind="primary" size="lg" onClick={() => onNavigate('dashboard')}>
              Entrar
            </xds-button>

            <xds-icon-button
              className={`portal-header__mobile-toggle${mobileOpen ? ' portal-header__mobile-toggle--open' : ''}`}
              icon={mobileOpen ? 'close' : 'menu'}
              kind={mobileOpen ? 'tertiary' : 'ghost'}
              size={mobileOpen ? 'lg' : 'md'}
              tooltip-text={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            ></xds-icon-button>
          </div>
        </div>

        {mobileOpen && (
          <div className="portal-header__mobile-menu">
            <xds-search
              ref={mobileSearchRef}
              className="portal-header__mobile-search"
              placeholder="O que você procura?"
              value={globalSearchTerm}
              radius="rounded"
              shadow={false}
            ></xds-search>

            <nav className="portal-header__mobile-nav portal-header__mobile-nav--list">
              {mobileMenuItems.map((item, index) => (
                <xds-button
                  key={item.label}
                  kind="ghost"
                  size="md"
                  icon-position="right"
                  className={`portal-mobile-link${index === 0 ? ' portal-mobile-link--active' : ''}`}
                  onClick={() => {
                    setMobileOpen(false);
                    item.action();
                  }}
                >
                  <span className="portal-mobile-link__main">
                    <xds-icon name={item.icon} size="sm"></xds-icon>
                    <xds-text variant="h3" as="span">{item.label}</xds-text>
                  </span>
                  <xds-icon slot="icon" className="portal-mobile-link__chevron" name="chevron_right" size="sm"></xds-icon>
                </xds-button>
              ))}
            </nav>

            <div className="portal-header__mobile-footer">
              <xds-button
                className="portal-header__mobile-login"
                kind="primary"
                size="lg"
                full-width
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate('dashboard');
                }}
              >
                Entrar com gov.br
              </xds-button>

              <div className="portal-header__mobile-controls">
                <div className="portal-header__mobile-font">
                  <xds-button className="portal-header__mobile-font-btn" kind="ghost" size="sm" onClick={() => onFontSize('decrease')}>A-</xds-button>
                  <xds-divider orientation="vertical"></xds-divider>
                  <xds-button className="portal-header__mobile-font-btn" kind="ghost" size="sm" onClick={() => onFontSize('increase')}>A+</xds-button>
                </div>

                <xds-button
                  className="portal-header__mobile-theme"
                  kind="ghost"
                  size="sm"
                  onClick={toggleContrast}
                  aria-pressed={isHighContrast}
                >
                  <span className="portal-header__mobile-theme-content">
                    <xds-icon name="contrast" size="sm"></xds-icon>
                    <xds-text variant="caption" as="span">Tema</xds-text>
                  </span>
                </xds-button>
              </div>
            </div>
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
              size="sm"
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

            <span className="portal-header__notif-wrap">
              <xds-icon-button
                className="portal-header__notif-btn"
                kind="ghost"
                size="md"
                icon="notifications"
                tooltip-text="Notificações"
                onClick={() => onNavigate('notifications')}
              ></xds-icon-button>
              {unread > 0 && <span className="portal-header__notif-badge">{unread}</span>}
            </span>

            <xds-button className="portal-header__user" kind="ghost" size="sm" icon-position="right" onClick={() => onNavigate('dashboard')}>
              <span className="portal-header__user-info">
                <xds-text variant="h3" as="span" className="portal-header__user-name">{userName}</xds-text>
                <xds-text variant="caption" as="span" className="portal-header__user-cpf">CPF: {cpf}</xds-text>
              </span>
              <xds-avatar slot="icon" src={avatarUrl} alt="Avatar" size="lg"></xds-avatar>
            </xds-button>
          </div>

          <xds-icon-button
            className={`portal-header__mobile-toggle${mobileOpen ? ' portal-header__mobile-toggle--open' : ''}`}
            icon={mobileOpen ? 'close' : 'menu'}
            kind={mobileOpen ? 'tertiary' : 'ghost'}
            size={mobileOpen ? 'lg' : 'md'}
            tooltip-text={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
          ></xds-icon-button>
        </div>
      </div>

      {mobileOpen && (
        <div className="portal-header__mobile-menu">
          <xds-search
            ref={mobileSearchRef}
            className="portal-header__mobile-search"
            placeholder="O que você procura?"
            value={globalSearchTerm}
            radius="rounded"
            shadow={false}
          ></xds-search>

          <nav className="portal-header__mobile-nav portal-header__mobile-nav--list">
            {mobileMenuItems.map((item, index) => (
              <xds-button
                key={item.label}
                kind="ghost"
                size="md"
                icon-position="right"
                className={`portal-mobile-link${index === 0 ? ' portal-mobile-link--active' : ''}`}
                onClick={() => {
                  setMobileOpen(false);
                  item.action();
                }}
              >
                <span className="portal-mobile-link__main">
                  <xds-icon name={item.icon} size="sm"></xds-icon>
                  <xds-text variant="h3" as="span">{item.label}</xds-text>
                </span>
                <xds-icon slot="icon" className="portal-mobile-link__chevron" name="chevron_right" size="sm"></xds-icon>
              </xds-button>
            ))}
          </nav>

          <div className="portal-header__mobile-footer">
            <xds-button
              className="portal-header__mobile-login"
              kind="primary"
              size="lg"
              full-width
              onClick={() => {
                setMobileOpen(false);
                onNavigate('dashboard');
              }}
            >
              Entrar com gov.br
            </xds-button>

            <div className="portal-header__mobile-controls">
              <div className="portal-header__mobile-font">
                <xds-button className="portal-header__mobile-font-btn" kind="ghost" size="sm" onClick={() => onFontSize('decrease')}>A-</xds-button>
                <xds-divider orientation="vertical"></xds-divider>
                <xds-button className="portal-header__mobile-font-btn" kind="ghost" size="sm" onClick={() => onFontSize('increase')}>A+</xds-button>
              </div>

              <xds-button
                className="portal-header__mobile-theme"
                kind="ghost"
                size="sm"
                onClick={toggleContrast}
                aria-pressed={isHighContrast}
              >
                <span className="portal-header__mobile-theme-content">
                  <xds-icon name="contrast" size="sm"></xds-icon>
                  <xds-text variant="caption" as="span">Tema</xds-text>
                </span>
              </xds-button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
