import Script from 'next/script';

export default function ToastPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-toast / xds-toaster</span>
        <h1 className="pg-title">Toast + Toaster</h1>
        <p className="pg-desc">Tipos · stack · descrição · duração longa</p>
      </div>

      <xds-toaster max-visible={3}></xds-toaster>

      <div className="pg-group">
        <div className="pg-group__label">Disparar toast (xds-toast)</div>
        <div className="pg-canvas">
          <xds-button kind="primary" id="next-toast-success">Success</xds-button>
          <xds-button kind="danger" id="next-toast-error">Error</xds-button>
          <xds-button kind="secondary" id="next-toast-warning">Warning</xds-button>
          <xds-button kind="tertiary" id="next-toast-info">Info</xds-button>
        </div>
      </div>

      <xds-toast id="next-inline-success" kind="success" title="Dados salvos com sucesso!" duration={4000}></xds-toast>
      <xds-toast id="next-inline-error" kind="error" title="Erro ao processar a solicitação. Tente novamente." duration={4000}></xds-toast>
      <xds-toast id="next-inline-warning" kind="warning" title="Sessão expirando em 2 minutos." duration={4000}></xds-toast>
      <xds-toast id="next-inline-info" kind="info" title="Nova versão do portal disponível para atualização." duration={4000}></xds-toast>

      <div className="pg-group">
        <div className="pg-group__label">Variantes via xds-toaster (XviaDS.toast)</div>
        <div className="pg-canvas">
          <xds-button kind="primary" id="next-api-success">success</xds-button>
          <xds-button kind="danger" id="next-api-error">error</xds-button>
          <xds-button kind="secondary" id="next-api-warning">warning</xds-button>
          <xds-button kind="ghost" id="next-api-info">info</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Stack — clique várias vezes</div>
        <div className="pg-canvas">
          <xds-button kind="primary" id="next-stack-success">Adicionar success</xds-button>
          <xds-button kind="danger" id="next-stack-error">Adicionar error</xds-button>
          <xds-button kind="secondary" id="next-stack-warning">Adicionar warning</xds-button>
          <xds-button kind="ghost" id="next-stack-info">Adicionar info</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com descrição</div>
        <div className="pg-canvas">
          <xds-button kind="primary" id="next-desc">
            Disparar com descrição
          </xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Duração longa (10s)</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 640 }}>
          <xds-button kind="ghost" id="next-10s">
            Disparar toast 10s
          </xds-button>
        </div>
      </div>

      <Script id="next-toast-bindings" strategy="afterInteractive">{`
        (() => {
          const byId = (id) => document.getElementById(id);
          const bind = (id, fn) => {
            const el = byId(id);
            if (!el) return;
            el.addEventListener('click', fn);
          };

          const emit = (kind, title, description, duration = 4000) => {
            const toastApi = window.XviaDS?.toast;
            if (toastApi) {
              if (kind === 'success' && toastApi.success) return toastApi.success(title, { description, duration });
              if (kind === 'error' && toastApi.error) return toastApi.error(title, { description, duration });
              if (kind === 'warning' && toastApi.warning) return toastApi.warning(title, { description, duration });
              if (kind === 'info' && toastApi.info) return toastApi.info(title, { description, duration });
              return toastApi(title, { kind, description, duration });
            }

            const toaster = document.querySelector('xds-toaster');
            if (toaster?.push) {
              toaster.push(title, { kind, description, duration });
            }
          };

          bind('next-toast-success', () => byId('next-inline-success')?.show?.());
          bind('next-toast-error', () => byId('next-inline-error')?.show?.());
          bind('next-toast-warning', () => byId('next-inline-warning')?.show?.());
          bind('next-toast-info', () => byId('next-inline-info')?.show?.());

          bind('next-api-success', () => emit('success', 'Dados salvos com sucesso!'));
          bind('next-api-error', () => emit('error', 'Erro ao processar a solicitação. Tente novamente.'));
          bind('next-api-warning', () => emit('warning', 'Sessão expirando em 2 minutos.'));
          bind('next-api-info', () => emit('info', 'Nova versão do portal disponível para atualização.'));

          bind('next-stack-success', () => emit('success', 'Arquivo enviado com sucesso'));
          bind('next-stack-error', () => emit('error', 'Falha de comunicação com o serviço.'));
          bind('next-stack-warning', () => emit('warning', 'Sessão expira em 1 minuto.'));
          bind('next-stack-info', () => emit('info', 'Nova mensagem recebida.'));

          bind('next-desc', () => emit('success', 'Evento criado com sucesso.', 'Domingo, 03 de dezembro de 2023 às 09:00.', 4000));
          bind('next-10s', () => emit('info', 'Esta mensagem fica visível por 10 segundos.', undefined, 10000));
        })();
      `}</Script>
    </div>
  );
}
