// ============================================================
// ARQUIVO GERADO AUTOMATICAMENTE — NÃO EDITAR MANUALMENTE
// Gerado a partir de custom-elements.json + src/icons/index.ts
// Para regenerar: npm run generate-types
// ============================================================

type XdsBaseAttrs = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  slot?: string;
};

// Tipos dos componentes (fonte: src/types/components.ts)
type Size = 'sm' | 'md' | 'lg';

type ButtonRadius = 'default' | 'pill' | 'rounded' | 'square';

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
  | 'label'
  | 'strong';
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

type SearchSize = 'sm' | 'md' | 'lg';
type SearchRadius = 'pill' | 'rounded' | 'square';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

type ServiceType = 'digital' | 'presencial' | 'hibrido';

declare global {
  interface HTMLElementTagNameMap {
    'xds-accordion-item-skeleton': HTMLElement & {
      
    };

    'xds-accordion-item': HTMLElement & {
      'title'?: string;
      'open'?: boolean;
      'disabled'?: boolean;
      close(): void;
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

    'xds-avatar': HTMLElement & {
      'src'?: string | undefined;
      'alt'?: string;
      'initials'?: string | undefined;
      'size'?: AvatarSize;
      'color'?: AvatarColor;
    };

    'xds-button-skeleton': HTMLElement & {
      'size'?: ButtonSize;
      'full-width'?: boolean;
    };

    'xds-button': HTMLElement & {
      'kind'?: ButtonKind;
      'size'?: ButtonSize;
      'radius'?: ButtonRadius;
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

    'xds-callout': HTMLElement & {
      'kind'?: CalloutKind;
    };

    'xds-badge-indicator': HTMLElement & {
      'color'?: BadgeColor;
      'count'?: number | undefined;
      'max'?: number;
      'dot'?: boolean;
      'invisible'?: boolean;
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

    'xds-external-link-guard': HTMLElement & {
      'target'?: '_blank' | '_self';
      'icon'?: string;
      'show-hostname'?: boolean;
    };

    'xds-icon': HTMLElement & {
      'name'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
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
      'icon'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
      'tooltip-text'?: string | undefined;
      'tooltip-align'?: IconButtonTooltipAlign | undefined;
    };

    'xds-input-skeleton': HTMLElement & {
      'hide-label'?: boolean;
    };

    'xds-input': HTMLElement & {
      'label'?: string;
      'placeholder'?: string;
      'helper-text'?: string;
      'size'?: 'sm' | 'md' | 'lg';
      'disabled'?: boolean;
      'readonly'?: boolean;
      'invalid'?: boolean;
      'invalid-text'?: string;
      'warn'?: boolean;
      'warn-text'?: string;
      'value'?: string;
      'name'?: string | undefined;
      'type'?: string | undefined;
    };

    'xds-password-input-skeleton': HTMLElement & {
      'hide-label'?: boolean;
    };

    'xds-password-input': HTMLElement & {
      'label'?: string;
      'placeholder'?: string;
      'helper-text'?: string;
      'size'?: 'sm' | 'md' | 'lg';
      'disabled'?: boolean;
      'readonly'?: boolean;
      'invalid'?: boolean;
      'invalid-text'?: string;
      'warn'?: boolean;
      'warn-text'?: string;
      'value'?: string;
      'name'?: string | undefined;
    };

    'xds-loading': HTMLElement & {
      'active'?: boolean;
      'inactive'?: boolean;
      'overlay'?: boolean;
      'small'?: boolean;
      'description'?: string;
      'assistive-text'?: string;
    };

    'xds-modal-body': HTMLElement & {
      'has-scrolling-content'?: boolean;
    };

    'xds-modal-body-content': HTMLElement & {
      
    };

    'xds-modal-footer': HTMLElement & {
      
    };

    'xds-modal-header': HTMLElement & {
      
    };

    'xds-modal-heading': HTMLElement & {
      
    };

    'xds-modal-label': HTMLElement & {
      
    };

    'xds-modal-close-button': HTMLElement & {
      'close-button-label'?: string | undefined;
    };

    'xds-modal': HTMLElement & {
      'open'?: boolean;
      'size'?: ModalSize;
      'alert'?: boolean;
      'aria-label'?: string;
      'prevent-close-on-click-outside'?: boolean;
      'prevent-close'?: boolean;
      'has-scrolling-content'?: boolean;
      'should-submit-on-enter'?: boolean;
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

    'xds-progress-bar': HTMLElement & {
      'value'?: number;
      'max'?: number;
      'variant'?: ProgressBarVariant;
      'status'?: ProgressBarStatus;
      'size'?: ProgressBarSize;
      'label'?: string;
      'step-label'?: string | undefined;
    };

    'xds-search-skeleton': HTMLElement & {
      'size'?: SearchSize;
    };

    'xds-search': HTMLElement & {
      'label'?: string;
      'placeholder'?: string;
      'size'?: SearchSize;
      'radius'?: SearchRadius;
      'shadow'?: boolean;
      'disabled'?: boolean;
      'expanded'?: boolean;
      'value'?: string;
      'close-button-label-text'?: string;
      'name'?: string;
      'expandable'?: boolean;
    };

    'xds-tag': HTMLElement & {
      'kind'?: TagKind;
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

    'xds-toast': HTMLElement & {
      'kind'?: ToastKind;
      'title'?: string;
      'description'?: string;
      'open'?: boolean;
      'duration'?: number;
      show(): void;
      hide(): void;
      pauseTimer(): void;
      resumeTimer(): void;
    };

    'xds-toaster': HTMLElement & {
      'max-visible'?: number;
      push(): void;
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

    'xds-card': HTMLElement & {
      'padding'?: CardPadding;
      'interactive'?: boolean;
    };

    'xds-news-card': HTMLElement & {
      'title'?: string;
      'description'?: string;
      'date'?: string;
      'image'?: string;
      'category'?: string;
    };

    'xds-quick-service-card': HTMLElement & {
      'title'?: string;
      'description'?: string;
    };

    'xds-service-card': HTMLElement & {
      'title'?: string;
      'description'?: string;
      'price'?: string;
      'type'?: ServiceType | '';
      'category'?: string;
      'free'?: boolean;
    };
  }

  // Expõe IconName no escopo global para uso fora do JSX
  type IconName = 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2';

  // Global exposto pelo bundle UMD (window.XviaDS)
  const XviaDS: {
    ICON_NAMES: IconName[];
  };
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
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

      'xds-avatar': XdsBaseAttrs & {
        'src'?: string | undefined;
        'alt'?: string;
        'initials'?: string | undefined;
        'size'?: AvatarSize;
        'color'?: AvatarColor;
      };

      'xds-button-skeleton': XdsBaseAttrs & {
        'size'?: ButtonSize;
        'full-width'?: boolean;
      };

      'xds-button': XdsBaseAttrs & {
        'kind'?: ButtonKind;
        'size'?: ButtonSize;
        'radius'?: ButtonRadius;
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

      'xds-callout': XdsBaseAttrs & {
        'kind'?: CalloutKind;
      };

      'xds-badge-indicator': XdsBaseAttrs & {
        'color'?: BadgeColor;
        'count'?: number | undefined;
        'max'?: number;
        'dot'?: boolean;
        'invisible'?: boolean;
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

      'xds-external-link-guard': XdsBaseAttrs & {
        'target'?: '_blank' | '_self';
        'icon'?: string;
        'show-hostname'?: boolean;
      };

      'xds-icon': XdsBaseAttrs & {
        'name'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
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
        'icon'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
        'tooltip-text'?: string | undefined;
        'tooltip-align'?: IconButtonTooltipAlign | undefined;
      };

      'xds-input-skeleton': XdsBaseAttrs & {
        'hide-label'?: boolean;
      };

      'xds-input': XdsBaseAttrs & {
        'label'?: string;
        'placeholder'?: string;
        'helper-text'?: string;
        'size'?: 'sm' | 'md' | 'lg';
        'disabled'?: boolean;
        'readonly'?: boolean;
        'invalid'?: boolean;
        'invalid-text'?: string;
        'warn'?: boolean;
        'warn-text'?: string;
        'value'?: string;
        'name'?: string | undefined;
        'type'?: string | undefined;
      };

      'xds-password-input-skeleton': XdsBaseAttrs & {
        'hide-label'?: boolean;
      };

      'xds-password-input': XdsBaseAttrs & {
        'label'?: string;
        'placeholder'?: string;
        'helper-text'?: string;
        'size'?: 'sm' | 'md' | 'lg';
        'disabled'?: boolean;
        'readonly'?: boolean;
        'invalid'?: boolean;
        'invalid-text'?: string;
        'warn'?: boolean;
        'warn-text'?: string;
        'value'?: string;
        'name'?: string | undefined;
      };

      'xds-loading': XdsBaseAttrs & {
        'active'?: boolean;
        'inactive'?: boolean;
        'overlay'?: boolean;
        'small'?: boolean;
        'description'?: string;
        'assistive-text'?: string;
      };

      'xds-modal-body': XdsBaseAttrs & {
        'has-scrolling-content'?: boolean;
      };

      'xds-modal-body-content': XdsBaseAttrs & {

      };

      'xds-modal-footer': XdsBaseAttrs & {

      };

      'xds-modal-header': XdsBaseAttrs & {

      };

      'xds-modal-heading': XdsBaseAttrs & {

      };

      'xds-modal-label': XdsBaseAttrs & {

      };

      'xds-modal-close-button': XdsBaseAttrs & {
        'close-button-label'?: string | undefined;
      };

      'xds-modal': XdsBaseAttrs & {
        'open'?: boolean;
        'size'?: ModalSize;
        'alert'?: boolean;
        'aria-label'?: string;
        'prevent-close-on-click-outside'?: boolean;
        'prevent-close'?: boolean;
        'has-scrolling-content'?: boolean;
        'should-submit-on-enter'?: boolean;
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

      'xds-progress-bar': XdsBaseAttrs & {
        'value'?: number;
        'max'?: number;
        'variant'?: ProgressBarVariant;
        'status'?: ProgressBarStatus;
        'size'?: ProgressBarSize;
        'label'?: string;
        'step-label'?: string | undefined;
      };

      'xds-search-skeleton': XdsBaseAttrs & {
        'size'?: SearchSize;
      };

      'xds-search': XdsBaseAttrs & {
        'label'?: string;
        'placeholder'?: string;
        'size'?: SearchSize;
        'radius'?: SearchRadius;
        'shadow'?: boolean;
        'disabled'?: boolean;
        'expanded'?: boolean;
        'value'?: string;
        'close-button-label-text'?: string;
        'name'?: string;
        'expandable'?: boolean;
      };

      'xds-tag': XdsBaseAttrs & {
        'kind'?: TagKind;
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

      'xds-toast': XdsBaseAttrs & {
        'kind'?: ToastKind;
        'title'?: string;
        'description'?: string;
        'open'?: boolean;
        'duration'?: number;
      };

      'xds-toaster': XdsBaseAttrs & {
        'max-visible'?: number;
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

      'xds-card': XdsBaseAttrs & {
        'padding'?: CardPadding;
        'interactive'?: boolean;
      };

      'xds-news-card': XdsBaseAttrs & {
        'title'?: string;
        'description'?: string;
        'date'?: string;
        'image'?: string;
        'category'?: string;
      };

      'xds-quick-service-card': XdsBaseAttrs & {
        'title'?: string;
        'description'?: string;
      };

      'xds-service-card': XdsBaseAttrs & {
        'title'?: string;
        'description'?: string;
        'price'?: string;
        'type'?: ServiceType | '';
        'category'?: string;
        'free'?: boolean;
      };
    }
  }
}

// Reexporta para compatibilidade com React.JSX.IntrinsicElements
declare namespace React {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends import("react/jsx-runtime").JSX.IntrinsicElements {}
  }
}

// Tipos de conveniência para derivar props dos elementos XDS sem referenciar JSX diretamente
export type XdsIntrinsicElements = import("react/jsx-runtime").JSX.IntrinsicElements;
