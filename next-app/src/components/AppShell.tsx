import Link from 'next/link';
import { NAV_ITEMS, type PageId } from '@/lib/navigation';

type AppShellProps = {
  children: React.ReactNode;
  currentPage?: PageId | 'home';
};

export default function AppShell({ children, currentPage = 'home' }: AppShellProps) {
  const sortedNavItems = [...NAV_ITEMS].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <>
      <nav className="ds-nav">
        <div className="ds-nav__header">
          <div className="ds-nav__logo-row">
            <Link className="ds-nav__logo" href="/" style={{ cursor: 'pointer' }}>
              Xvia<span>DS</span>
              <div className="ds-nav__logo-sub">Design System</div>
            </Link>
          </div>

          <div className="ds-nav__theme-row">
            <div className="ds-nav__theme">
              <div className="ds-nav__theme-toggle" title="SSR mode (Server Component)">
                <span className="ds-nav__theme-dot" style={{ backgroundColor: '#FFFFFF' }} />
                <span className="ds-nav__theme-label">SSR Mode</span>
                <span className="material-icons-round">dns</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ds-nav__body">
          <div className="ds-nav__group">Componentes</div>
          {sortedNavItems.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={`ds-nav__item${currentPage === item.id ? ' ds-nav__item--active' : ''}${!item.done ? ' ds-nav__item--wip' : ''}`}
            >
              <span className="material-icons-round" style={{ fontSize: 14 }}>{item.icon}</span>
              {item.name}
              <span className={`ds-nav__item-dot ${item.done ? 'ds-nav__item-dot--done' : 'ds-nav__item-dot--wip'}`} title={item.done ? 'Implementado' : 'Em desenvolvimento'} />
            </Link>
          ))}
        </div>
      </nav>

      <main className="ds-main">
        <div className="ds-content">
          {children}
        </div>
      </main>
    </>
  );
}
