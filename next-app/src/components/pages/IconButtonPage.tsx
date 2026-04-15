
export default function IconButtonPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-icon-button</span>
        <h1 className="pg-title">Icon Button</h1>
        <p className="pg-desc">Botão circular com ícone, tooltip e variações visuais</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-icon-button kind="primary" size="md" icon="search" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes</div>
        <div className="pg-canvas" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <xds-icon-button kind="primary" icon="search" />
          <xds-icon-button kind="secondary" icon="settings" />
          <xds-icon-button kind="tertiary" icon="pencil" />
          <xds-icon-button kind="ghost" icon="share-2" />
          <xds-icon-button kind="danger" icon="trash-2" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          <xds-icon-button size="sm" icon="search" />
          <xds-icon-button size="md" icon="search" />
          <xds-icon-button size="lg" icon="search" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com tooltip</div>
        <div className="pg-canvas" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <xds-icon-button kind="primary" icon="search" tooltip-text="Buscar" tooltip-align="bottom" />
          <xds-icon-button kind="ghost" icon="settings" tooltip-text="Configurações" tooltip-align="top" />
          <xds-icon-button kind="danger" icon="trash-2" tooltip-text="Excluir" tooltip-align="right" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Desabilitado</div>
        <div className="pg-canvas" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <xds-icon-button disabled kind="primary" icon="search" />
          <xds-icon-button disabled kind="secondary" icon="settings" />
          <xds-icon-button disabled kind="danger" icon="trash-2" />
        </div>
      </div>
    </>
  );
}
