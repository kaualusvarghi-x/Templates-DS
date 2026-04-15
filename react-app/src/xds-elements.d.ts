// ============================================================
// ARQUIVO GERADO AUTOMATICAMENTE — NÃO EDITAR MANUALMENTE
// Gerado a partir de custom-elements.json + src/icons/index.ts
// Para regenerar: npm run generate-types
// ============================================================

type XdsBaseAttrs = React.ClassAttributes<HTMLElement>
  & React.AriaAttributes
  & React.DOMAttributes<HTMLElement>
  & {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    slot?: string;
    tabIndex?: number;
    children?: React.ReactNode;
  };

// Tipos dos componentes (fonte: src/types/components.ts)
type Size = 'sm' | 'md' | 'lg';

type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'danger'
  | 'danger-tertiary'
  | 'danger-ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ButtonAnimation = 'scale-up' | 'underline';
export const BUTTON_ANIMATION = [
  'scale-up',
  'underline',
] as const satisfies ButtonAnimation[];
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonTooltipPosition = 'top' | 'right' | 'bottom' | 'left';
type ButtonTooltipAlignment = 'start' | 'center' | 'end';

type IconSize = 'sm' | 'md' | 'lg';
type IconVariant = 'circle' | 'square';
type IconColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';
type IconAnimation =
  | 'spin'
  | 'pulse'
  | 'slide-right'
  | 'slide-left'
  | 'slide-up'
  | 'slide-down'
  | 'bounce-right'
  | 'bounce-left'
  | 'scale';

type AccordionSize = 'sm' | 'md' | 'lg';
type AccordionAlignment = 'start' | 'end';

type BadgeColor =
  | 'primary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'neutral';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type AvatarColor = 'primary' | 'secondary' | 'neutral';

type TextVariant =
  | 'h1'
  | 'h1-hero'
  | 'h2'
  | 'h3'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'overline'
  | 'meta'
  | 'logo';
type TextAs =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'label';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';
type TextAlign = 'left' | 'center' | 'right';
type TextSpacing = 'tight' | 'normal' | 'wide' | 'wider';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerSpacing = 'sm' | 'md' | 'lg';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type CalloutKind = 'warning' | 'info' | 'success' | 'danger' | 'neutral';

type TagKind = 'warning' | 'info' | 'success' | 'danger' | 'neutral';

type ProgressBarVariant = 'default' | 'steps' | 'percentage';
type ProgressBarStatus = 'active' | 'finished' | 'error';
type ProgressBarSize = 'sm' | 'lg';

type IconButtonSize = 'sm' | 'md' | 'lg';
type IconButtonTooltipAlign =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';

type ModalSize = 'xs' | 'sm' | 'md' | 'lg';

type ToastKind = 'success' | 'error' | 'warning' | 'info';

// Nomes de ícones disponíveis (fonte: src/icons/index.ts)
type IconName = 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2';

interface HTMLElementTagNameMap {
    'xds-breadcrumb-item': HTMLElement & {
      'href'?: string | undefined;
      'target'?: string | undefined;
      'rel'?: string | undefined;
      'is-current-page'?: boolean;
      'disabled'?: boolean;
    };

    'xds-breadcrumb': HTMLElement & {
      'no-trailing-slash'?: boolean;
      'aria-label-text'?: string;
    };

    'xds-button-skeleton': HTMLElement & {
      'size'?: ButtonSize;
      'full-width'?: boolean;
    };

    'xds-button': HTMLElement & {
      'kind'?: ButtonKind;
      'size'?: ButtonSize;
      'disabled'?: boolean;
      'loading'?: boolean;
      'full-width'?: boolean;
      'href'?: string | undefined;
      'target'?: string | undefined;
      'type'?: ButtonType | undefined;
      'icon-position'?: 'left' | 'right';
      'tooltip-text'?: string | undefined;
      'tooltip-position'?: ButtonTooltipPosition | undefined;
      'tooltip-alignment'?: ButtonTooltipAlignment | undefined;
      'animation'?: ButtonAnimation | undefined;
    };

    'xds-accordion-item-skeleton': HTMLElement & {
      
    };

    'xds-accordion-item': HTMLElement & {
      'title'?: string;
      'open'?: boolean;
      'disabled'?: boolean;
    };

    'xds-accordion-skeleton': HTMLElement & {
      'alignment'?: 'start' | 'end';
      'count'?: number;
      'isFlush'?: boolean;
      'open'?: boolean;
    };

    'xds-accordion': HTMLElement & {
      'size'?: AccordionSize;
      'alignment'?: AccordionAlignment;
      'isFlush'?: boolean;
      'disabled'?: boolean;
      'exclusive'?: boolean;
    };

    'xds-avatar': HTMLElement & {
      'src'?: string | undefined;
      'alt'?: string;
      'initials'?: string | undefined;
      'size'?: AvatarSize;
      'color'?: AvatarColor;
    };

