import { useMemo, useState } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { NotificationItem } from '../data';

interface NotificationsPageProps {
  isLoggedIn: boolean;
  userName: string;
  avatarUrl: string;
  cpf: string;
  notifications: NotificationItem[];
  setNotifications: (n: NotificationItem[]) => void;
  globalSearchTerm: string;
  setGlobalSearchTerm: (v: string) => void;
  onNavigate: (view: string) => void;
  onFontSize: (action: 'increase' | 'decrease') => void;
}

type Tab = 'all' | 'unread';

const TYPE_ICON: Record<
  NotificationItem['type'],
  'settings' | 'sync' | 'info' | 'warning'
> = {
  system: 'settings',
  update: 'sync',
  info: 'info',
  alert: 'warning',
};

const TYPE_ICON_COLOR: Record<
  NotificationItem['type'],
  'info' | 'success' | 'neutral' | 'danger'
> = {
  system: 'info',
  update: 'success',
  info: 'neutral',
  alert: 'danger',
};

export default function NotificationsPage({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  setNotifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
}: NotificationsPageProps) {
  const [tab, setTab] = useState<Tab>('all');

  const list = useMemo(() => {
    if (tab === 'unread') return notifications.filter((n) => !n.read);
    return notifications;
  }, [notifications, tab]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
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
        view="notifications"
      />

      <main className="portal-notifications-main">
        <div className="portal-shell portal-notifications-wrap">
          <xds-breadcrumb no-trailing-slash>
            <xds-breadcrumb-item href="#" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
              Painel
            </xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Notificações</xds-breadcrumb-item>
          </xds-breadcrumb>

          <header className="portal-notifications-head">
            <xds-text variant="h1" as="h1" className="portal-notifications-head__title">Central de Notificações</xds-text>
            <xds-button
              kind="ghost"
              size="sm"
              animation="underline"
              className="portal-notifications-head__mark-all"
              onClick={markAllAsRead}
            >
              Marcar todas como lidas
            </xds-button>
          </header>

          <div className="portal-notifications-tabs" role="tablist" aria-label="Filtros de notificações">
            <xds-button
              kind="ghost"
              size="sm"
              role="tab"
              aria-selected={tab === 'all'}
              className={`portal-notifications-tab${tab === 'all' ? ' is-active' : ''}`}
              onClick={() => setTab('all')}
            >
              Todas
            </xds-button>
            <xds-button
              kind="ghost"
              size="sm"
              role="tab"
              aria-selected={tab === 'unread'}
              className={`portal-notifications-tab${tab === 'unread' ? ' is-active' : ''}`}
              onClick={() => setTab('unread')}
            >
              Não lidas
            </xds-button>
          </div>

          <section className="portal-notifications-list" aria-label="Lista de notificações">
            {list.length > 0 ? (
              list.map((n) => (
                <xds-icon-card
                  key={n.id}
                  className={`portal-notification-card portal-notification-card--${n.type}${!n.read ? ' is-unread' : ''}`}
                  icon-color={TYPE_ICON_COLOR[n.type]}
                >
                  <xds-icon slot="icon" name={TYPE_ICON[n.type]} size="md"></xds-icon>

                  <div className="portal-notification-card__content">
                    <div className="portal-notification-card__title-row">
                      <xds-text variant="h3" as="h2" className="portal-notification-card__title">
                        {n.title}
                        {!n.read && <span aria-hidden="true"> •</span>}
                      </xds-text>
                      <xds-text variant="caption" as="p" className="portal-notification-card__date">{n.date}</xds-text>
                    </div>

                    <xds-text variant="body" as="p" className="portal-notification-card__message">{n.message}</xds-text>

                    <div className="portal-notification-card__actions">
                      {!n.read && (
                        <xds-button
                          kind="ghost"
                          size="sm"
                          className="portal-notification-card__action portal-notification-card__action--primary"
                          onClick={() => markAsRead(n.id)}
                        >
                          Marcar como lida
                        </xds-button>
                      )}
                      <xds-button
                        kind="ghost"
                        size="sm"
                        className="portal-notification-card__action"
                        onClick={() => removeNotification(n.id)}
                      >
                        Excluir
                      </xds-button>
                    </div>
                  </div>
                </xds-icon-card>
              ))
            ) : (
              <xds-card className="portal-notifications-empty" padding="none">
                <div className="portal-notifications-empty__content">
                  <xds-icon className="portal-notifications-empty__icon" name="notifications_off" size="md"></xds-icon>
                  <xds-text variant="body" as="p" className="portal-notifications-empty__text">
                    Nenhuma notificação encontrada.
                  </xds-text>
                </div>
              </xds-card>
            )}
          </section>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
