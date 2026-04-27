import { useEffect, useRef } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { NotificationItem } from '../data';

interface LandingPageProps {
  isLoggedIn: boolean;
  userName: string;
  avatarUrl: string;
  cpf: string;
  notifications: NotificationItem[];
  globalSearchTerm: string;
  setGlobalSearchTerm: (v: string) => void;
  favorites: string[];
  onNavigate: (view: string) => void;
  onFontSize: (action: 'increase' | 'decrease') => void;
}

const FEATURED = [
  {
    title: 'Emissão de RG',
    icon: 'badge',
    desc: 'Solicite a 1ª ou 2ª via do seu documento.',
    iconColor: 'info',
  },
  {
    title: 'IPTU 2024',
    icon: 'payments',
    desc: 'Consulte débitos e emita boletos.',
    iconColor: 'success',
  },
  {
    title: 'CNH Digital',
    icon: 'directions_car',
    desc: 'Renovação e consulta de pontos.',
    iconColor: 'warning',
  },
  {
    title: 'Saúde Digital',
    icon: 'medical_services',
    desc: 'Agende consultas e veja vacinas.',
    iconColor: 'danger',
  },
] as const;

const NEWS = [
  {
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    category: 'Inovação',
    title: 'Nova plataforma digital reduz tempo de espera em 50%',
    summary: 'A iniciativa faz parte do programa de modernização administrativa...',
    date: '24 Out, 2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=900&q=80',
    category: 'Inovação',
    title: 'Nova plataforma digital reduz tempo de espera em 50%',
    summary: 'A iniciativa faz parte do programa de modernização administrativa...',
    date: '24 Out, 2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
    category: 'Inovação',
    title: 'Nova plataforma digital reduz tempo de espera em 50%',
    summary: 'A iniciativa faz parte do programa de modernização administrativa...',
    date: '24 Out, 2023',
  },
] as const;

