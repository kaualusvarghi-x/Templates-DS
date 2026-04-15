import { useRef } from 'react';

type XdsToastElement = HTMLElementTagNameMap['xds-toast'];

type ToastKind = 'success' | 'error' | 'warning' | 'info';

export default function ToastPage() {
  const successRef = useRef<XdsToastElement>(null);
  const errorRef = useRef<XdsToastElement>(null);
  const warningRef = useRef<XdsToastElement>(null);
  const infoRef = useRef<XdsToastElement>(null);

  function pushToToaster(kind: ToastKind, title: string, description?: string, duration = 4000) {
    const api = (window as Window & {
      XviaDS?: {
        toast?: {
          (message: string, options?: { kind?: ToastKind; description?: string; duration?: number }): void;
          success?: (message: string, options?: { description?: string; duration?: number }) => void;
          error?: (message: string, options?: { description?: string; duration?: number }) => void;
          warning?: (message: string, options?: { description?: string; duration?: number }) => void;
          info?: (message: string, options?: { description?: string; duration?: number }) => void;
        };
      };
    }).XviaDS?.toast;

    if (!api) {
      const toaster = document.querySelector('xds-toaster') as
        | (HTMLElement & {
            push?: (message: string, options?: { kind?: ToastKind; description?: string; duration?: number }) => void;
          })
        | null;

      if (toaster?.push) {
        toaster.push(title, { kind, description, duration });
        return;
      }

      console.warn('XviaDS.toast não está disponível e <xds-toaster> não foi encontrado.');
      return;
    }

    if (kind === 'success' && api.success) return api.success(title, { description, duration });
    if (kind === 'error' && api.error) return api.error(title, { description, duration });
    if (kind === 'warning' && api.warning) return api.warning(title, { description, duration });
    if (kind === 'info' && api.info) return api.info(title, { description, duration });

    api(title, { kind, description, duration });
  }

  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-toast · xds-toaster</span>
        <h1 className="pg-title">Toast</h1>
        <p className="pg-desc">Tipos · stack · descrição · duração longa</p>
      </div>

      <xds-toaster max-visible={3} />

      <div className="pg-group">
        <div className="pg-group__label">Disparar toast (xds-toast)</div>
        <div className="pg-canvas">
          <xds-button kind="primary" onClick={() => successRef.current?.show()}>Success</xds-button>
          <xds-button kind="danger" onClick={() => errorRef.current?.show()}>Error</xds-button>
          <xds-button kind="secondary" onClick={() => warningRef.current?.show()}>Warning</xds-button>
          <xds-button kind="tertiary" onClick={() => infoRef.current?.show()}>Info</xds-button>
        </div>
      </div>

      <xds-toast ref={successRef} kind="success" title="Dados salvos com sucesso!" duration={4000}></xds-toast>
      <xds-toast ref={errorRef} kind="error" title="Erro ao processar a solicitação. Tente novamente." duration={4000}></xds-toast>
      <xds-toast ref={warningRef} kind="warning" title="Sessão expirando em 2 minutos." duration={4000}></xds-toast>
      <xds-toast ref={infoRef} kind="info" title="Nova versão do portal disponível para atualização." duration={4000}></xds-toast>

      <div className="pg-group">
        <div className="pg-group__label">Variantes via xds-toaster (XviaDS.toast)</div>
        <div className="pg-canvas">
          <xds-button kind="primary" onClick={() => pushToToaster('success', 'Dados salvos com sucesso')}>success</xds-button>
          <xds-button kind="danger" onClick={() => pushToToaster('error', 'Erro ao processar a solicitação.')}>error</xds-button>
          <xds-button kind="secondary" onClick={() => pushToToaster('warning', 'Sessão expirando em 2 minutos.')}>warning</xds-button>
          <xds-button kind="ghost" onClick={() => pushToToaster('info', 'Nova versão disponível para atualização.')}>info</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Stack — clique várias vezes</div>
        <div className="pg-canvas">
          <xds-button kind="primary" onClick={() => pushToToaster('success', 'Arquivo enviado com sucesso')}>Adicionar success</xds-button>
          <xds-button kind="danger" onClick={() => pushToToaster('error', 'Falha de comunicação com o serviço.')}>Adicionar error</xds-button>
          <xds-button kind="secondary" onClick={() => pushToToaster('warning', 'Sessão expira em 1 minuto.')}>Adicionar warning</xds-button>
          <xds-button kind="ghost" onClick={() => pushToToaster('info', 'Nova mensagem recebida.')}>Adicionar info</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com descrição</div>
        <div className="pg-canvas">
          <xds-button
            kind="primary"
            onClick={() =>
              pushToToaster(
                'success',
                'Evento criado com sucesso.',
                'Domingo, 03 de dezembro de 2023 às 09:00.',
                4000
              )
            }
          >
            Disparar com descrição
          </xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Duração longa (10s)</div>
        <div className="pg-canvas">
          <xds-button
            kind="ghost"
            onClick={() => pushToToaster('info', 'Esta mensagem fica visível por 10 segundos.', undefined, 10000)}
          >
            Disparar toast 10s
          </xds-button>
        </div>
      </div>
    </>
  );
}
