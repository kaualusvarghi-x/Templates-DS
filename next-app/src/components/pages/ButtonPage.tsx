export default function ButtonPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-button</span>
        <h1 className="pg-title">Button</h1>
        <p className="pg-desc">Demonstração SSR com variantes e tamanhos</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-button>Primary</xds-button>
          <xds-button kind="secondary">Secondary</xds-button>
          <xds-button kind="tertiary">Tertiary</xds-button>
          <xds-button kind="ghost">Ghost</xds-button>
          <xds-button kind="danger">Danger</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-button size="sm">sm</xds-button>
          <xds-button size="md">md</xds-button>
          <xds-button size="lg">lg</xds-button>
          <xds-button size="xl">xl</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com ícone e badge</div>
        <div className="pg-canvas">
          <xds-button>
            Salvar
            <xds-icon slot="icon" name="save" size="sm" />
          </xds-button>
          <xds-button kind="ghost">
            <xds-icon slot="icon" name="bell" size="sm" />
            <xds-badge-indicator count={3} color="error" />
          </xds-button>
        </div>
      </div>
    </div>
  );
}
