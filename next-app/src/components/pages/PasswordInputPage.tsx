export default function PasswordInputPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-password-input</span>
        <h1 className="pg-title">Password Input</h1>
        <p className="pg-desc">Campo de senha com toggle show/hide · tamanhos · estados · skeleton</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão — toggle exibir/ocultar senha</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input label="Senha" placeholder="Digite sua senha" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <xds-password-input key={size} label={size} placeholder="Digite sua senha" size={size} />
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com helper text — requisitos da senha</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input label="Nova senha" placeholder="Mínimo 8 caracteres" helper-text="Mínimo de 8 caracteres, letras e números." value="minhasenha123" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Estados de validação — invalid / warn</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input label="Inválido" placeholder="Digite sua senha" invalid invalid-text="A senha é obrigatória." />
          <xds-password-input label="Aviso" warn warn-text="A senha não atende aos requisitos mínimos." value="1234" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Desabilitado — disabled / readonly</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input label="Desabilitado" placeholder="Digite sua senha" disabled />
          <xds-password-input label="Somente leitura" readonly value="••••••••" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton — placeholder de carregamento</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input-skeleton />
        </div>
      </div>
    </div>
  );
}
