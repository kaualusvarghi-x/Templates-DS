export default function SearchPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-search</span>
        <h1 className="pg-title">Search</h1>
        <p className="pg-desc">Variações visuais, tamanhos, expandable, disabled e skeleton</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920 }}>
          <xds-search
            label="Busca de serviços"
            placeholder="Buscar serviço..."
            radius="pill"
            shadow
          ></xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com botão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920, gap: 16 }}>
          <xds-search
            label="Busca de serviços"
            placeholder="O que você procura hoje?"
            radius="pill"
            shadow
          >
            <xds-button slot="action" kind="primary">BUSCAR</xds-button>
          </xds-search>

          <xds-search
            label="Busca de serviços"
            placeholder="O que você procura hoje?"
            radius="rounded"
            shadow
          >
            <xds-button slot="action" kind="primary">BUSCAR</xds-button>
          </xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com ícone assistivo</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920 }}>
          <xds-search
            label="Busca de serviços"
            placeholder="Buscar serviços..."
            radius="pill"
            shadow
          >
            <xds-icon-button slot="action" kind="ghost" label-text="Ação assistiva">
              <xds-icon slot="icon" name="sparkles" size="sm"></xds-icon>
            </xds-icon-button>
          </xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variações visuais</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920, gap: 16 }}>
          <xds-search placeholder="O que você procura hoje?" radius="pill" shadow>
            <xds-button slot="action" kind="primary">BUSCAR</xds-button>
          </xds-search>

          <xds-search placeholder="Buscar serviços..." radius="pill" shadow>
            <xds-icon-button slot="action" kind="ghost" label-text="IA">
              <xds-icon slot="icon" name="sparkles" size="sm"></xds-icon>
            </xds-icon-button>
          </xds-search>

          <xds-search
            placeholder="Busque por dúvidas (ex: Como recuperar senha)"
            radius="pill"
          ></xds-search>

          <xds-search
            placeholder="Buscar por nome ou sigla..."
            radius="rounded"
          ></xds-search>

          <xds-search
            size="sm"
            placeholder="Buscar serviço..."
            radius="square"
          ></xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920, gap: 16 }}>
          <xds-search size="lg" placeholder="Buscar serviço... (size=lg)" radius="pill" shadow></xds-search>
          <xds-search size="md" placeholder="Buscar serviço... (size=md)" radius="pill" shadow></xds-search>
          <xds-search size="sm" placeholder="Buscar serviço... (size=sm)" radius="pill" shadow></xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Expandable</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920 }}>
          <xds-search
            label="Busca expansível"
            placeholder="Clique na lupa para expandir"
            size="md"
            radius="rounded"
            expandable
          ></xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Desabilitado</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920, gap: 12 }}>
          <xds-search placeholder="Buscar..." radius="pill" disabled></xds-search>

          <xds-search placeholder="Buscar..." radius="pill" disabled>
            <xds-button slot="action" kind="primary" disabled>BUSCAR</xds-button>
          </xds-search>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 920, gap: 12 }}>
          <xds-search-skeleton size="lg"></xds-search-skeleton>
          <xds-search-skeleton size="md"></xds-search-skeleton>
          <xds-search-skeleton size="sm"></xds-search-skeleton>
        </div>
      </div>
    </>
  );
}
