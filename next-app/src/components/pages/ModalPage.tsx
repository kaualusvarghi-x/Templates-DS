export default function ModalPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-modal</span>
        <h1 className="pg-title">Modal</h1>
        <p className="pg-desc">Demonstração SSR da estrutura do modal</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Exemplo aberto no SSR</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-modal open size="md" heading="Confirmação" label="Ação sensível">
            <p>Este conteúdo foi renderizado no servidor e hidratado no cliente.</p>
            <xds-button slot="footer" kind="secondary">Cancelar</xds-button>
            <xds-button slot="footer" kind="primary">Confirmar</xds-button>
          </xds-modal>
        </div>
      </div>
    </div>
  );
}