    'xds-checkbox-group': HTMLElement & {
      'legend-text'?: string;
      'orientation'?: | 'vertical'
    | 'horizontal';
      'disabled'?: boolean;
      'readonly'?: boolean;
      'invalid'?: boolean;
      'invalid-text'?: string;
      'warn'?: boolean;
      'warn-text'?: string;
    };

    'xds-checkbox': HTMLElement & {
      'checked'?: boolean;
      'indeterminate'?: boolean;
      'disabled'?: boolean;
      'readonly'?: boolean;
      'label-text'?: string;
      'hide-label'?: boolean;
      'name'?: string;
      'value'?: string;
      'invalid'?: boolean;
      'invalid-text'?: string;
      'warn'?: boolean;
      'warn-text'?: string;
    };

    'xds-divider': HTMLElement & {
      'orientation'?: DividerOrientation;
      'spacing'?: DividerSpacing;
      'label'?: string | undefined;
    };

    'xds-select-item-group': HTMLElement & {
      'disabled'?: boolean;
      'label'?: string;
    };

    'xds-select-item': HTMLElement & {
      'disabled'?: boolean;
      'label'?: string;
      'selected'?: boolean;
      'value'?: string;
    };

    'xds-select-skeleton': HTMLElement & {
      'hide-label'?: boolean;
    };

    'xds-select': HTMLElement & {
      'size'?: 'sm' | 'md' | 'lg';
      'variant'?: 'default' | 'ghost';
      'disabled'?: boolean;
      'invalid'?: boolean;
      'invalid-text'?: string;
      'warn'?: boolean;
      'warn-text'?: string;
      'label-text'?: string;
      'helper-text'?: string;
      'value'?: string;
      'name'?: string | undefined;
      'hide-label'?: boolean;
      'readonly'?: boolean;
      'placeholder'?: string | undefined;
    };

    'xds-badge-indicator': HTMLElement & {
      'color'?: BadgeColor;
      'count'?: number | undefined;
      'max'?: number;
      'dot'?: boolean;
      'invisible'?: boolean;
    };

    'xds-icon': HTMLElement & {
      'name'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
      'size'?: IconSize;
      'animation'?: IconAnimation | undefined;
      'variant'?: IconVariant | undefined;
      'color'?: IconColor | undefined;
      'duration'?: number | undefined;
      'easing'?: string | undefined;
    };

    'xds-icon-button': HTMLElement & {
      'kind'?: ButtonKind;
      'size'?: IconButtonSize;
      'disabled'?: boolean;
      'href'?: string | undefined;
      'target'?: string | undefined;
      'icon'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
      'tooltip-text'?: string | undefined;
      'tooltip-align'?: IconButtonTooltipAlign | undefined;
    };

    'xds-pagination': HTMLElement & {
      'page'?: number;
      'total-pages'?: number;
      'total-items'?: number | undefined;
      'page-size'?: number;
      'max-visible-pages'?: number;
      'disabled'?: boolean;
      'backward-text'?: string;
      'forward-text'?: string;
    };

    'xds-text': HTMLElement & {
      'variant'?: TextVariant;
      'as'?: TextAs | undefined;
      'weight'?: TextWeight | undefined;
      'italic'?: boolean;
      'transform'?: TextTransform | undefined;
      'align'?: TextAlign | undefined;
      'spacing'?: TextSpacing | (string & {}) | undefined;
      'truncate'?: boolean;
    };

    'xds-tooltip-content': HTMLElement & {
      
    };

