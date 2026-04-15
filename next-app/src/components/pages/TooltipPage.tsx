
export default function TooltipPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-tooltip</span>
        <h1 className="pg-title">Tooltip</h1>
        <p className="pg-desc">Texto auxiliar em hover/focus · 4 posições · HTML rico · delays configuráveis</p>
      </div>

      {/* ── Posições ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Posição — top (padrão)</div>
        <div className="pg-canvas">
          <xds-tooltip position="top">
            <xds-button kind="" >Hover aqui</xds-button>
            <xds-tooltip-content id="content">Tooltip no topo</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Posição — bottom</div>
        <div className="pg-canvas">
          <xds-tooltip position="bottom">
            <xds-button kind="secondary">Hover aqui</xds-button>
            <xds-tooltip-content>Tooltip abaixo</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Posição — left</div>
        <div className="pg-canvas">
          <xds-tooltip position="left">
            <xds-button kind="secondary">Hover aqui</xds-button>
            <xds-tooltip-content>Tooltip à esquerda</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Posição — right</div>
        <div className="pg-canvas">
          <xds-tooltip position="right">
            <xds-button kind="secondary">Hover aqui</xds-button>
            <xds-tooltip-content>Tooltip à direita</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── Comparação — todas as posições ───────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Comparação — todas as posições</div>
        <div className="pg-canvas" style={{ gap: '2rem', flexWrap: 'wrap' }}>
          {(['top', 'bottom', 'left', 'right'] as const).map((pos) => (
            <xds-tooltip key={pos} position={pos}>
              <xds-button kind="tertiary" size="sm">{pos}</xds-button>
              <xds-tooltip-content>position="{pos}"</xds-tooltip-content>
            </xds-tooltip>
          ))}
        </div>
      </div>

      {/* ── Conteúdo rico (HTML) ──────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Conteúdo rico — HTML dentro do tooltip</div>
        <div className="pg-canvas" style={{ gap: '2rem' }}>
          <xds-tooltip position="bottom">
            <xds-button kind="secondary">Com ícone</xds-button>
            <xds-tooltip-content>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span className="material-icons-round" style={{ fontSize: 14 }}>info</span>
                Campo obrigatório
              </span>
            </xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="bottom">
            <xds-button kind="secondary">Com formatação</xds-button>
            <xds-tooltip-content>
              <span>
                Último acesso: <strong>hoje às 14h32</strong>
              </span>
            </xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="bottom">
            <xds-button kind="secondary">Multi-linha</xds-button>
            <xds-tooltip-content>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <strong>Atenção</strong>
                <span>Este campo aceita apenas números.</span>
              </span>
            </xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── Triggers — sobre qualquer elemento ───────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Trigger — sobre diferentes elementos</div>
        <div className="pg-canvas" style={{ gap: '2rem', flexWrap: 'wrap' }}>
          <xds-tooltip position="top">
            <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Botão nativo</button>
            <xds-tooltip-content>Funciona sobre botão nativo</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top">
            <span
              className="material-icons-round"
              style={{ fontSize: 24, cursor: 'pointer', color: 'var(--color-primary)' }}
              tabIndex={0}
            >
              help_outline
            </span>
            <xds-tooltip-content>Dica de acessibilidade</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top">
            <xds-button kind="primary" icon="settings" />
            <xds-tooltip-content>Configurações</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── auto-align ───────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">auto-align — reposicionamento automático por colisão com viewport</div>
        <p className="pg-desc" style={{ marginBottom: '1rem', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Com <code>auto-align</code>, o tooltip detecta quando não há espaço na direção preferida e inverte automaticamente.
          Use <code>boundary="#id"</code> para restringir o cálculo a um container específico (ex: excluir a navbar do espaço disponível).
        </p>

        {/* Comparação sem vs com auto-align */}
        <div className="pg-canvas" style={{ gap: '2rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Sem:</span>
            <xds-tooltip position="right">
              <xds-button kind="tertiary" size="sm">right — sem auto-align</xds-button>
              <xds-tooltip-content>Pode ser cortado pela borda esquerda</xds-tooltip-content>
            </xds-tooltip>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Com:</span>
            <xds-tooltip position="right" auto-align>
              <xds-button kind="primary" size="sm">right + auto-align</xds-button>
              <xds-tooltip-content>Flipa para right automaticamente</xds-tooltip-content>
            </xds-tooltip>
          </div>
        </div>

        {/* Com boundary explícito — respeita o container #root */}
        <div className="pg-canvas" style={{ gap: '2rem', flexWrap: 'wrap' }}>
          <xds-tooltip position="left" auto-align boundary="#root">
            <xds-button kind="secondary" size="sm">left + boundary="#root"</xds-button>
            <xds-tooltip-content>Calcula colisão dentro do #root, excluindo a navbar</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top" auto-align boundary="#root">
            <xds-button kind="secondary" size="sm">top + boundary="#root"</xds-button>
            <xds-tooltip-content>Prefere top, flipa para bottom se não couber</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="right" auto-align boundary="#root">
            <xds-button kind="secondary" size="sm">right + boundary="#root"</xds-button>
            <xds-tooltip-content>Prefere right, flipa para left se não couber</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── closeOnActivation ────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">close-on-activation — fecha ao clicar / Enter / Space</div>
        <div className="pg-canvas" style={{ gap: '2rem' }}>
          <xds-tooltip position="top" close-on-activation>
            <xds-button kind="secondary">close-on-activation</xds-button>
            <xds-tooltip-content>Fecha ao clicar ou pressionar Enter/Space</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top">
            <xds-button kind="secondary">sem close-on-activation</xds-button>
            <xds-tooltip-content>Permanece aberto ao clicar</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── defaultOpen ──────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">default-open — abre na primeira renderização</div>
        <div className="pg-canvas">
          <xds-tooltip position="bottom" default-open close-on-activation>
            <xds-button kind="secondary">Já aberto</xds-button>
            <xds-tooltip-content>Aberto automaticamente na montagem</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── Delays ───────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Delays — enter-delay-ms · leave-delay-ms</div>
        <div className="pg-canvas" style={{ gap: '2rem', flexWrap: 'wrap' }}>
          <xds-tooltip position="top" enter-delay-ms={0} leave-delay-ms={0}>
            <xds-button kind="secondary" size="sm">Sem delay</xds-button>
            <xds-tooltip-content>enter=0ms · leave=0ms</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top" enter-delay-ms={100} leave-delay-ms={300}>
            <xds-button kind="secondary" size="sm">Padrão</xds-button>
            <xds-tooltip-content>enter=100ms · leave=300ms (padrão)</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top" enter-delay-ms={600} leave-delay-ms={600}>
            <xds-button kind="secondary" size="sm">Lento</xds-button>
            <xds-tooltip-content>enter=600ms · leave=600ms</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── drop-shadow ──────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">drop-shadow — com e sem sombra</div>
        <div className="pg-canvas" style={{ gap: '2rem' }}>
          <xds-tooltip position="bottom" default-open close-on-activation>
            <xds-button kind="secondary">Com sombra (padrão)</xds-button>
            <xds-tooltip-content>drop-shadow=true</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="bottom" drop-shadow={false} default-open close-on-activation>
            <xds-button kind="secondary">Sem sombra</xds-button>
            <xds-tooltip-content>drop-shadow=false</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── disabled ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">disabled — tooltip suprimido sem remover do DOM</div>
        <div className="pg-canvas" style={{ gap: '2rem' }}>
          <xds-tooltip position="top" disabled>
            <xds-button kind="secondary">Tooltip desabilitado</xds-button>
            <xds-tooltip-content>Este tooltip não aparece</xds-tooltip-content>
          </xds-tooltip>

          <xds-tooltip position="top">
            <xds-button kind="secondary">Tooltip ativo</xds-button>
            <xds-tooltip-content>Este tooltip aparece normalmente</xds-tooltip-content>
          </xds-tooltip>
        </div>
      </div>

      {/* ── Composição — contexto real ────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Composição — barra de ações com tooltips</div>
        <div className="pg-canvas">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.5rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface)',
          }}>
            <xds-tooltip position="top">
              <xds-button kind="ghost" icon="edit" />
              <xds-tooltip-content>Editar</xds-tooltip-content>
            </xds-tooltip>

            <xds-tooltip position="top">
              <xds-button kind="ghost" icon="content_copy" />
              <xds-tooltip-content>Duplicar</xds-tooltip-content>
            </xds-tooltip>

            <xds-tooltip position="top">
              <xds-button kind="danger-ghost" icon="delete" />
              <xds-tooltip-content>Excluir permanentemente</xds-tooltip-content>
            </xds-tooltip>
          </div>
        </div>
      </div>

      {/* ── Composição — campo de formulário com ajuda ────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Composição — label de campo com ícone de ajuda</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <xds-text variant="label">CPF</xds-text>
            <xds-tooltip position="right">
              <span
                className="material-icons-round"
                style={{ fontSize: 16, cursor: 'pointer', color: 'var(--color-text-secondary)' }}
                tabIndex={0}
              >
                help_outline
              </span>
              <xds-tooltip-content>
                <span>Informe o CPF <strong>sem pontos e traços</strong>.</span>
              </xds-tooltip-content>
            </xds-tooltip>
          </div>
          <xds-input placeholder="000.000.000-00" />
        </div>
      </div>
    </>
  );
}
