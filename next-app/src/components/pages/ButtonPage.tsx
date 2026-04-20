export default function ButtonPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-button</span>
        <h1 className="pg-title">Button</h1>
        <p className="pg-desc">7 kinds · sizes (sm → 2xl) · radius · ícone · badge · tooltip · disabled · loading · fullwidth · link · type</p>
      </div>

      {/* ── Variantes ── */}
      <div className="pg-group">
        <div className="pg-group__label">Variantes — kind</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-button>Primary (padrão)</xds-button>
          <xds-button kind="secondary">Secondary</xds-button>
          <xds-button kind="tertiary">Tertiary</xds-button>
          <xds-button kind="ghost">Ghost</xds-button>
          <xds-button kind="danger">Danger</xds-button>
          <xds-button kind="danger-tertiary">Danger Tertiary</xds-button>
          <xds-button kind="danger-ghost">Danger Ghost</xds-button>
        </div>
      </div>

      {/* ── Tamanhos ── */}
      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — size</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-button size="sm">sm</xds-button>
          <xds-button size="md">md</xds-button>
          <xds-button>lg (padrão)</xds-button>
          <xds-button size="xl">xl</xds-button>
          <xds-button size="2xl">2xl</xds-button>
        </div>
      </div>

      {/* ── Com ícone ── */}
      <div className="pg-group">
        <div className="pg-group__label">Com ícone — icon-position right (padrão)</div>
        <div className="pg-canvas">
          <xds-button>Salvar<xds-icon slot="icon" name="save" size="sm" /></xds-button>
          <xds-button kind="danger">Excluir<xds-icon slot="icon" name="trash-2" size="sm" /></xds-button>
          <xds-button kind="tertiary">Avançar<xds-icon slot="icon" name="arrow-right" size="sm" /></xds-button>
          <xds-button kind="ghost">Configurar<xds-icon slot="icon" name="settings" size="sm" /></xds-button>
          <xds-button kind="secondary">Download<xds-icon slot="icon" name="download" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Posição do ícone ── */}
      <div className="pg-group">
        <div className="pg-group__label">Posição do ícone — icon-position</div>
        <div className="pg-canvas">
          <xds-button>Ícone à direita<xds-icon slot="icon" name="arrow-right" size="sm" /></xds-button>
          <xds-button icon-position="left">Ícone à esquerda<xds-icon slot="icon" name="arrow-left" size="sm" /></xds-button>
          <xds-button kind="ghost" icon-position="left">Buscar<xds-icon slot="icon" name="search" size="sm" /></xds-button>
          <xds-button kind="tertiary">Excluir<xds-icon slot="icon" name="trash-2" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Apenas ícone ── */}
      <div className="pg-group">
        <div className="pg-group__label">Apenas ícone</div>
        <div className="pg-canvas" style={{ alignItems: 'center' }}>
          <xds-button><xds-icon slot="icon" name="plus" size="sm" /></xds-button>
          <xds-button kind="ghost"><xds-icon slot="icon" name="search" size="sm" /></xds-button>
          <xds-button kind="danger"><xds-icon slot="icon" name="trash-2" size="sm" /></xds-button>
          <xds-button kind="tertiary"><xds-icon slot="icon" name="pencil" size="sm" /></xds-button>
          <xds-button kind="secondary"><xds-icon slot="icon" name="settings" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Com badge ── */}
      <div className="pg-group">
        <div className="pg-group__label">Com badge — count</div>
        <div className="pg-canvas">
          <xds-button kind="ghost">
            <xds-icon slot="icon" name="bell" size="sm" />
            <xds-badge-indicator count={3} color="error" />
          </xds-button>
          <xds-button kind="ghost">
            <xds-icon slot="icon" name="bell" size="sm" />
            <xds-badge-indicator count={111} max={99} color="error" />
          </xds-button>
          <xds-button kind="primary">
            <xds-icon slot="icon" name="mail" size="sm" />
            <xds-badge-indicator count={5} color="primary" />
          </xds-button>
          <xds-button kind="secondary">
            <xds-icon slot="icon" name="shopping-cart" size="sm" />
            <xds-badge-indicator count={221} color="info" />
          </xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Com badge — dot</div>
        <div className="pg-canvas">
          <xds-button kind="ghost">
            <xds-icon slot="icon" name="bell" size="sm" />
            <xds-badge-indicator dot color="error" />
          </xds-button>
          <xds-button kind="ghost">
            <xds-icon slot="icon" name="mail" size="sm" />
            <xds-badge-indicator dot color="primary" />
          </xds-button>
          <xds-button kind="tertiary">
            <xds-icon slot="icon" name="user" size="sm" />
            <xds-badge-indicator dot color="success" />
          </xds-button>
        </div>
      </div>

      {/* ── Tooltip ── */}
      <div className="pg-group">
        <div className="pg-group__label">Com tooltip — tooltip-text</div>
        <div className="pg-canvas">
          <xds-button tooltip-text="Adicionar item"><xds-icon slot="icon" name="plus" size="sm" /></xds-button>
          <xds-button kind="ghost" tooltip-text="Buscar"><xds-icon slot="icon" name="search" size="sm" /></xds-button>
          <xds-button kind="danger" tooltip-text="Excluir permanentemente" tooltip-position="bottom"><xds-icon slot="icon" name="trash-2" size="sm" /></xds-button>
          <xds-button kind="secondary" tooltip-text="Salvar documento">Salvar<xds-icon slot="icon" name="save" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Disabled ── */}
      <div className="pg-group">
        <div className="pg-group__label">Disabled</div>
        <div className="pg-canvas">
          <xds-button disabled>Primary</xds-button>
          <xds-button kind="secondary" disabled>Secondary</xds-button>
          <xds-button kind="tertiary" disabled>Tertiary</xds-button>
          <xds-button kind="ghost" disabled>Ghost</xds-button>
          <xds-button kind="danger" disabled>Danger</xds-button>
          <xds-button kind="danger" disabled>Danger</xds-button>
          <xds-button disabled>Com ícone<xds-icon slot="icon" name="save" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Loading ── */}
      <div className="pg-group">
        <div className="pg-group__label">Loading — sempre ativo</div>
        <div className="pg-canvas">
          <xds-button loading>Salvando...</xds-button>
          <xds-button kind="danger" icon-position="left" loading>Excluindo...</xds-button>
          <xds-button kind="ghost" loading>Carregando...</xds-button>
        </div>
      </div>

      {/* ── Full Width ── */}
      <div className="pg-group">
        <div className="pg-group__label">Full Width</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-button full-width>Primary fullwidth</xds-button>
          <xds-button kind="secondary" full-width>Secondary fullwidth</xds-button>
          <xds-button kind="ghost" full-width>Ghost fullwidth</xds-button>
          <xds-button full-width>Com ícone<xds-icon slot="icon" name="send" size="sm" /></xds-button>
        </div>
      </div>

      {/* ── Como link ── */}
      <div className="pg-group">
        <div className="pg-group__label">Como link — href</div>
        <div className="pg-canvas">
          <xds-button href="https://gov.br" target="_blank">gov.br<xds-icon slot="icon" name="share-2" size="sm" /></xds-button>
          <xds-button kind="tertiary" href="#ancora">Âncora interna<xds-icon slot="icon" name="arrow-right" size="sm" /></xds-button>
          <xds-button kind="ghost" href="mailto:contato@exemplo.com.br">Enviar e-mail<xds-icon slot="icon" name="mail" size="sm" /></xds-button>
          <xds-button kind="secondary" href="https://gov.br" target="_blank" disabled>Link desabilitado</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Link externo — fluxo com xds-external-link-guard</div>
        <div className="pg-canvas pg-canvas--column" style={{ alignItems: 'flex-start' }}>
          <xds-external-link-guard />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <xds-button href="https://portal.demo-aws.xvia.com.br/">Acessar portal externo</xds-button>
            <xds-button kind="ghost" href="https://portal.demo-aws.xvia.com.br/app/catalog">Ver catálogo de serviços</xds-button>
            <xds-button kind="secondary" href="/?path=/docs/components-button--vis%C3%A3o-geral&globals=surface:surface-70">
              Link interno (não intercepta)
            </xds-button>
          </div>
        </div>
      </div>

      {/* ── Type ── */}
      <div className="pg-group">
        <div className="pg-group__label">Type — button / submit / reset</div>
        <div className="pg-canvas">
          <form
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <xds-button type="button" kind="secondary">type=button</xds-button>
            <xds-button type="reset" kind="ghost">type=reset</xds-button>
            <xds-button type="submit">type=submit<xds-icon slot="icon" name="send" size="sm" /></xds-button>
          </form>
        </div>
      </div>

      {/* ── Animações ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Animações — scale-up / underline</div>
        <div className="pg-canvas">
          <xds-button animation="scale-up">Confirmar</xds-button>
          <xds-button kind="secondary" animation="scale-up">Cancelar</xds-button>
          <xds-button kind="ghost" animation="underline">Ver mais</xds-button>
          <xds-button kind="ghost" animation="underline">Ver menos</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Radius — default · pill · rounded · square</div>
        <div className="pg-canvas">
          <xds-button radius="default">default</xds-button>
          <xds-button radius="pill">pill</xds-button>
          <xds-button radius="rounded">rounded</xds-button>
          <xds-button radius="square">square</xds-button>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Loja de aplicativos (composição)</div>
        <div className="pg-canvas">
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-md, 16px)',
              padding: 'var(--spacing-sm, 8px) var(--spacing-lg, 24px)',
              background: 'var(--color-surface-inverse, #0f172a)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-md, 8px)',
              textDecoration: 'none',
              cursor: 'pointer',
              minWidth: 180
            }}
          >
            <xds-icon name="apple" size="lg" style={{ color: '#ffffff', flexShrink: 0 }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <xds-text variant="caption" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Disponível na
              </xds-text>
              <xds-text variant="body" weight="bold" style={{ color: '#ffffff', fontSize: 18, lineHeight: 1.2 }}>
                App Store
              </xds-text>
            </span>
          </a>

          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-md, 16px)',
              padding: 'var(--spacing-sm, 8px) var(--spacing-lg, 24px)',
              background: 'var(--color-surface-inverse, #0f172a)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-md, 8px)',
              textDecoration: 'none',
              cursor: 'pointer',
              minWidth: 180
            }}
          >
            <xds-icon name="android" size="lg" style={{ color: '#ffffff', flexShrink: 0 }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <xds-text variant="caption" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Disponível no
              </xds-text>
              <xds-text variant="body" weight="bold" style={{ color: '#ffffff', fontSize: 18, lineHeight: 1.2 }}>
                Google Play
              </xds-text>
            </span>
          </a>
        </div>
      </div>

      {/* ── Skeleton ──────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas " >
            <xds-button-skeleton size="sm" ></xds-button-skeleton>
            <xds-button-skeleton size="md"></xds-button-skeleton>
            <xds-button-skeleton size="lg"></xds-button-skeleton>
            <xds-button-skeleton size="xl"></xds-button-skeleton>
            <xds-button-skeleton size="2xl"></xds-button-skeleton>
        </div>
      </div>
    </>
  );
}
