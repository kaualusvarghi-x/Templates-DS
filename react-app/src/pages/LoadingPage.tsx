export default function LoadingPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-loading</span>
        <h1 className="pg-title">Loading</h1>
        <p className="pg-desc">spinner · progress bar · skeleton · fullscreen com mensagens rotativas</p>
      </div>
      <div className="pg-wip">
        <span className="material-icons-round">construction</span>
        <p>Em desenvolvimento — Onda 4</p>
        <p className="pg-wip__detail">Variantes: <code>spinner</code> · <code>progress</code> · <code>skeleton</code> · <code>fullscreen</code></p>
      </div>
    </>
  );
}
