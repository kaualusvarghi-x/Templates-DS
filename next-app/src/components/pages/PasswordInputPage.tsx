export default function PasswordInputPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-password-input</span>
        <h1 className="pg-title">Password Input</h1>
        <p className="pg-desc">Demonstração SSR para campo de senha</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variações</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-password-input label-text="Senha" placeholder="Digite sua senha" />
          <xds-password-input label-text="Confirmar senha" />
          <xds-password-input label-text="Com erro" invalid invalid-text="As senhas não conferem" />
          <xds-password-input label-text="Desabilitado" disabled value="123456" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas">
          <xds-password-input-skeleton />
        </div>
      </div>
    </div>
  );
}
