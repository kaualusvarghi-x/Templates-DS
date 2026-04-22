const emptyStateStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  textAlign: 'center' as const,
  border: '2px dashed var(--color-border, #e2e8f0)',
  borderRadius: 'var(--radius-lg, 12px)',
  padding: '48px 32px',
};

export default function EmptyStatePage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">recipe · xds-icon · xds-text · xds-button</span>
        <h1 className="pg-title">Empty State</h1>
        <p className="pg-desc">Composição de peças XDS — não é um componente próprio</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão — busca sem resultado</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <div style={emptyStateStyle}>
            <xds-icon name="search_off" size="xl" style={{ color: 'var(--color-text-muted)' }} />
            <xds-text variant="body" as="strong">Nenhum serviço encontrado</xds-text>
            <xds-text variant="body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Tente buscar com outros termos ou limpe os filtros.
            </xds-text>
            <xds-button kind="tertiary" size="sm" style={{ marginTop: 8 }}>Limpar Filtros</xds-button>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Sem ação</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <div style={emptyStateStyle}>
            <xds-icon name="inbox" size="xl" style={{ color: 'var(--color-text-muted)' }} />
            <xds-text variant="body" as="strong">Nenhum resultado encontrado</xds-text>
            <xds-text variant="body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Não há itens para exibir no momento.
            </xds-text>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Contextos de uso</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <div style={emptyStateStyle}>
            <xds-icon name="notifications_none" size="xl" style={{ color: 'var(--color-text-muted)' }} />
            <xds-text variant="body" as="strong">Nenhuma notificação</xds-text>
            <xds-text variant="body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Você está em dia. Novas notificações aparecerão aqui.
            </xds-text>
          </div>

          <div style={emptyStateStyle}>
            <xds-icon name="upload_file" size="xl" style={{ color: 'var(--color-text-muted)' }} />
            <xds-text variant="body" as="strong">Nenhum documento enviado</xds-text>
            <xds-text variant="body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Adicione documentos para iniciar sua solicitação.
            </xds-text>
            <xds-button kind="primary" size="sm" style={{ marginTop: 8 }}>Enviar Documento</xds-button>
          </div>

          <div style={emptyStateStyle}>
            <xds-icon name="shopping_cart" size="xl" style={{ color: 'var(--color-text-muted)' }} />
            <xds-text variant="body" as="strong">Carrinho vazio</xds-text>
            <xds-text variant="body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Adicione serviços ao carrinho para continuar.
            </xds-text>
            <xds-button kind="primary" size="sm" style={{ marginTop: 8 }}>Explorar Serviços</xds-button>
          </div>
        </div>
      </div>
    </>
  );
}
