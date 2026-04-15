export default function AvatarPage() {
  return (
    <div>

      <div className="pg-header">
        <span className="pg-tag">xds-avatar</span>
        <h1 className="pg-title">Avatar</h1>
        <p className="pg-desc">Imagem de perfil · fallback para ícone padrão · tamanhos · cores</p>
      </div>

      {/* ── Tamanhos ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg / xl</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-avatar size={size} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cores ────────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Cores — primary / secondary / neutral</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          {(['primary', 'secondary', 'neutral'] as const).map(color => (
            <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-avatar color={color}/>
              <span style={{ fontSize: 11, opacity: 0.6 }}>{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Com imagem ───────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Com imagem — src válido</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-avatar
                size={size}
                src="https://i.pravatar.cc/150?img=3"
                alt="Foto de perfil"
              />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fallback — src inválido ───────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Fallback — src inválido (erro de carregamento)</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          {(['primary', 'secondary', 'neutral'] as const).map(color => (
            <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-avatar
                src="https://url-invalida.exemplo/imagem.jpg"
                alt="Imagem quebrada"
                color={color}
              />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{color} (fallback)</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Slot customizado ─────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Slot customizado — conteúdo no lugar do ícone padrão</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-avatar size="lg" color="primary">
              <span style={{ fontSize: 18, fontWeight: 700, color: 'currentColor' }}>JS</span>
            </xds-avatar>
            <span style={{ fontSize: 11, opacity: 0.6 }}>iniciais via slot</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <xds-avatar size="lg" color="secondary">
              <span style={{ fontSize: 18, fontWeight: 700, color: 'currentColor' }}>MR</span>
            </xds-avatar>
            <span style={{ fontSize: 11, opacity: 0.6 }}>iniciais via slot</span>
          </div>
        </div>
      </div>

      {/* ── Composição com badge ─────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Composição — avatar + badge</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 32 }}>
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <xds-avatar size="lg" src="https://i.pravatar.cc/150?img=5" alt="Usuário" />
            <xds-badge-indicator
              count={3}
              color="error"
              style={{ position: 'absolute', top: -4, right: -4 }}
            />
          </div>
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <xds-avatar size="xl" color="primary" />
            <xds-badge-indicator
              dot
              color="success"
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </div>
        </div>
      </div>

      {/* ── Com action ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Com ação — slot action</div>
        <div className="pg-canvas" style={{ alignItems: 'center', gap: 32 }}>
          <xds-avatar size="xl" src="https://i.pravatar.cc/150?u=avatar-action" alt="Perfil">
            <xds-icon-button slot="action" icon="pencil" size="sm" tooltip-text="Editar foto" />
          </xds-avatar>

          <xds-avatar size="xl" color="primary" initials="João Silva">
            <xds-icon-button slot="action" icon="pencil" size="sm" tooltip-text="Editar perfil" />
          </xds-avatar>
        </div>
      </div>

    </div>
  );
}
