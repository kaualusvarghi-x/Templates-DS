export default function TagPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-tag</span>
        <h1 className="pg-title">Tag</h1>
        <p className="pg-desc">Rótulo de status e categorização inline</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão — kind neutral</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-tag>Presencial e Digital</xds-tag>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes — neutral · info · success · warning · danger</div>
        <div className="pg-canvas" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <xds-tag kind="neutral">Presencial e Digital</xds-tag>
          <xds-tag kind="info">Em análise</xds-tag>
          <xds-tag kind="success">Conforme lei 13.460/2017</xds-tag>
          <xds-tag kind="warning">Pendente</xds-tag>
          <xds-tag kind="danger">Vencido</xds-tag>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — metadados de serviço</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 620, gap: 10 }}>
          <xds-text variant="h3">Certidão de Nascimento</xds-text>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <xds-tag kind="info">Digital</xds-tag>
            <xds-tag kind="success">Sem custo</xds-tag>
            <xds-tag kind="warning">Prazo 5 dias úteis</xds-tag>
          </div>
          <xds-text variant="body-sm">Use tags para indicar atributos e status de conteúdo sem poluir o layout.</xds-text>
        </div>
      </div>
    </>
  );
}
