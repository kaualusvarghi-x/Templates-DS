export default function ProgressBarPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-progress-bar</span>
        <h1 className="pg-title">Progress Bar</h1>
        <p className="pg-desc">Indicador de progresso com variantes steps e percentage</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-progress-bar value={60} max={100} />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes — default · steps · percentage</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420, gap: 18 }}>
          <xds-progress-bar value={60} max={100} variant="default" />
          <xds-progress-bar value={2} max={4} variant="steps" />
          <xds-progress-bar value={75} max={100} variant="percentage" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Status — active · finished · error</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420, gap: 18 }}>
          <xds-progress-bar value={2} max={4} variant="steps" status="active" />
          <xds-progress-bar value={4} max={4} variant="steps" status="finished" />
          <xds-progress-bar value={2} max={4} variant="steps" status="error" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm · lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420, gap: 18 }}>
          <xds-progress-bar value={60} max={100} variant="percentage" size="sm" />
          <xds-progress-bar value={60} max={100} variant="percentage" size="lg" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com label e step-label custom</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 500, gap: 18 }}>
          <xds-progress-bar value={2} max={4} variant="steps" label="Progresso da solicitação" />
          <xds-progress-bar value={3} max={5} step-label="Fase 3 de 5" />
          <xds-progress-bar value={1} max={3} step-label="Documento 1 de 3 enviado" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Caso portal</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 500, gap: 18 }}>
          <xds-progress-bar value={2} max={4} variant="steps" size="lg" />
        </div>
      </div>
    </>
  );
}
