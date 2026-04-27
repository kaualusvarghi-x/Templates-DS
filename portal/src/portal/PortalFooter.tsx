import { EXTERNAL_LINKS } from './externalLinks';

interface PortalFooterProps {
  onNavigate?: (view: string) => void;
}

export default function PortalFooter({ onNavigate }: PortalFooterProps) {
  return (
    <footer className="portal-footer">
      <div className="portal-shell portal-footer__content">
        <div className="portal-footer__brand">
          <xds-text variant="label" as="p" className="portal-footer__brand-title">
            <xds-icon name="account_balance" size="sm"></xds-icon>
            Portal Gov
          </xds-text>
          <xds-text variant="body-sm" as="p" className="portal-footer__brand-text">
            Transformando a relação entre o Estado e o Cidadão através da inovação digital e transparência total.
          </xds-text>
          <div className="portal-footer__socials">
            <xds-icon-button className="portal-footer__social-btn" kind="ghost" icon="facebook" tooltip-text="Facebook"></xds-icon-button>
            <xds-icon-button className="portal-footer__social-btn" kind="ghost" icon="photo_camera" tooltip-text="Instagram"></xds-icon-button>
            <xds-icon-button className="portal-footer__social-btn" kind="ghost" icon="youtube" tooltip-text="YouTube"></xds-icon-button>
          </div>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Acesso rápido</xds-text>
          <ul>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline" onClick={() => onNavigate?.('landing')}>Início</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline" onClick={() => onNavigate?.('search')}>Todos os Serviços</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline" onClick={() => onNavigate?.('dashboard')}>Área do Cidadão</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Privacidade</xds-button></li>
          </ul>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Transparência</xds-text>
          <ul>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Diário Oficial</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Dados Abertos</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Licitações</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Concursos</xds-button></li>
          </ul>
        </div>

        <div>
          <xds-text variant="label" as="h4" className="portal-footer__title">Contato</xds-text>
          <ul>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Fale Conosco</xds-button></li>
            <li>
              <xds-button
                className="portal-footer__link"
                kind="ghost"
                size="sm"
                animation="underline"
                href={EXTERNAL_LINKS.ouvidoria}
                target="_blank"
              >
                Ouvidoria
              </xds-button>
            </li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Perguntas Frequentes</xds-button></li>
            <li><xds-button className="portal-footer__link" kind="ghost" size="sm" animation="underline">Suporte Técnico</xds-button></li>
          </ul>
        </div>
      </div>

      <div className="portal-shell portal-footer__bottom">
        <xds-text variant="caption" as="p">© 2024 Portal de Serviços Públicos - Todos os direitos reservados.</xds-text>
        <div className="portal-footer__bottom-links">
          <xds-button className="portal-footer__link portal-footer__link--meta" kind="ghost" size="sm" animation="underline">Termos de Uso</xds-button>
          <xds-button className="portal-footer__link portal-footer__link--meta" kind="ghost" size="sm" animation="underline">LGPD</xds-button>
          <xds-button className="portal-footer__link portal-footer__link--meta" kind="ghost" size="sm" animation="underline">Mapa do Site</xds-button>
        </div>
      </div>
    </footer>
  );
}
