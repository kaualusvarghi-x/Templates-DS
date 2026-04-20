import { useEffect, useRef, useState } from 'react';

type BreadcrumbClickDetail = {
  href?: string;
  text?: string;
};

export default function BreadcrumbPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [lastClick, setLastClick] = useState('Nenhum clique ainda');

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onItemClick = (event: Event) => {
      const detail = (event as CustomEvent<BreadcrumbClickDetail>).detail ?? {};
      const href = detail.href ?? 'sem href';
      const text = detail.text ?? 'item';
      setLastClick(`${text} (${href})`);
    };

    root.addEventListener('xds-breadcrumb-item-click', onItemClick as EventListener);
    return () => {
      root.removeEventListener('xds-breadcrumb-item-click', onItemClick as EventListener);
    };
  }, []);

  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-breadcrumb · xds-breadcrumb-item</span>
        <h1 className="pg-title">Breadcrumb</h1>
        <p className="pg-desc">Navegação hierárquica · página atual · item desabilitado · link externo</p>
      </div>

      <div ref={rootRef}>
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
          <div className="pg-canvas pg-canvas--column">
            <xds-breadcrumb>
              <xds-breadcrumb-item href="/">Início</xds-breadcrumb-item>
              <xds-breadcrumb-item href="/catalogo">Catálogo</xds-breadcrumb-item>
              <xds-breadcrumb-item is-current-page>Atual</xds-breadcrumb-item>
            </xds-breadcrumb>
            <xds-text variant="caption">Último clique: {lastClick}</xds-text>
          </div>
        </div>
      </div>
    </>
  );
}
