import Link from 'next/link';

const COMPONENTS = [
  { id: 'button', name: 'Button', tag: 'xds-button', count: 'kinds · sizes · icon · loading · skeleton', done: true },
  { id: 'icon', name: 'Icon', tag: 'xds-icon', count: 'catálogo · animações · slot', done: true },
  { id: 'icon-button', name: 'Icon Button', tag: 'xds-icon-button', count: 'kinds · sizes · tooltip · disabled', done: true },
  { id: 'text', name: 'Text', tag: 'xds-text', count: 'variantes · as · weight · truncate', done: true },
  { id: 'divider', name: 'Divider', tag: 'xds-divider', count: 'horizontal · vertical · label', done: true },
  { id: 'tag', name: 'Tag', tag: 'xds-tag', count: '5 variantes de status', done: true },
  { id: 'callout', name: 'Callout', tag: 'xds-callout', count: 'variantes · conteúdo rico · ação', done: true },
  { id: 'avatar', name: 'Avatar', tag: 'xds-avatar', count: 'imagem · iniciais · badge · action', done: true },
  { id: 'breadcrumb', name: 'Breadcrumb', tag: 'xds-breadcrumb', count: 'níveis · current page · disabled · links', done: true },
  { id: 'tooltip', name: 'Tooltip', tag: 'xds-tooltip', count: 'posições · auto-align · delays', done: true },
  { id: 'input', name: 'Input', tag: 'xds-input', count: 'tamanhos · states · helper · skeleton', done: true },
  { id: 'password-input', name: 'Password Input', tag: 'xds-password-input', count: 'toggle · states · helper · skeleton', done: true },
  { id: 'select', name: 'Select', tag: 'xds-select', count: 'grupos · ghost · skeleton', done: true },
  { id: 'checkbox', name: 'Checkbox', tag: 'xds-checkbox', count: 'estados · validação · group', done: true },
  { id: 'accordion', name: 'Accordion', tag: 'xds-accordion', count: 'flush · exclusive · skeleton', done: true },
  { id: 'progress-bar', name: 'Progress Bar', tag: 'xds-progress-bar', count: 'variant · status · size · label', done: true },
  { id: 'pagination', name: 'Pagination', tag: 'xds-pagination', count: 'navegação · total-items · disabled', done: true },
  { id: 'loading', name: 'Loading', tag: 'xds-loading', count: 'active · size · descrição · ícone · overlay', done: true },
  { id: 'toast', name: 'Toast + Toaster', tag: 'xds-toast / xds-toaster', count: 'types · stack · descrição · duração', done: true },
  { id: 'modal', name: 'Modal', tag: 'xds-modal', count: 'sizes · label · scroll · sem footer', done: true },
  { id: 'external-link-guard', name: 'External Link Guard', tag: 'xds-external-link-guard', count: 'target · slots · multi-botões', done: true },
  { id: 'search', name: 'Search', tag: 'xds-search', count: '5 variações · expandable · disabled · skeleton', done: true },
  { id: 'card', name: 'Card', tag: 'xds-card / xds-news-card / xds-quick-service-card / xds-service-card', count: 'base · news · quick service · service', done: true },
] as const;

export default function HomePage() {
  const visible = [...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const total = COMPONENTS.length;
  const doneCount = COMPONENTS.filter((c) => c.done).length;

  return (
    <div className="ds-home">
      <h1 className="ds-home__title">Xvia Design System</h1>
      <p className="ds-home__sub">Web Components · host Next SSR · renderização no servidor</p>

      <div className="ds-home__progress">
        <div className="ds-home__progress-bar">
          <div className="ds-home__progress-fill" style={{ width: `${(doneCount / total) * 100}%` }} />
        </div>
        <span className="ds-home__progress-label">{doneCount} de {total} componentes implementados</span>
      </div>

      <div className="ds-home__grid">
        {visible.map((c) => (
          <Link key={c.id} className="ds-home__card" href={`/${c.id}`} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <div className="ds-home__card-top">
              <span className="ds-home__card-tag">{c.tag}</span>
              <span className="ds-home__card-status status-done">Implementado</span>
            </div>
            <span className="ds-home__card-name">{c.name}</span>
            <span className="ds-home__card-count">{c.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
