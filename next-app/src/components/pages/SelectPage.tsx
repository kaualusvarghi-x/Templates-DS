export default function SelectPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-select</span>
        <h1 className="pg-title">Select</h1>
        <p className="pg-desc">Dropdown de seleção · grupos · estados · ghost · skeleton</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Default</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select label-text="Estado" placeholder="Selecione um estado">
            <xds-select-item value="sp">São Paulo</xds-select-item>
            <xds-select-item value="rj">Rio de Janeiro</xds-select-item>
            <xds-select-item value="mg">Minas Gerais</xds-select-item>
            <xds-select-item value="rs">Rio Grande do Sul</xds-select-item>
            <xds-select-item value="ba">Bahia</xds-select-item>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Grupos — xds-select-item-group</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select label-text="Tipo de documento" placeholder="Selecione">
            <xds-select-item-group label-text="Pessoa Física">
              <xds-select-item value="cpf">CPF</xds-select-item>
              <xds-select-item value="rg">RG</xds-select-item>
              <xds-select-item value="cnh">CNH</xds-select-item>
            </xds-select-item-group>
            <xds-select-item-group label-text="Pessoa Jurídica">
              <xds-select-item value="cnpj">CNPJ</xds-select-item>
              <xds-select-item value="ie">Inscrição Estadual</xds-select-item>
            </xds-select-item-group>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <xds-select key={size} label-text={`Tamanho ${size}`} placeholder="Selecione" size={size}>
              <xds-select-item value="a">Opção A</xds-select-item>
              <xds-select-item value="b">Opção B</xds-select-item>
              <xds-select-item value="c">Opção C</xds-select-item>
            </xds-select>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Helper text</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select
            label-text="Categoria"
            placeholder="Selecione uma categoria"
            helper-text="Isso define as opções disponíveis na próxima etapa"
          >
            <xds-select-item value="saude">Saúde</xds-select-item>
            <xds-select-item value="educacao">Educação</xds-select-item>
            <xds-select-item value="assistencia">Assistência Social</xds-select-item>
          </xds-select>
        </div>
      </div>
      <div className="pg-group">
        <div className="pg-group__label">Disabled</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select label-text="Campo desabilitado" value="sp" disabled>
            <xds-select-item value="sp">São Paulo</xds-select-item>
          </xds-select>
          <xds-select label-text="Item desabilitado" placeholder="Selecione">
            <xds-select-item value="a">Opção A</xds-select-item>
            <xds-select-item value="b" disabled>
              Opção B desabilitada
            </xds-select-item>
            <xds-select-item value="c">Opção C</xds-select-item>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Error state — invalid + invalid-text</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select
            label-text="Tipo de serviço"
            placeholder="Selecione"
            invalid
            invalid-text="Campo obrigatório. Selecione um tipo de serviço."
          >
            <xds-select-item value="a">Serviço A</xds-select-item>
            <xds-select-item value="b">Serviço B</xds-select-item>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Warn state — warn + warn-text</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select
            label-text="Região"
            value="norte"
            warn
            warn-text="Esta região tem disponibilidade limitada de serviços."
          >
            <xds-select-item value="norte">Norte</xds-select-item>
            <xds-select-item value="sul">Sul</xds-select-item>
            <xds-select-item value="centro">Centro-Oeste</xds-select-item>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variante ghost</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>Ordenar por:</span>
          <xds-select variant="ghost" value="relevantes">
            <xds-select-item value="relevantes">Mais relevantes</xds-select-item>
            <xds-select-item value="az">A-Z</xds-select-item>
            <xds-select-item value="recentes">Recentes</xds-select-item>
          </xds-select>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 360 }}>
          <xds-select-skeleton />
        </div>
      </div>
    </div>
  );
}
