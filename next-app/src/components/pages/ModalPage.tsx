export default function ModalPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-modal</span>
        <h1 className="pg-title">Modal</h1>
        <p className="pg-desc">confirm · destrutivo · sucesso · tamanhos · label · scroll · sem footer</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes principais</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 18 }}>
          <xds-modal open size="sm">
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Confirmar ação</xds-modal-heading>
            </xds-modal-header>
            <xds-modal-body>
              <p>Você tem certeza que deseja continuar? Esta ação pode afetar seus dados cadastrados.</p>
            </xds-modal-body>
            <xds-modal-footer>
              <xds-button kind="secondary">Cancelar</xds-button>
              <xds-button kind="primary">Confirmar</xds-button>
            </xds-modal-footer>
          </xds-modal>

          <xds-modal open size="sm" alert>
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Excluir documento</xds-modal-heading>
              <xds-modal-label>Ação irreversível</xds-modal-label>
            </xds-modal-header>
            <xds-modal-body>
              <p>Esta ação é irreversível. O documento será permanentemente excluído.</p>
            </xds-modal-body>
            <xds-modal-footer>
              <xds-button kind="secondary">Cancelar</xds-button>
              <xds-button kind="danger">Excluir</xds-button>
            </xds-modal-footer>
          </xds-modal>

          <xds-modal open size="sm">
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Solicitação enviada</xds-modal-heading>
            </xds-modal-header>
            <xds-modal-body>
              <p>Sua solicitação foi enviada com sucesso. Você receberá confirmação por e-mail.</p>
            </xds-modal-body>
            <xds-modal-footer>
              <xds-button kind="primary">Entendido</xds-button>
            </xds-modal-footer>
          </xds-modal>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 18 }}>
          <xds-modal open size="xs"><xds-modal-header><xds-modal-heading>Modal xs</xds-modal-heading></xds-modal-header><xds-modal-body><p>Exemplo de tamanho xs.</p></xds-modal-body></xds-modal>
          <xds-modal open size="sm"><xds-modal-header><xds-modal-heading>Modal sm</xds-modal-heading></xds-modal-header><xds-modal-body><p>Exemplo de tamanho sm.</p></xds-modal-body></xds-modal>
          <xds-modal open size="md"><xds-modal-header><xds-modal-heading>Modal md</xds-modal-heading></xds-modal-header><xds-modal-body><p>Exemplo de tamanho md.</p></xds-modal-body></xds-modal>
          <xds-modal open size="lg"><xds-modal-header><xds-modal-heading>Modal lg</xds-modal-heading></xds-modal-header><xds-modal-body><p>Exemplo de tamanho lg com mais área útil.</p></xds-modal-body></xds-modal>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com label · com scroll · sem footer</div>
        <div className="pg-canvas pg-canvas--column" style={{ gap: 18 }}>
          <xds-modal open size="sm">
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Termos de uso</xds-modal-heading>
              <xds-modal-label>Leia com atenção</xds-modal-label>
            </xds-modal-header>
            <xds-modal-body><p>Ao continuar, você concorda com os termos de uso da plataforma.</p></xds-modal-body>
            <xds-modal-footer><xds-button kind="secondary">Recusar</xds-button><xds-button kind="primary">Aceitar</xds-button></xds-modal-footer>
          </xds-modal>

          <xds-modal open size="sm">
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Com scroll</xds-modal-heading>
            </xds-modal-header>
            <xds-modal-body has-scrolling-content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
            </xds-modal-body>
            <xds-modal-footer><xds-button kind="secondary">Recusar</xds-button><xds-button kind="primary">Aceitar</xds-button></xds-modal-footer>
          </xds-modal>

          <xds-modal open size="xs">
            <xds-modal-header>
              <xds-modal-close-button></xds-modal-close-button>
              <xds-modal-heading>Informação</xds-modal-heading>
            </xds-modal-header>
            <xds-modal-body><p>Seu cadastro foi realizado com sucesso. Você receberá confirmação por e-mail.</p></xds-modal-body>
          </xds-modal>
        </div>
      </div>
    </>
  );
}
