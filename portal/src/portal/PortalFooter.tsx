interface PortalFooterProps {
  onNavigate?: (view: string) => void;
}

export default function PortalFooter({ onNavigate }: PortalFooterProps) {
  return (
    <footer className="portal-footer">
      <div className="portal-shell portal-footer__content">
        <div className="portal-footer__brand">
          <xds-text variant="h3" as="p" className="portal-footer__brand-title">
            <xds-icon name="account_balance" size="sm"></xds-icon>
            Portal Gov
          </xds-text>
          <xds-text variant="body" as="p" className="portal-footer__brand-text">
            Transformando a relação entre o Estado e o Cidadão através da inovação digital e transparência total.
          </xds-text>
          <div className="portal-footer__socials">
            <xds-icon-button kind="ghost" icon="facebook" tooltip-text="Facebook"></xds-icon-button>
            <xds-icon-button kind="ghost" icon="photo_camera" tooltip-text="Instagram"></xds-icon-button>
            <xds-icon-button kind="ghost" icon="youtube" tooltip-text="YouTube"></xds-icon-button>
          </div>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Acesso rápido</xds-text>
          <ul>
            <li><xds-button kind="ghost" size="md" onClick={() => onNavigate?.('landing')}>Início</xds-button></li>
            <li><xds-button kind="ghost" size="md" onClick={() => onNavigate?.('search')}>Todos os Serviços</xds-button></li>
            <li><xds-button kind="ghost" size="md" onClick={() => onNavigate?.('dashboard')}>Área do Cidadão</xds-button></li>
            <li><xds-button kind="ghost" size="md">Privacidade</xds-button></li>
          </ul>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Transparência</xds-text>
          <ul>
            <li><xds-button kind="ghost" size="md">Diário Oficial</xds-button></li>
            <li><xds-button kind="ghost" size="md">Dados Abertos</xds-button></li>
            <li><xds-button kind="ghost" size="md">Licitações</xds-button></li>
            <li><xds-button kind="ghost" size="md">Concursos</xds-button></li>
          </ul>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Contato</xds-text>
          <ul>
            <li><xds-button kind="ghost" size="md">Fale Conosco</xds-button></li>
            <li><xds-button kind="ghost" size="md">Ouvidoria</xds-button></li>
            <li><xds-button kind="ghost" size="md">Perguntas Frequentes</xds-button></li>
            <li><xds-button kind="ghost" size="md">Suporte Técnico</xds-button></li>
          </ul>
        </div>
      </div>

      <div className="portal-shell portal-footer__bottom">
        <xds-text variant="caption" as="p">© 2024 Portal de Serviços Públicos - Todos os direitos reservados.</xds-text>
        <div className="portal-footer__bottom-links">
          <xds-button kind="ghost" size="sm">Termos de Uso</xds-button>
          <xds-button kind="ghost" size="sm">LGPD</xds-button>
          <xds-button kind="ghost" size="sm">Mapa do Site</xds-button>
        </div>
      </div>
    </footer>
  );
}
