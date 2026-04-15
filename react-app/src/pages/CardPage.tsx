export default function CardPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-card</span>
        <h1 className="pg-title">Card</h1>
        <p className="pg-desc">Container de conteúdo · variante hoverable · 5 sub-elementos</p>
      </div>
      <div className="pg-wip">
        <span className="material-icons-round">construction</span>
        <p>Em desenvolvimento — Onda 4</p>
        <p className="pg-wip__detail">Sub-elementos: <code>xds-card-header</code> · <code>xds-card-title</code> · <code>xds-card-description</code> · <code>xds-card-content</code> · <code>xds-card-footer</code></p>
      </div>
    </>
  );
}
