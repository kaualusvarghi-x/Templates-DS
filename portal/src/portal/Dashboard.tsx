import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { MOCK_SERVICES, NotificationItem } from '../data';

interface DashboardProps {
  userName: string;
  avatarUrl: string;
  cpf: string;
  notifications: NotificationItem[];
  setNotifications: (n: NotificationItem[]) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  globalSearchTerm: string;
  setGlobalSearchTerm: (v: string) => void;
  onNavigate: (view: string) => void;
  onFontSize: (action: 'increase' | 'decrease') => void;
  onLogout: () => void;
}

export default function Dashboard({
  userName,
  avatarUrl,
  cpf,
  notifications,
  favorites,
  toggleFavorite,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
  onLogout,
}: DashboardProps) {
  const unread = notifications.filter((n) => !n.read).length;
  const favoriteServices = MOCK_SERVICES.filter((s) => favorites.includes(s.id)).slice(0, 2);
  const visibleNotifications = notifications.slice(0, 3);
  const highlightedNotificationId =
    visibleNotifications.find((n) => !n.read)?.id ?? visibleNotifications[0]?.id;

  const firstName = userName.split(' ')[0];

  return (
    <div className="portal-page portal-page--public">
      <PortalHeader
        isLoggedIn
        userName={userName}
        avatarUrl={avatarUrl}
        cpf={cpf}
        notifications={notifications}
        globalSearchTerm={globalSearchTerm}
        setGlobalSearchTerm={setGlobalSearchTerm}
        onNavigate={onNavigate}
        onFontSize={onFontSize}
        view="dashboard"
      />

      <main className="portal-dashboard-v2">
        <div className="portal-shell">
          <header className="portal-dashboard-v2__hero">
            <div>
              <xds-text variant="h1" as="h1">Olá, {firstName}! <span aria-hidden="true">👋</span></xds-text>
              <xds-text variant="h2" as="p" weight="regular">Bem-vindo ao seu painel. O que você deseja fazer hoje?</xds-text>
            </div>
            <xds-button kind="tertiary" size="md" className="portal-dashboard-v2__guide">
              <xds-icon slot="icon" name="help" size="sm"></xds-icon>
              Guia do Painel
            </xds-button>
          </header>

          <div className="portal-dashboard-v2__grid">
            <section className="portal-dashboard-v2__main">
              <xds-card className="portal-d-card portal-d-card--requests" padding="md">
                <header className="portal-d-card__head portal-d-card__head--requests">
                  <xds-text variant="h3" as="h2" className="portal-d-card__title--requests">
                    <xds-icon name="account_balance" size="md" className="portal-d-card__title-icon"></xds-icon>
                    Solicitações em Andamento
                  </xds-text>
                  <xds-button
                    kind="ghost"
                    size="md"
                    animation="underline"
                    className="portal-d-card__view-all"
                    onClick={() => onNavigate('search')}
                  >
                    Ver todas
                  </xds-button>
                </header>

                <div className="portal-d-request" onClick={() => onNavigate('search')}>
                  <div className="portal-d-request__top">
                    <div>
                      <xds-text variant="h3" as="h3" className="portal-d-request__title">Carteira do Estudante 2024</xds-text>
                      <xds-text variant="body-sm" as="p" className="portal-d-request__protocol">Protocolo: #20240502-8812</xds-text>
                    </div>
                    <xds-tag kind="warning" className="portal-d-request__status">EM ANÁLISE</xds-tag>
                  </div>

                  <div className="portal-d-request__update">
                    <xds-text variant="body-sm" as="p" weight="semibold" className="portal-d-request__update-label">
                      <xds-icon name="info" size="sm" className="portal-d-request__update-icon"></xds-icon>
                      Última Atualização:
                    </xds-text>
                    <xds-text variant="body-sm" as="p" className="portal-d-request__update-text">
                      Documentação em revisão pela secretaria de educação.
                    </xds-text>
                  </div>

                  <xds-progress-bar
                    className="portal-d-request__progress"
                    variant="steps"
                    value={2}
                    max={4}
                    step-label="Etapa 2 de 4"
                    size="sm"
                    label="Andamento da solicitação"
                  ></xds-progress-bar>
                </div>
              </xds-card>

              <section className="portal-dashboard-v2__favorites">
                <xds-text variant="h2" as="h2" className="portal-dashboard-v2__favorites-title">
                  <xds-icon
                    name="star"
                    size="md"
                    color="warning"
                    className="portal-dashboard-v2__favorites-star"
                  ></xds-icon>
                  Serviços Favoritos
                </xds-text>

                <div className="portal-dashboard-v2__favorites-grid">
                  {favoriteServices.map((item) => (
                    <xds-card key={item.id} className="portal-d-fav-card" interactive>
                      <xds-icon-button
                        className="portal-d-fav-card__remove"
                        kind="ghost"
                        size="sm"
                        icon="close"
                        tooltip-text="Remover dos favoritos"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                      ></xds-icon-button>

                      <div className="portal-d-fav-card__content">
                        <div className="portal-d-fav-card__icon">
                          <xds-icon name={item.icon ?? 'star'} size="md" className="portal-d-fav-card__glyph"></xds-icon>
                        </div>

                        <xds-text variant="h3" as="h3" align="center" className="portal-d-fav-card__title">{item.title}</xds-text>
                        <xds-text
                          variant="caption"
                          as="p"
                          align="center"
                          transform="uppercase"
                          className="portal-d-fav-card__meta"
                        >
                          Acesso rápido
                        </xds-text>
                      </div>
                    </xds-card>
                  ))}

                  <xds-action-card
                    className="portal-d-fav-add"
                    label="Adicionar"
                    onClick={() => onNavigate('search')}
                  ></xds-action-card>
                </div>
              </section>

              <div className="portal-dashboard-v2__promo-row">
                <xds-card className="portal-d-promo portal-d-promo--docs" onClick={() => onNavigate('search')}>
                  <div className="portal-d-promo__content">
                    <xds-text variant="h2" as="h3" className="portal-d-promo__title">Seus Documentos Digitais</xds-text>
                    <xds-text variant="body" as="p" className="portal-d-promo__text">Acesse sua CNH, RG e Título de Eleitor em um só lugar.</xds-text>
                    <xds-button kind="primary" size="md" className="portal-d-promo__btn portal-d-promo__btn--docs">Ver Documentação</xds-button>
                  </div>
                  <xds-icon name="badge" size="lg" className="portal-d-promo__icon"></xds-icon>
                </xds-card>

                <xds-card className="portal-d-promo portal-d-promo--vehicle" onClick={() => onNavigate('search')}>
                  <div className="portal-d-promo__content">
                    <xds-text variant="h2" as="h3" className="portal-d-promo__title">Meus Veículos</xds-text>
                    <xds-text variant="body" as="p" className="portal-d-promo__text">Consulte IPVA, licenciamento e multas dos seus veículos.</xds-text>
                    <xds-button kind="tertiary" size="md" className="portal-d-promo__btn portal-d-promo__btn--vehicle">Gerenciar Veículos</xds-button>
                  </div>
                  <xds-icon name="directions_car" size="lg" className="portal-d-promo__icon"></xds-icon>
                </xds-card>
              </div>
            </section>

            <aside className="portal-dashboard-v2__side">
              <xds-card className="portal-d-card--notifications" padding="none">
                <header className="portal-d-notif-head">
                  <xds-text variant="h3" as="h2" className="portal-d-notif-head__title">
                    <xds-icon name="notifications_active" size="md" className="portal-d-notif-head__icon"></xds-icon>
                    Notificações
                  </xds-text>
                  {unread > 0 && <span className="portal-d-badge">{unread} Novas</span>}
                </header>

                <div className="portal-d-notif-list">
                  {visibleNotifications.map((n) => (
                    <xds-button
                      key={n.id}
                      kind="ghost"
                      size="sm"
                      full-width
                      className={`portal-d-notif-item${n.id === highlightedNotificationId ? ' is-highlighted' : ''}`}
                      onClick={() => onNavigate('notifications')}
                    >
                      <span className="portal-d-notif-item__content">
                        <xds-text variant="meta" as="p" className="portal-d-notif-item__meta">{n.type.toUpperCase()} • {n.date.toUpperCase()}</xds-text>
                        <xds-text variant="h3" as="h3" className="portal-d-notif-item__title">{n.title}</xds-text>
                        <xds-text variant="body-sm" as="p" className="portal-d-notif-item__message">{n.message}</xds-text>
                      </span>
                    </xds-button>
                  ))}
                </div>

                <xds-button
                  className="portal-d-notif__all"
                  kind="ghost"
                  size="md"
                  full-width
                  onClick={() => onNavigate('notifications')}
                >
                  Ver todas as notificações
                </xds-button>
              </xds-card>

              <xds-card className="portal-d-card" padding="md">
                <xds-text variant="h3" as="h3" className="portal-d-side-title">
                  <xds-icon className="portal-d-side-title-icon" name="settings" size="md"></xds-icon>
                  Acesso Rápido
                </xds-text>

                <nav className="portal-d-side-nav">
                  <xds-button kind="ghost" size="sm" full-width icon-position="right" onClick={() => onNavigate('search')}>
                    <xds-text variant="body-sm" as="span">Meus Dados</xds-text>
                    <xds-icon slot="icon" name="chevron_right" size="sm"></xds-icon>
                  </xds-button>
                  <xds-button kind="ghost" size="sm" full-width icon-position="right" onClick={() => onNavigate('search')}>
                    <xds-text variant="body-sm" as="span">Privacidade & Senha</xds-text>
                    <xds-icon slot="icon" name="chevron_right" size="sm"></xds-icon>
                  </xds-button>
                  <xds-button kind="ghost" size="sm" full-width icon-position="right" onClick={() => onNavigate('search')}>
                    <xds-text variant="body-sm" as="span">Ajuda e Suporte</xds-text>
                    <xds-icon slot="icon" name="chevron_right" size="sm"></xds-icon>
                  </xds-button>
                </nav>

                <xds-button className="portal-d-logout" kind="danger-ghost" size="md" icon-position="left" full-width onClick={onLogout}>
                  <xds-icon slot="icon" name="logout" size="sm"></xds-icon>
                  Sair com Segurança
                </xds-button>
              </xds-card>
            </aside>
          </div>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
