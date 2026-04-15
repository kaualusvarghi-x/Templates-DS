export default function PaginationPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-pagination</span>
        <h1 className="pg-title">Pagination</h1>
        <p className="pg-desc">Demonstração SSR com configurações visuais</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variações</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 760 }}>
          <xds-pagination page={2} total-pages={10} page-size={10} total-items={100} />
          <xds-pagination page={1} total-pages={5} max-visible-pages={3} />
          <xds-pagination page={4} total-pages={12} backward-text="Anterior" forward-text="Próxima" />
          <xds-pagination page={3} total-pages={8} disabled />
        </div>
      </div>
    </div>
  );
}
