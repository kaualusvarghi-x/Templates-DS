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

const TYPE_KIND: Record<NotificationItem['type'], 'info' | 'success' | 'warning' | 'danger'> = {
  system: 'info',
  update: 'success',
  info: 'warning',
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
            <xds-text variant="h1" as="h1">Central de Notificações</xds-text>
            <xds-button kind="tertiary" size="md" onClick={markAllAsRead}>
              Marcar todas como lidas
            </xds-button>
          </header>

          <div className="portal-notifications-tabs" role="tablist" aria-label="Filtros de notificações">
            <xds-button
              role="tab"
              aria-selected={tab === 'all'}
              kind={tab === 'all' ? 'primary' : 'tertiary'}
              size="md"
              onClick={() => setTab('all')}
            >
              Todas
            </xds-button>
            <xds-button
              role="tab"
              aria-selected={tab === 'unread'}
              kind={tab === 'unread' ? 'primary' : 'tertiary'}
              size="md"
              onClick={() => setTab('unread')}
            >
              Não lidas
            </xds-button>
          </div>

          <section className="portal-notifications-list" aria-label="Lista de notificações">
            {list.length > 0 ? (
              list.map((n) => (
                <xds-card key={n.id} className={`portal-notification-card${!n.read ? ' is-unread' : ''}`}>
                  <div className="portal-notification-card__icon">
                    <xds-icon name={TYPE_ICON[n.type]} size="md" color={TYPE_KIND[n.type]}></xds-icon>
                  </div>

                  <div className="portal-notification-card__content">
                    <xds-text variant="h3" as="h2">
                      {n.title}
                      {!n.read && <span aria-hidden="true"> •</span>}
                    </xds-text>
                    <xds-text variant="body" as="p">{n.message}</xds-text>
                    <div className="portal-notification-card__actions">
                      {!n.read && (
                        <xds-button kind="tertiary" size="sm" onClick={() => markAsRead(n.id)}>
                          Marcar como lida
                        </xds-button>
                      )}
                      <xds-button kind="ghost" size="sm" onClick={() => removeNotification(n.id)}>
                        Excluir
                      </xds-button>
                    </div>
                  </div>

                  <xds-text variant="caption" as="p" className="portal-notification-card__date">{n.date}</xds-text>
                </xds-card>
              ))
            ) : (
              <xds-card className="portal-notifications-empty" padding="lg">
                <xds-text variant="h3" as="h2">Nenhuma notificação encontrada</xds-text>
                <xds-text variant="body" as="p">Não há itens para este filtro.</xds-text>
              </xds-card>
            )}
          </section>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
