export default function LoadingPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-loading</span>
        <h1 className="pg-title">Loading</h1>
        <p className="pg-desc">Spinner ativo/inativo · tamanhos · descrição · ícone · overlay</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas" style={{ justifyContent: 'center' }}>
          <xds-loading active description="Carregando..." assistive-text="Carregando" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Estados — active e inactive</div>
        <div className="pg-canvas" style={{ alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-text variant="caption">active</xds-text>
            <xds-loading active description="Ativo" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-text variant="caption">inactive</xds-text>
            <xds-loading inactive description="Inativo" />
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — padrão e small</div>
        <div className="pg-canvas" style={{ alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-text variant="caption">padrão (88px)</xds-text>
            <xds-loading description="Processando..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-text variant="caption">small (32px)</xds-text>
            <xds-loading small description="Processando..." />
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com descrição</div>
        <div className="pg-canvas">
          <xds-loading description="Enviando documentos..." />
          <xds-loading description="Processando sua solicitação" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com ícone</div>
        <div className="pg-canvas">
          <xds-loading description="Sincronizando">
            <xds-icon slot="icon" name="sync" size="lg" />
          </xds-loading>
          <xds-loading description="Salvando">
            <xds-icon slot="icon" name="save" size="lg" />
          </xds-loading>
          <xds-loading description="Buscando">
            <xds-icon slot="icon" name="search" size="lg" />
          </xds-loading>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Overlay</div>
        <div
          className="pg-canvas pg-canvas--column"
          style={{
            width: '100%',
            border: '1px dashed var(--color-border)',
            borderRadius: 8,
            minHeight: 240,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: 16 }}>
            <xds-text variant="label">Conteúdo da página</xds-text>
            <xds-text variant="body-sm">
              O overlay cobre toda a área deste contêiner, simulando o bloqueio da viewport.
            </xds-text>
          </div>

          <xds-loading
            active
            description="Carregando conteúdo..."
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </>
  );
}
