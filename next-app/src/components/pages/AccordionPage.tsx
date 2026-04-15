export default function AccordionPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-accordion</span>
        <h1 className="pg-title">Accordion</h1>
        <p className="pg-desc">Demonstração SSR com itens estáticos</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Default</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 700 }}>
          <xds-accordion>
            <xds-accordion-item title="O que é o portal de serviços?">
              O portal centraliza acesso a serviços digitais para cidadãos e empresas.
            </xds-accordion-item>
            <xds-accordion-item title="Como recuperar minha senha?">
              Use a opção de recuperação na tela de autenticação e siga o fluxo de validação.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>
    </div>
  );
}
