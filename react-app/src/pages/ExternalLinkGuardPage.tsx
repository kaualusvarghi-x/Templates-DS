export default function ExternalLinkGuardPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-external-link-guard</span>
        <h1 className="pg-title">External Link Guard</h1>
        <p className="pg-desc">Intercepta links externos em xds-button e exibe confirmação</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start' }}>
          <xds-external-link-guard>
            <span slot="title">Você está saindo do portal</span>
            <span slot="description">Você será redirecionado para um site externo. Deseja continuar?</span>
            <span slot="confirm-label">Continuar</span>
            <span slot="cancel-label">Voltar</span>
          </xds-external-link-guard>

          <xds-button href="https://portal.demo-aws.xvia.com.br/">Acessar site externo</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Mesma aba (target self)</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start' }}>
          <xds-external-link-guard target="_self">
            <span slot="title">Saída do portal</span>
            <span slot="description">O redirecionamento será na mesma aba.</span>
          </xds-external-link-guard>

          <xds-button href="https://portal.demo-aws.xvia.com.br/">Acessar na mesma aba</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Texto customizado</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start' }}>
          <xds-external-link-guard>
            <span slot="title">Acesso ao sistema externo</span>
            <span slot="description">
              Você será redirecionado para o sistema de agendamento da Secretaria de Saúde.
            </span>
            <span slot="confirm-label">Ir para o sistema</span>
            <span slot="cancel-label">Cancelar</span>
          </xds-external-link-guard>

          <xds-button href="https://portal.demo-aws.xvia.com.br/app/catalog/carta-de-servicos">Carta de serviços</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Múltiplos botões</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start', gap: 12 }}>
          <xds-external-link-guard>
            <span slot="title">Você está saindo do portal</span>
            <span slot="description">Este link pertence a um domínio externo.</span>
          </xds-external-link-guard>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <xds-button href="https://google.com">Google</xds-button>
            <xds-button href="https://portal.demo-aws.xvia.com.br/app/catalog">Catálogo externo</xds-button>
            <xds-button href="/" kind="secondary">Link interno</xds-button>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Exibir domínio</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start', gap: 12 }}>
          <xds-external-link-guard show-hostname>
            <span slot="title">Você está saindo do portal</span>
            <span slot="description">Você será redirecionado para um site externo. Deseja continuar?</span>
          </xds-external-link-guard>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <xds-button href="https://google.com">Google</xds-button>
            <xds-button href="https://portal.demo-aws.xvia.com.br/app/catalog">Catálogo externo</xds-button>
          </div>
        </div>
      </div>
    </>
  );
}
