export default function CalloutPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-callout</span>
        <h1 className="pg-title">Callout</h1>
        <p className="pg-desc">Bloco informativo contextual com variação semântica</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 700 }}>
          <xds-callout>Certidões devem estar legíveis e sem rasuras.</xds-callout>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 700 }}>
          <xds-callout kind="warning">Certidões devem estar legíveis e sem rasuras.</xds-callout>
          <xds-callout kind="info">Preencha todos os campos antes de avançar.</xds-callout>
          <xds-callout kind="success">Documento enviado com sucesso.</xds-callout>
          <xds-callout kind="danger">Não foi possível processar o arquivo. Tente novamente.</xds-callout>
          <xds-callout kind="neutral">Esta seção está em fase de revisão.</xds-callout>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com conteúdo rico</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 760 }}>
          <xds-callout kind="info">
            <strong>Atenção:</strong> O prazo para envio dos documentos é <strong>15 de abril</strong>.
          </xds-callout>

          <xds-callout kind="warning">
            <p style={{ margin: '0 0 8px 0' }}>Os seguintes itens precisam de atenção:</p>
            <ul style={{ margin: 0, paddingInlineStart: '1.25rem' }}>
              <li>RG ou CNH frente e verso</li>
              <li>Comprovante de residência recente</li>
              <li>Certidão de nascimento ou casamento</li>
            </ul>
          </xds-callout>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com ação</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 760 }}>
          <xds-callout kind="info">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <xds-text variant="h3" as="strong" style={{ color: 'inherit' }}>Consulta pública</xds-text>
              <xds-text variant="body-sm" style={{ color: 'inherit' }}>
                O edital completo e os detalhes do projeto estão disponíveis até 30 de maio.
              </xds-text>
              <div style={{ marginTop: 4 }}>
                <xds-button kind="primary" size="md">Acessar edital</xds-button>
              </div>
            </div>
          </xds-callout>
        </div>
      </div>
    </>
  );
}
