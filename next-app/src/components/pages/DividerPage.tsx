
export default function DividerPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-divider</span>
        <h1 className="pg-title">Divider</h1>
        <p className="pg-desc">Separador visual · orientation · spacing · label</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Orientação — horizontal (padrão)</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-text variant="body">Seção acima do divisor</xds-text>
          <xds-divider orientation="horizontal" />
          <xds-text variant="body">Seção abaixo do divisor</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Orientação — vertical</div>
        <div className="pg-canvas">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <xds-text variant="body">Item A</xds-text>
            <xds-divider orientation="vertical" />
            <xds-text variant="body">Item B</xds-text>
            <xds-divider orientation="vertical" />
            <xds-text variant="body">Item C</xds-text>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Spacing — sm</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-text variant="body">Parágrafo anterior</xds-text>
          <xds-divider orientation="horizontal" spacing="sm" />
          <xds-text variant="body">Parágrafo posterior</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Spacing — md (padrão)</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-text variant="body">Parágrafo anterior</xds-text>
          <xds-divider orientation="horizontal" spacing="md" />
          <xds-text variant="body">Parágrafo posterior</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Spacing — lg</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-text variant="body">Parágrafo anterior</xds-text>
          <xds-divider orientation="horizontal" spacing="lg" />
          <xds-text variant="body">Parágrafo posterior</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Comparação — sm · md · lg</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-text variant="label">spacing="sm"</xds-text>
          <xds-divider orientation="horizontal" spacing="sm" />
          <xds-text variant="label">spacing="md"</xds-text>
          <xds-divider orientation="horizontal" spacing="md" />
          <xds-text variant="label">spacing="lg"</xds-text>
          <xds-divider orientation="horizontal" spacing="lg" />
          <xds-text variant="caption">Fim da comparação</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — formulário com seções</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-text variant="overline">Dados pessoais</xds-text>
          <xds-text variant="body">Nome completo · CPF · Data de nascimento</xds-text>
          <xds-divider orientation="horizontal" spacing="md" />
          <xds-text variant="overline">Endereço</xds-text>
          <xds-text variant="body">Logradouro · Número · Bairro · CEP</xds-text>
          <xds-divider orientation="horizontal" spacing="md" />
          <xds-text variant="overline">Contato</xds-text>
          <xds-text variant="body">E-mail · Telefone</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Label — texto no centro do divisor</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 480 }}>
          <xds-divider label="ou" />
          <xds-divider label="continue com" />
          <xds-divider label="Dados pessoais" />
          <xds-divider label="Seção 1 de 3" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — fluxo de login com label</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-text variant="body">Entrar com Gov.br</xds-text>
          <xds-divider label="ou" spacing="lg" />
          <xds-text variant="body">Entrar com CPF e senha</xds-text>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — fluxo de login com divisor vertical</div>
        <div className="pg-canvas">
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <xds-button kind="secondary">Entrar com Gov.br</xds-button>
            <xds-divider orientation="vertical" spacing="md" />
            <xds-button kind="tertiary">Entrar com CPF e senha</xds-button>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — fluxo de login com divisor vertical e label</div>
        <div className="pg-canvas">
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <xds-button kind="secondary">Entrar com Gov.br</xds-button>
            <xds-divider label="ou" orientation="vertical" spacing="lg" />
            <xds-button kind="tertiary">Entrar com CPF e senha</xds-button>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Composição — barra de ações com divisores verticais</div>
        <div className="pg-canvas">
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface)' }}>
            <xds-text variant="body-sm">Imprimir</xds-text>
            <xds-divider orientation="vertical" spacing="sm" />
            <xds-text variant="body-sm">Compartilhar</xds-text>
            <xds-divider orientation="vertical" spacing="sm" />
            <xds-text variant="body-sm">Exportar PDF</xds-text>
          </div>
        </div>
      </div>
    </>
  );
}
