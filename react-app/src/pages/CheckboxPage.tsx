export default function CheckboxPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-checkbox</span>
        <h1 className="pg-title">Checkbox</h1>
        <p className="pg-desc">Seleção única e em grupo · estados · validação · readonly</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-checkbox label-text="Aceito os termos" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Estados — desmarcado · selecionado · indeterminado</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-checkbox label-text="Desmarcado" />
          <xds-checkbox label-text="Selecionado" checked />
          <xds-checkbox label-text="Indeterminado" indeterminate />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Validação — invalid e warn</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-checkbox label-text="Inválido" invalid invalid-text="Este campo é obrigatório." />
          <xds-checkbox label-text="Aviso" warn warn-text="Este campo precisa de atenção." />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Desabilitado e somente leitura</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-checkbox label-text="Desabilitado" disabled />
          <xds-checkbox label-text="Desabilitado selecionado" disabled checked />
          <xds-checkbox label-text="Somente leitura" readonly checked />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Grupo vertical</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 500 }}>
          <xds-checkbox-group legend-text="Grupo de checkboxes">
            <xds-checkbox label-text="Opção 1" checked />
            <xds-checkbox label-text="Opção 2" />
            <xds-checkbox label-text="Opção 3" />
          </xds-checkbox-group>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Grupo horizontal</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 700 }}>
          <xds-checkbox-group legend-text="Grupo horizontal" orientation="horizontal">
            <xds-checkbox label-text="Opção 1" checked />
            <xds-checkbox label-text="Opção 2" />
            <xds-checkbox label-text="Opção 3" />
          </xds-checkbox-group>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Grupo inválido</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 500 }}>
          <xds-checkbox-group legend-text="Grupo inválido" invalid invalid-text="Pelo menos uma opção deve ser selecionada.">
            <xds-checkbox label-text="Opção 1" />
            <xds-checkbox label-text="Opção 2" />
            <xds-checkbox label-text="Opção 3" />
          </xds-checkbox-group>
        </div>
      </div>
    </>
  );
}
