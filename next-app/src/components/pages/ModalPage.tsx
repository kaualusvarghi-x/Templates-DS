import { ModalVariantTriggers, ModalSizeTriggers, ModalExtrasTriggers } from './ModalControls';

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
        <ModalVariantTriggers />
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos</div>
        <ModalSizeTriggers />
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com label · com scroll · sem footer</div>
        <ModalExtrasTriggers />
      </div>
    </>
  );
}
