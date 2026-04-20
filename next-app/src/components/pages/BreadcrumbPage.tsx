import Script from 'next/script';

export default function BreadcrumbPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-breadcrumb · xds-breadcrumb-item</span>
        <h1 className="pg-title">Breadcrumb</h1>
        <p className="pg-desc">Navegação hierárquica · página atual · item desabilitado · link externo</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/servicos">Serviços</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Detalhes do serviço</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Dois níveis</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Categorias</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Vários níveis</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb>
            <xds-breadcrumb-item href="/">Portal</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/cidadao">Cidadão</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/cidadao/servicos">Serviços</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/cidadao/servicos/saude">Saúde</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Agendamento de consultas</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Página atual + no-trailing-slash</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb no-trailing-slash>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/servicos">Serviços</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Educação</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Item desabilitado</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb no-trailing-slash>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/servicos" disabled>Serviços</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Detalhes</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Link externo (target _blank)</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb no-trailing-slash>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="https://gov.br" target="_blank" rel="noopener noreferrer">
              Portal Gov.br
            </xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Serviço externo</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Todos como links</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/servicos">Serviços</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/servicos/educacao">Educação</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Item único</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-breadcrumb>
            <xds-breadcrumb-item is-current-page>Página atual</xds-breadcrumb-item>
          </xds-breadcrumb>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Evento xds-breadcrumb-item-click</div>
        <div className="pg-canvas pg-canvas--column" id="next-breadcrumb-root">
          <xds-breadcrumb>
            <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
            <xds-breadcrumb-item href="/catalogo">Catálogo</xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Atual</xds-breadcrumb-item>
          </xds-breadcrumb>
          <xds-text variant="caption">Último clique: <span id="next-breadcrumb-last">Nenhum clique ainda</span></xds-text>
        </div>
      </div>

      <Script id="next-breadcrumb-bindings" strategy="afterInteractive">{`
        (() => {
          const root = document.getElementById('next-breadcrumb-root');
          const target = document.getElementById('next-breadcrumb-last');
          if (!root || !target) return;
          root.addEventListener('xds-breadcrumb-item-click', (event) => {
            const detail = event?.detail || {};
            const href = detail.href || 'sem href';
            const text = detail.text || 'item';
            target.textContent = text + ' (' + href + ')';
          });
        })();
      `}</Script>
    </>
  );
}
