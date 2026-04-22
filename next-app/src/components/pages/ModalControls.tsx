'use client';

import { useRef } from 'react';

type XdsModalEl = HTMLElement & { open: boolean };

function useModalRef() {
  return useRef<XdsModalEl>(null);
}

function openModal(ref: React.RefObject<XdsModalEl | null>) {
  if (ref.current) ref.current.open = true;
}

export function ModalVariantTriggers() {
  const confirmRef = useModalRef();
  const dangerRef  = useModalRef();
  const successRef = useModalRef();

  return (
    <>
      <div className="pg-canvas">
        <xds-button kind="tertiary" onClick={() => openModal(confirmRef)}>Confirmação</xds-button>
        <xds-button kind="danger"   onClick={() => openModal(dangerRef)}>Destrutivo</xds-button>
        <xds-button kind="primary"  onClick={() => openModal(successRef)}>Sucesso</xds-button>
      </div>

      <xds-modal ref={confirmRef} size="sm">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Confirmar ação</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body>
          <p>Você tem certeza que deseja continuar? Esta ação pode afetar seus dados cadastrados.</p>
        </xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="primary">Confirmar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={dangerRef} size="sm" alert>
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Excluir documento</xds-modal-heading>
          <xds-modal-label>Ação irreversível</xds-modal-label>
        </xds-modal-header>
        <xds-modal-body>
          <p>Esta ação é irreversível. O documento será permanentemente excluído.</p>
        </xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="danger">Excluir</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={successRef} size="sm">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Solicitação enviada</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body>
          <p>Sua solicitação foi enviada com sucesso. Você receberá confirmação por e-mail.</p>
        </xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="primary" data-modal-close>Entendido</xds-button>
        </xds-modal-footer>
      </xds-modal>
    </>
  );
}

export function ModalSizeTriggers() {
  const sizeXsRef = useModalRef();
  const sizeSmRef = useModalRef();
  const sizeMdRef = useModalRef();
  const sizeLgRef = useModalRef();

  return (
    <>
      <div className="pg-canvas">
        <xds-button size="sm" kind="tertiary" onClick={() => openModal(sizeXsRef)}>xs</xds-button>
        <xds-button size="sm" kind="tertiary" onClick={() => openModal(sizeSmRef)}>sm</xds-button>
        <xds-button size="sm" kind="tertiary" onClick={() => openModal(sizeMdRef)}>md</xds-button>
        <xds-button size="sm" kind="tertiary" onClick={() => openModal(sizeLgRef)}>lg</xds-button>
      </div>

      <xds-modal ref={sizeXsRef} size="xs">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Modal xs</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body><p>Exemplo de tamanho xs.</p></xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="primary">Confirmar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={sizeSmRef} size="sm">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Modal sm</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body><p>Exemplo de tamanho sm.</p></xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="primary">Confirmar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={sizeMdRef} size="md">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Modal md</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body><p>Exemplo de tamanho md.</p></xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="primary">Confirmar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={sizeLgRef} size="lg">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Modal lg</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body><p>Exemplo de tamanho lg com mais área útil.</p></xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Cancelar</xds-button>
          <xds-button kind="primary">Confirmar</xds-button>
        </xds-modal-footer>
      </xds-modal>
    </>
  );
}

export function ModalExtrasTriggers() {
  const labelRef    = useModalRef();
  const scrollRef   = useModalRef();
  const noFooterRef = useModalRef();

  return (
    <>
      <div className="pg-canvas">
        <xds-button kind="secondary" onClick={() => openModal(labelRef)}>Com label</xds-button>
        <xds-button kind="secondary" onClick={() => openModal(scrollRef)}>Com scroll</xds-button>
        <xds-button kind="secondary" onClick={() => openModal(noFooterRef)}>Sem footer</xds-button>
      </div>

      <xds-modal ref={labelRef} size="sm">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Termos de uso</xds-modal-heading>
          <xds-modal-label>Leia com atenção</xds-modal-label>
        </xds-modal-header>
        <xds-modal-body>
          <p>Ao continuar, você concorda com os termos de uso da plataforma.</p>
        </xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Recusar</xds-button>
          <xds-button kind="primary">Aceitar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={scrollRef} size="sm">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Com scroll</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body has-scrolling-content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </xds-modal-body>
        <xds-modal-footer>
          <xds-button kind="secondary" data-modal-close>Recusar</xds-button>
          <xds-button kind="primary">Aceitar</xds-button>
        </xds-modal-footer>
      </xds-modal>

      <xds-modal ref={noFooterRef} size="xs">
        <xds-modal-header>
          <xds-modal-close-button></xds-modal-close-button>
          <xds-modal-heading>Informação</xds-modal-heading>
        </xds-modal-header>
        <xds-modal-body>
          <p>Seu cadastro foi realizado com sucesso. Você receberá confirmação por e-mail.</p>
        </xds-modal-body>
      </xds-modal>
    </>
  );
}
