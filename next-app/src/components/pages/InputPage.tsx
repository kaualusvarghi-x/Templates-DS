export default function InputPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-input</span>
        <h1 className="pg-title">Input</h1>
        <p className="pg-desc">Demonstração SSR com estados visuais</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Estados</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-input label-text="Nome" placeholder="Digite seu nome" />
          <xds-input label-text="E-mail" type="email" value="contato@exemplo.gov.br" />
          <xds-input label-text="Com erro" invalid invalid-text="Campo obrigatório" />
          <xds-input label-text="Com aviso" warn warn-text="Confira o conteúdo informado" />
          <xds-input label-text="Desabilitado" disabled value="valor bloqueado" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas">
          <xds-input-skeleton />
          <xds-input-skeleton />
        </div>
      </div>
    </div>
  );
}