export default function LandingPage({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  favorites: _favorites,
  onNavigate,
  onFontSize,
}: LandingPageProps) {
  const searchRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const search = searchRef.current;
    if (!search) return;

    const handleInput = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string }>).detail;
      setGlobalSearchTerm(detail?.value ?? '');
    };

    const handleSubmit = () => {
      onNavigate('search');
    };

    search.addEventListener('xds-search-input', handleInput as EventListener);
    search.addEventListener('xds-search-submit', handleSubmit);

    return () => {
      search.removeEventListener('xds-search-input', handleInput as EventListener);
      search.removeEventListener('xds-search-submit', handleSubmit);
    };
  }, [onNavigate, setGlobalSearchTerm]);

  const handleSuggestion = (value: string) => {
    setGlobalSearchTerm(value);
    onNavigate('search');
  };

  return (
    <div className="portal-page portal-page--public">
      <PortalHeader
        isLoggedIn={isLoggedIn}
        userName={userName}
        avatarUrl={avatarUrl}
        cpf={cpf}
        notifications={notifications}
        globalSearchTerm={globalSearchTerm}
        setGlobalSearchTerm={setGlobalSearchTerm}
        onNavigate={onNavigate}
        onFontSize={onFontSize}
        view="landing"
      />

      <main className="portal-main portal-main--public">
        <section className="portal-hero">
          <div className="portal-shell portal-hero__content">
            <xds-text variant="h1-hero" as="h1" align="center" className="portal-hero__title">
              Como podemos ajudar você hoje?
            </xds-text>
            <xds-text variant="h2" as="p" align="center" weight="regular" className="portal-hero__sub">
              Encontre serviços, informações e notícias do governo em um só lugar.
              <br />
              Simples, rápido e digital.
            </xds-text>

            <div className="portal-hero__search-row">
              <xds-search
                ref={searchRef}
                className="portal-hero__search"
                placeholder="Buscar serviços..."
                radius="rounded"
                shadow
                size="md"
                value={globalSearchTerm}
              >
                <xds-icon-button
                  slot="action"
                  kind="primary"
                  className="portal-hero__search-action"
                  size="sm"
                  tooltip-text="Sugestões"
                  icon="sparkles"
                ></xds-icon-button>
              </xds-search>

              <xds-button
                kind="primary"
                size="lg"
                className="portal-hero__submit"
                onClick={() => onNavigate('search')}
              >
                BUSCAR
              </xds-button>
            </div>

            <div className="portal-hero__suggestions">
              <xds-text variant="body" as="span" weight="medium">Sugestões:</xds-text>
              <xds-button
                kind="ghost"
                size="sm"
                className="portal-hero__suggestion-btn"
                onClick={() => handleSuggestion('2ª via de conta')}
              >
                2ª via de conta
              </xds-button>
              <xds-button
                kind="ghost"
                size="sm"
                className="portal-hero__suggestion-btn"
                onClick={() => handleSuggestion('Vacinação')}
              >
                Vacinação
              </xds-button>
              <xds-button
                kind="ghost"
                size="sm"
                className="portal-hero__suggestion-btn"
                onClick={() => handleSuggestion('Concursos')}
              >
                Concursos
              </xds-button>
            </div>
          </div>
        </section>

        <section className="portal-home-section portal-home-section--featured-surface">
          <div className="portal-shell">
            <div className="portal-section__header">
              <div>
                <xds-text variant="h2" as="h2" className="portal-section__title">Serviços em Destaque</xds-text>
                <div className="portal-section__accent" />
              </div>
              <xds-button kind="ghost" size="md" onClick={() => onNavigate('search')}>
                Ver todos
                <xds-icon slot="icon" name="arrow_forward" size="sm"></xds-icon>
              </xds-button>
            </div>

            <div className="portal-featured-grid">
              {FEATURED.map((item) => (
                <xds-quick-service-card
                  key={item.title}
                  className={`portal-featured-card portal-featured-card--${item.iconColor}`}
                  title={item.title}
                  description={item.desc}
                  onClick={() => onNavigate('search')}
                >
                  <xds-icon
                    slot="icon"
                    name={item.icon}
                    size="md"
                  ></xds-icon>
                </xds-quick-service-card>
              ))}
            </div>
          </div>
        </section>

        <section className="portal-home-section">
          <div className="portal-shell">
            <div className="portal-section__header">
              <div>
                <xds-text variant="h2" as="h2" className="portal-section__title">Últimas Notícias</xds-text>
                <div className="portal-section__accent portal-section__accent--green" />
              </div>
              <xds-button
                kind="ghost"
                size="md"
                className="portal-news-section__cta"
                onClick={() => onNavigate('news')}
              >
                Acompanhar notícias
                <xds-icon slot="icon" name="arrow_forward" size="sm"></xds-icon>
              </xds-button>
            </div>

            <div className="portal-news-grid">
              {NEWS.map((item, index) => (
                <xds-news-card
                  key={`${item.title}-${index}`}
                  title={item.title}
                  description={item.summary}
                  category={item.category.toUpperCase()}
                  date={item.date}
                  image={item.image}
                  onClick={() => onNavigate('news')}
                ></xds-news-card>
              ))}
            </div>
          </div>
        </section>

        <section className="portal-home-section portal-home-section--cta">
          <div className="portal-shell">
            <xds-card className="portal-cta-card" padding="lg">
              <div className="portal-cta-card__content">
                <xds-text variant="h1" as="h2" className="portal-cta-card__title">
                  Acesse tudo pelo celular
                </xds-text>
                <xds-text variant="body" as="p" className="portal-cta-card__text">
                  Baixe o aplicativo Governo Digital e tenha acesso a todos os
                  serviços essenciais na palma da sua mão.
                </xds-text>
                <div className="portal-cta-card__stores">
                  <xds-button kind="primary" size="lg" icon-position="left" className="portal-store-btn">
                    <xds-icon slot="icon" name="apple" size="md"></xds-icon>
                    <span className="portal-store-btn__label">
                      <small>DISPONÍVEL NA</small>
                      <strong>App Store</strong>
                    </span>
                  </xds-button>
                  <xds-button kind="primary" size="lg" icon-position="left" className="portal-store-btn">
                    <xds-icon slot="icon" name="android" size="md"></xds-icon>
                    <span className="portal-store-btn__label">
                      <small>DISPONÍVEL NO</small>
                      <strong>Google Play</strong>
                    </span>
                  </xds-button>
                </div>
              </div>

              <div className="portal-phone-mock" aria-hidden="true">
                <div className="portal-phone-mock__notch" />
                <div className="portal-phone-mock__screen">
                  <div className="portal-phone-mock__line" />
                  <div className="portal-phone-mock__line portal-phone-mock__line--sm" />
                  <div className="portal-phone-mock__blocks">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </xds-card>
          </div>
        </section>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
