const ICON_NAMES = ['search', 'notifications', 'help_outline', 'settings', 'check_circle', 'warning'] as const;

export default function IconPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-icon</span>
        <h1 className="pg-title">Icon</h1>
        <p className="pg-desc">Catálogo SSR de ícones, variantes e animações declarativas</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Catálogo</div>
        <div className="pg-canvas" style={{ flexWrap: 'wrap', gap: 24 }}>
          {ICON_NAMES.map((name) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <xds-icon name={name} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes e animações</div>
        <div className="pg-canvas" style={{ gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          <xds-icon name="store" variant="circle" color="primary" />
          <xds-icon name="store" variant="square" color="info" />
          <xds-icon name="refresh-cw" animation="spin" />
          <xds-icon name="bell" animation="pulse" />
          <xds-icon name="arrow-right" animation="slide-right" />
        </div>
      </div>
    </div>
  );
}
