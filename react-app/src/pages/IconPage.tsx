import { useMemo, useState } from 'react';
import type { XdsIntrinsicElements } from '@xvia/ds-types';

type IconAnimation = NonNullable<XdsIntrinsicElements['xds-icon']['animation']>;
type IconVariant = NonNullable<XdsIntrinsicElements['xds-icon']['variant']>;
type IconColor = NonNullable<XdsIntrinsicElements['xds-icon']['color']>;

const ICON_NAMES_FALLBACK: readonly IconName[] = [
  'x',
  'circle-check',
  'circle-x',
  'triangle-alert',
  'circle-help',
  'trash-2',
  'sparkles',
  'pencil',
  'share-2',
  'refresh-cw',
  'arrow-right',
  'arrow-left',
  'download',
  'upload',
  'settings',
  'plus',
  'bell',
  'mail',
  'shopping-cart',
  'user',
  'badge-alert',
  'instagram',
  'twitter',
  'menu',
  'close',
  'chevron_right',
  'chevron_left',
  'arrow_forward',
  'home',
  'search',
  'search_off',
  'filter_list',
  'sort_by_alpha',
  'notifications',
  'notifications_active',
  'notifications_off',
  'contrast',
  'text_increase',
  'text_decrease',
  'check_circle',
  'warning',
  'error',
  'info',
  'help',
  'help_outline',
  'star',
  'star_outline',
  'edit',
  'save',
  'delete_outline',
  'add',
  'share',
  'print',
  'visibility',
  'visibility_off',
  'lock',
  'security',
  'verified',
  'login',
  'logout',
  'sync',
  'directions_car',
  'badge',
  'smartphone',
  'school',
  'medical_services',
  'policy',
  'work',
  'store',
  'forest',
  'account_balance',
  'account_circle',
  'person',
  'camera_alt',
  'add_a_photo',
  'newspaper',
  'calendar_today',
  'schedule',
  'history',
  'payments',
  'qr_code_2',
  'document_scanner',
  'folder_open',
  'smart_toy',
  'auto_awesome',
  'send',
  'email',
  'support_agent',
  'photo_camera',
  'play_arrow',
  'check',
  'minus',
  'android',
  'apple',
  'facebook',
  'youtube',
  'user2',
] as const;

const COLOR_VARIANTS: { color: IconColor; icon: IconName }[] = [
  { color: 'primary', icon: 'user' },
  { color: 'info', icon: 'badge-alert' },
  { color: 'success', icon: 'notifications' },
  { color: 'warning', icon: 'smartphone' },
  { color: 'danger', icon: 'security' },
  { color: 'neutral', icon: 'directions_car' },
];

const VARIANT_SIZES = ['sm', 'md', 'lg'] as const;

function AnimatedIconButton({ label, iconName, animation, kind = 'primary' }: {
  label: string;
  iconName: IconName;
  animation: IconAnimation;
  kind?: NonNullable<XdsIntrinsicElements['xds-button']['kind']>;
}) {
  const [active, setActive] = useState(false);
  return (
    <xds-button
      kind={kind}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {label}
      <xds-icon
        slot="icon"
        name={iconName}
        animation={active ? animation : undefined}
      />
    </xds-button>
  );
}

export default function IconPage() {
  const allIcons = useMemo(() => {
    const runtimeIcons = (window as typeof window & { XviaDS?: { ICON_NAMES?: IconName[] } }).XviaDS?.ICON_NAMES;
    const source = runtimeIcons?.length ? runtimeIcons : [...ICON_NAMES_FALLBACK];
    return Array.from(new Set(source));
  }, []);

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
          {allIcons.map((name) => (
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
          {VARIANT_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <xds-icon name="search" size={size} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{size} — {size === 'sm' ? 16 : size === 'md' ? 20 : 24}px</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Variantes — circle / square</div>
        <div className="pg-canvas" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          {([
            { variant: 'circle' as IconVariant, title: 'circle' },
            { variant: 'square' as IconVariant, title: 'square' },
          ]).map(({ variant, title }) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, opacity: 0.65, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {VARIANT_SIZES.map((size) => (
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
          {([
            { variant: 'square' as IconVariant, title: 'square' },
            { variant: 'circle' as IconVariant, title: 'circle' },
          ]).map(({ variant, title }) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, opacity: 0.65, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
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
            { color: '#3b82f6', name: 'info', label: 'Azul' },
            { color: '#ef4444', name: 'circle-x', label: 'Vermelho' },
            { color: '#22c55e', name: 'circle-check', label: 'Verde' },
            { color: '#f59e0b', name: 'triangle-alert', label: 'Amarelo' },
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
        <div className="pg-canvas" style={{ gap: 40, alignItems: 'center' }}>
          {([
            { animation: 'slide-right', icon: 'arrow-right', label: 'slide-right' },
            { animation: 'slide-left', icon: 'arrow-left', label: 'slide-left' },
            { animation: 'slide-up', icon: 'upload', label: 'slide-up' },
            { animation: 'slide-down', icon: 'download', label: 'slide-down' },
            { animation: 'bounce-right', icon: 'arrow-right', label: 'bounce-right' },
            { animation: 'bounce-left', icon: 'arrow-left', label: 'bounce-left' },
            { animation: 'scale', icon: 'plus', label: 'scale' },
          ] as const).map(({ animation, icon, label }) => (
            <div key={animation} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <xds-icon name={icon} size="lg" animation={animation} />
              <span style={{ fontSize: 11, opacity: 0.6 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">
          hover no botão → ícone anima
          <span style={{ fontSize: 11, opacity: 0.5, fontWeight: 400, marginLeft: 8 }}>
            (placeholder — será nativo no xds-button)
          </span>
        </div>
        <div className="pg-canvas" style={{ gap: 16 }}>
          <AnimatedIconButton label="Próximo" iconName="arrow-right" animation="bounce-right" kind="primary" />
          <AnimatedIconButton label="Voltar" iconName="arrow-left" animation="bounce-left" kind="secondary" />
          <AnimatedIconButton label="Enviar" iconName="send" animation="slide-right" kind="ghost" />
          <AnimatedIconButton label="Download" iconName="download" animation="slide-down" kind="tertiary" />
          <AnimatedIconButton label="Adicionar" iconName="plus" animation="scale" kind="primary" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">Slot customizado — SVG externo via slot</div>
        <div className="pg-canvas" style={{ gap: 32, alignItems: 'center' }}>
          {VARIANT_SIZES.map((size) => (
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
