import { useEffect, useRef, useState } from 'react';

type XdsPaginationChangeDetail = { page: number; previousPage: number };

type XdsPaginationElement = HTMLElementTagNameMap['xds-pagination'];

export default function PaginationPage() {
  const [page, setPage] = useState(2);
  const controlledRef = useRef<XdsPaginationElement>(null);

  useEffect(() => {
    const el = controlledRef.current;
    if (!el) return;

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<XdsPaginationChangeDetail>).detail;
      setPage(detail.page);
    };

    el.addEventListener('xds-pagination-changed', onChange);
    return () => el.removeEventListener('xds-pagination-changed', onChange);
  }, []);

  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-pagination</span>
        <h1 className="pg-title">Pagination</h1>
        <p className="pg-desc">Navegação de páginas · total-pages ou total-items · disabled</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas">
          <xds-pagination page={2} total-pages={3} />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Navegação — primeira, intermediária e última página</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 14 }}>
          <xds-pagination page={1} total-pages={3} />
          <xds-pagination page={2} total-pages={3} />
          <xds-pagination page={3} total-pages={3} />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Muitas páginas (com reticências)</div>
        <div className="pg-canvas">
          <xds-pagination page={5} total-pages={20} max-visible-pages={5} />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Calculado via total-items + page-size</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 10 }}>
          <xds-pagination page={1} total-items={103} page-size={10} />
          <xds-text variant="caption">103 itens / 10 por página = 11 páginas</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Desabilitado</div>
        <div className="pg-canvas">
          <xds-pagination page={2} total-pages={5} disabled />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Controlado com evento xds-pagination-changed</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 10 }}>
          <xds-pagination ref={controlledRef} page={page} total-pages={7} />
          <xds-text variant="caption">Página selecionada: {page}</xds-text>
        </div>
      </div>
    </>
  );
}
