export default function InputPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-input</span>
        <h1 className="pg-title">Input</h1>
        <p className="pg-desc">Testes, acessibilidade e simulação de fluxo real (SSR)</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Default — editável</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Nome completo" placeholder="Digite seu nome" />
          <xds-input label="E-mail" type="email" placeholder="nome@exemplo.com.br" />
          <xds-input label="Telefone" placeholder="(00) 00000-0000" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <xds-input key={size} label={size} placeholder="Exemplo de campo" size={size} />
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton — placeholder de carregamento</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input-skeleton />
          <xds-input-skeleton />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Readonly</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="CPF (não editável)" value="123.456.789-00" readonly />
          <xds-input label="Número de protocolo" value="2025-004512-SP" readonly />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Disabled</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Data de nascimento" value="01/01/1990" disabled />
          <xds-input label="Número de CPF" value="***.***.***-**" disabled />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Error state</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Nome completo" placeholder="Digite seu nome" invalid invalid-text="Nome é obrigatório" />
          <xds-input label="E-mail" value="email-invalido" invalid invalid-text="Formato de e-mail inválido" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Warn state — warn + warn-text</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Data de vencimento" value="01/2025" warn warn-text="Este documento vence em menos de 30 dias." />
          <xds-input label="Telefone" value="(11) 9999-9999" warn warn-text="Verifique se o DDD está correto para sua região." />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Helper text — instrução abaixo do campo</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="CPF" placeholder="000.000.000-00" helper-text="Digite apenas números — a formatação é automática." />
          <xds-input label="Telefone" placeholder="(00) 00000-0000" helper-text="Informe o DDD seguido do número." />
        </div>
      </div>
    </div>
  );
}
