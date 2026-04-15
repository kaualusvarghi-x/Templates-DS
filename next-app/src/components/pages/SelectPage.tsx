export default function SelectPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-select</span>
        <h1 className="pg-title">Select</h1>
        <p className="pg-desc">Demonstração SSR com opções e grupos</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Default</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-select label-text="Prioridade" placeholder="Selecione">
            <xds-select-item value="baixa" label="Baixa" />
            <xds-select-item value="media" label="Média" selected />
            <xds-select-item value="alta" label="Alta" />
          </xds-select>

          <xds-select label-text="Estados" disabled value="disabled">
            <xds-select-item value="disabled" label="Desabilitado" />
          </xds-select>

          <xds-select label-text="Com grupos">
            <xds-select-item-group label="Brasil">
              <xds-select-item value="sp" label="São Paulo" />
              <xds-select-item value="rj" label="Rio de Janeiro" />
            </xds-select-item-group>
            <xds-select-item-group label="Argentina">
              <xds-select-item value="bue" label="Buenos Aires" />
            </xds-select-item-group>
          </xds-select>
        </div>
      </div>
    </div>
  );
}