    'xds-tooltip': HTMLElement & {
      'position'?: TooltipPosition;
      'disabled'?: boolean;
      'close-on-activation'?: boolean;
      'auto-align'?: boolean;
      'boundary'?: string;
    };
}

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'xds-breadcrumb-item': XdsBaseAttrs & {
        'href'?: string | undefined;
        'target'?: string | undefined;
        'rel'?: string | undefined;
        'is-current-page'?: boolean;
        'disabled'?: boolean;
      };

      'xds-breadcrumb': XdsBaseAttrs & {
        'no-trailing-slash'?: boolean;
        'aria-label-text'?: string;
      };

      'xds-button-skeleton': XdsBaseAttrs & {
        'size'?: ButtonSize;
        'full-width'?: boolean;
      };

      'xds-button': XdsBaseAttrs & {
        'kind'?: ButtonKind;
        'size'?: ButtonSize;
        'disabled'?: boolean;
        'loading'?: boolean;
        'full-width'?: boolean;
        'href'?: string | undefined;
        'target'?: string | undefined;
        'type'?: ButtonType | undefined;
        'icon-position'?: 'left' | 'right';
        'tooltip-text'?: string | undefined;
        'tooltip-position'?: ButtonTooltipPosition | undefined;
        'tooltip-alignment'?: ButtonTooltipAlignment | undefined;
        'animation'?: ButtonAnimation | undefined;
      };

      'xds-accordion-item-skeleton': XdsBaseAttrs & {

      };

      'xds-accordion-item': XdsBaseAttrs & {
        'title'?: string;
        'open'?: boolean;
        'disabled'?: boolean;
      };

      'xds-accordion-skeleton': XdsBaseAttrs & {
        'alignment'?: 'start' | 'end';
        'count'?: number;
        'isFlush'?: boolean;
        'open'?: boolean;
      };

      'xds-accordion': XdsBaseAttrs & {
        'size'?: AccordionSize;
        'alignment'?: AccordionAlignment;
        'isFlush'?: boolean;
        'disabled'?: boolean;
        'exclusive'?: boolean;
      };

      'xds-avatar': XdsBaseAttrs & {
        'src'?: string | undefined;
        'alt'?: string;
        'initials'?: string | undefined;
        'size'?: AvatarSize;
        'color'?: AvatarColor;
      };

      'xds-checkbox-group': XdsBaseAttrs & {
        'legend-text'?: string;
        'orientation'?: | 'vertical'
    | 'horizontal';
        'disabled'?: boolean;
        'readonly'?: boolean;
        'invalid'?: boolean;
        'invalid-text'?: string;
        'warn'?: boolean;
        'warn-text'?: string;
      };

      'xds-checkbox': XdsBaseAttrs & {
        'checked'?: boolean;
        'indeterminate'?: boolean;
        'disabled'?: boolean;
        'readonly'?: boolean;
        'label-text'?: string;
        'hide-label'?: boolean;
        'name'?: string;
        'value'?: string;
        'invalid'?: boolean;
        'invalid-text'?: string;
        'warn'?: boolean;
        'warn-text'?: string;
      };

      'xds-divider': XdsBaseAttrs & {
        'orientation'?: DividerOrientation;
        'spacing'?: DividerSpacing;
        'label'?: string | undefined;
      };

      'xds-select-item-group': XdsBaseAttrs & {
        'disabled'?: boolean;
        'label'?: string;
      };

      'xds-select-item': XdsBaseAttrs & {
        'disabled'?: boolean;
        'label'?: string;
        'selected'?: boolean;
        'value'?: string;
      };

      'xds-select-skeleton': XdsBaseAttrs & {
        'hide-label'?: boolean;
      };

      'xds-select': XdsBaseAttrs & {
        'size'?: 'sm' | 'md' | 'lg';
        'variant'?: 'default' | 'ghost';
        'disabled'?: boolean;
        'invalid'?: boolean;
        'invalid-text'?: string;
        'warn'?: boolean;
        'warn-text'?: string;
        'label-text'?: string;
        'helper-text'?: string;
        'value'?: string;
        'name'?: string | undefined;
        'hide-label'?: boolean;
        'readonly'?: boolean;
        'placeholder'?: string | undefined;
      };

      'xds-badge-indicator': XdsBaseAttrs & {
        'color'?: BadgeColor;
        'count'?: number | undefined;
        'max'?: number;
        'dot'?: boolean;
        'invisible'?: boolean;
      };

      'xds-icon': XdsBaseAttrs & {
        'name'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
        'size'?: IconSize;
        'animation'?: IconAnimation | undefined;
        'variant'?: IconVariant | undefined;
        'color'?: IconColor | undefined;
        'duration'?: number | undefined;
        'easing'?: string | undefined;
      };

      'xds-icon-button': XdsBaseAttrs & {
        'kind'?: ButtonKind;
        'size'?: IconButtonSize;
        'disabled'?: boolean;
        'href'?: string | undefined;
        'target'?: string | undefined;
        'icon'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
        'tooltip-text'?: string | undefined;
        'tooltip-align'?: IconButtonTooltipAlign | undefined;
      };

      'xds-pagination': XdsBaseAttrs & {
        'page'?: number;
        'total-pages'?: number;
        'total-items'?: number | undefined;
        'page-size'?: number;
        'max-visible-pages'?: number;
        'disabled'?: boolean;
        'backward-text'?: string;
        'forward-text'?: string;
      };

      'xds-text': XdsBaseAttrs & {
        'variant'?: TextVariant;
        'as'?: TextAs | undefined;
        'weight'?: TextWeight | undefined;
        'italic'?: boolean;
        'transform'?: TextTransform | undefined;
        'align'?: TextAlign | undefined;
        'spacing'?: TextSpacing | (string & {}) | undefined;
        'truncate'?: boolean;
      };

      'xds-tooltip-content': XdsBaseAttrs & {

      };

      'xds-tooltip': XdsBaseAttrs & {
        'position'?: TooltipPosition;
        'disabled'?: boolean;
        'close-on-activation'?: boolean;
        'auto-align'?: boolean;
        'boundary'?: string;
      };
    }
  }
}

// Global exposto pelo bundle UMD (window.XviaDS)
declare const XviaDS: {
  ICON_NAMES: IconName[];
};
