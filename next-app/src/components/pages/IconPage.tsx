const ICON_NAMES = [
  'search', 'notifications', 'help_outline', 'settings', 'check_circle', 'warning',
  'arrow-right', 'arrow-left', 'download', 'upload', 'user', 'mail', 'shopping-cart', 'store',
] as const;

const COLOR_VARIANTS = [
  { color: 'primary', icon: 'user' },
  { color: 'info', icon: 'warning' },
  { color: 'success', icon: 'check_circle' },
  { color: 'warning', icon: 'notifications' },
  { color: 'danger', icon: 'settings' },
  { color: 'neutral', icon: 'store' },
] as const;

export default function IconPage() {
  return (
    <div>
      <div className="pg-header">
        <span className="pg-tag">xds-icon</span>
        <h1 className="pg-title">Icon</h1>
        <p className="pg-desc">Catálogo de ícones, tamanhos, variantes, cores e animações</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Catálogo — todos os ícones (md)</div>
        <div className="pg-canvas" style={{ flexWrap: 'wrap', gap: 24 }}>
          {ICON_NAMES.map((name) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <xds-icon name={name} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas" style={{ gap: 32, alignItems: 'center' }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <xds-icon name="search" size={size} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes — circle / square</div>
        <div className="pg-canvas" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          {(['circle', 'square'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, opacity: 0.65, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{variant}</span>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {(['sm', 'md', 'lg'] as const).map((size) => (
                  <div key={`${variant}-${size}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <xds-icon name="store" variant={variant} size={size} />
                    <span style={{ fontSize: 11, opacity: 0.6 }}>{size}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Cores — square e circle</div>
        <div className="pg-canvas" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          {(['square', 'circle'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, opacity: 0.65, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{variant}</span>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                {COLOR_VARIANTS.map(({ color, icon }) => (
                  <div key={`${variant}-${color}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <xds-icon name={icon} variant={variant} color={color} size="md" />
                    <span style={{ fontSize: 10, opacity: 0.6 }}>{color}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Herança de cor — color: inherit</div>
        <div className="pg-canvas" style={{ gap: 24, alignItems: 'center' }}>
          {([
            { color: '#3b82f6', name: 'warning', label: 'Azul' },
            { color: '#ef4444', name: 'help_outline', label: 'Vermelho' },
            { color: '#22c55e', name: 'check_circle', label: 'Verde' },
            { color: '#f59e0b', name: 'notifications', label: 'Amarelo' },
          ] as const).map(({ color, name, label }) => (
            <span key={name} style={{ color, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <xds-icon name={name} /> {label}
            </span>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">animation — contínuas (spin / pulse)</div>
        <div className="pg-canvas" style={{ gap: 40, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-icon name="refresh-cw" size="lg" animation="spin" />
            <span style={{ fontSize: 11, opacity: 0.6 }}>spin</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-icon name="sparkles" size="lg" animation="pulse" />
            <span style={{ fontSize: 11, opacity: 0.6 }}>pulse</span>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">animation — hover (passe o mouse sobre o ícone)</div>
        <div className="pg-canvas" style={{ gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          {([
            { animation: 'slide-right', icon: 'arrow-right', label: 'slide-right' },
            { animation: 'slide-left', icon: 'arrow-left', label: 'slide-left' },
            { animation: 'slide-up', icon: 'upload', label: 'slide-up' },
            { animation: 'slide-down', icon: 'download', label: 'slide-down' },
            { animation: 'bounce-right', icon: 'arrow-right', label: 'bounce-right' },
            { animation: 'bounce-left', icon: 'arrow-left', label: 'bounce-left' },
            { animation: 'scale', icon: 'search', label: 'scale' },
          ] as const).map(({ animation, icon, label }) => (
            <div key={animation} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-icon name={icon} size="lg" animation={animation} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Slot customizado — SVG externo via slot</div>
        <div className="pg-canvas" style={{ gap: 32, alignItems: 'center' }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <xds-icon size={size}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </xds-icon>
              <span style={{ fontSize: 11, opacity: 0.6 }}>slot {size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Slot tem prioridade sobre name</div>
        <div className="pg-canvas" style={{ gap: 40, alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, opacity: 0.6 }}>name="search" (sem slot)</span>
            <xds-icon name="search" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, opacity: 0.6 }}>name="search" + slot estrela (slot vence)</span>
            <xds-icon name="search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </xds-icon>
          </div>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Sem name e sem slot — renderiza vazio</div>
        <div className="pg-canvas">
          <xds-icon style={{ border: '1px dashed var(--color-border-subtle)', borderRadius: 4, width: 24, height: 24 }} />
          <span style={{ fontSize: 12, opacity: 0.6 }}>placeholder visual apenas para demonstração</span>
        </div>
      </div>
    </div>
  );
}
