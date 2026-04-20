// ============================================================
// ARQUIVO GERADO AUTOMATICAMENTE — NÃO EDITAR MANUALMENTE
// Gerado a partir de custom-elements.json + src/icons/index.ts
// Para regenerar: npm run generate-types
// ============================================================

import * as React from 'react';

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

// Nomes de ícones disponíveis (fonte: src/icons/index.ts)
type IconName = 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2';

// ── Interfaces de props ────────────────────────────────────────

export interface XdsBreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'href'?: string | undefined;
  'target'?: string | undefined;
  'rel'?: string | undefined;
  'is-current-page'?: boolean;
  'disabled'?: boolean;
}

export interface XdsBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'no-trailing-slash'?: boolean;
  'aria-label-text'?: string;
}

export interface XdsAccordionItemSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsAccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'title'?: string;
  'open'?: boolean;
  'disabled'?: boolean;
}

export interface XdsAccordionSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'alignment'?: 'start' | 'end';
  'count'?: number;
  'isFlush'?: boolean;
  'open'?: boolean;
}

export interface XdsAccordionProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'size'?: AccordionSize;
  'alignment'?: AccordionAlignment;
  'isFlush'?: boolean;
  'disabled'?: boolean;
  'exclusive'?: boolean;
}

export interface XdsAvatarProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'src'?: string | undefined;
  'alt'?: string;
  'initials'?: string | undefined;
  'size'?: AvatarSize;
  'color'?: AvatarColor;
}

export interface XdsBadgeIndicatorProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'color'?: BadgeColor;
  'count'?: number | undefined;
  'max'?: number;
  'dot'?: boolean;
  'invisible'?: boolean;
}

export interface XdsCalloutProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'kind'?: CalloutKind;
}

export interface XdsButtonSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'size'?: ButtonSize;
  'full-width'?: boolean;
}

export interface XdsButtonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsCheckboxGroupProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'legend-text'?: string;
  'orientation'?: | 'vertical'
    | 'horizontal';
  'disabled'?: boolean;
  'readonly'?: boolean;
  'invalid'?: boolean;
  'invalid-text'?: string;
  'warn'?: boolean;
  'warn-text'?: string;
}

export interface XdsCheckboxProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsDividerProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'orientation'?: DividerOrientation;
  'spacing'?: DividerSpacing;
  'label'?: string | undefined;
}

export interface XdsSelectItemGroupProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'disabled'?: boolean;
  'label'?: string;
}

export interface XdsSelectItemProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'disabled'?: boolean;
  'label'?: string;
  'selected'?: boolean;
  'value'?: string;
}

export interface XdsSelectSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'hide-label'?: boolean;
}

export interface XdsSelectProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsExternalLinkGuardProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'target'?: '_blank' | '_self';
  'icon'?: string;
  'show-hostname'?: boolean;
}

export interface XdsIconProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'name'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
  'size'?: IconSize;
  'animation'?: IconAnimation | undefined;
  'variant'?: IconVariant | undefined;
  'color'?: IconColor | undefined;
  'duration'?: number | undefined;
  'easing'?: string | undefined;
}

export interface XdsIconButtonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'kind'?: ButtonKind;
  'size'?: IconButtonSize;
  'disabled'?: boolean;
  'href'?: string | undefined;
  'target'?: string | undefined;
  'icon'?: 'x' | 'circle-check' | 'circle-x' | 'triangle-alert' | 'circle-help' | 'trash-2' | 'sparkles' | 'pencil' | 'share-2' | 'refresh-cw' | 'arrow-right' | 'arrow-left' | 'download' | 'upload' | 'settings' | 'plus' | 'bell' | 'mail' | 'shopping-cart' | 'user' | 'badge-alert' | 'instagram' | 'twitter' | 'menu' | 'close' | 'chevron_right' | 'chevron_left' | 'arrow_forward' | 'home' | 'search' | 'search_off' | 'filter_list' | 'sort_by_alpha' | 'notifications' | 'notifications_active' | 'notifications_off' | 'contrast' | 'text_increase' | 'text_decrease' | 'check_circle' | 'warning' | 'error' | 'info' | 'help' | 'help_outline' | 'star' | 'star_outline' | 'edit' | 'save' | 'delete_outline' | 'add' | 'share' | 'print' | 'visibility' | 'visibility_off' | 'lock' | 'security' | 'verified' | 'login' | 'logout' | 'sync' | 'directions_car' | 'badge' | 'smartphone' | 'school' | 'medical_services' | 'policy' | 'work' | 'store' | 'forest' | 'account_balance' | 'account_circle' | 'person' | 'camera_alt' | 'add_a_photo' | 'newspaper' | 'calendar_today' | 'schedule' | 'history' | 'payments' | 'qr_code_2' | 'document_scanner' | 'folder_open' | 'smart_toy' | 'auto_awesome' | 'send' | 'email' | 'support_agent' | 'photo_camera' | 'play_arrow' | 'link_off' | 'check' | 'minus' | 'android' | 'apple' | 'facebook' | 'youtube' | 'user2' | undefined;
  'tooltip-text'?: string | undefined;
  'tooltip-align'?: IconButtonTooltipAlign | undefined;
}

export interface XdsInputSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'hide-label'?: boolean;
}

export interface XdsInputProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsPasswordInputSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'hide-label'?: boolean;
}

export interface XdsPasswordInputProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsLoadingProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'active'?: boolean;
  'inactive'?: boolean;
  'overlay'?: boolean;
  'small'?: boolean;
  'description'?: string;
  'assistive-text'?: string;
}

export interface XdsModalBodyProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'has-scrolling-content'?: boolean;
}

export interface XdsModalBodyContentProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsModalFooterProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsModalHeadingProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsModalLabelProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsModalCloseButtonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'close-button-label'?: string | undefined;
}

export interface XdsModalProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'open'?: boolean;
  'size'?: ModalSize;
  'alert'?: boolean;
  'aria-label'?: string;
  'prevent-close-on-click-outside'?: boolean;
  'prevent-close'?: boolean;
  'has-scrolling-content'?: boolean;
  'should-submit-on-enter'?: boolean;
}

export interface XdsPaginationProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'page'?: number;
  'total-pages'?: number;
  'total-items'?: number | undefined;
  'page-size'?: number;
  'max-visible-pages'?: number;
  'disabled'?: boolean;
  'backward-text'?: string;
  'forward-text'?: string;
}

export interface XdsProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'value'?: number;
  'max'?: number;
  'variant'?: ProgressBarVariant;
  'status'?: ProgressBarStatus;
  'size'?: ProgressBarSize;
  'label'?: string;
  'step-label'?: string | undefined;
}

export interface XdsSearchSkeletonProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'size'?: SearchSize;
}

export interface XdsSearchProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
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
}

export interface XdsTagProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'kind'?: TagKind;
}

export interface XdsTextProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'variant'?: TextVariant;
  'as'?: TextAs | undefined;
  'weight'?: TextWeight | undefined;
  'italic'?: boolean;
  'transform'?: TextTransform | undefined;
  'align'?: TextAlign | undefined;
  'spacing'?: TextSpacing | (string & {}) | undefined;
  'truncate'?: boolean;
}

export interface XdsToastProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'kind'?: ToastKind;
  'title'?: string;
  'description'?: string;
  'open'?: boolean;
  'duration'?: number;
}

export interface XdsToasterProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'max-visible'?: number;
}

export interface XdsTooltipContentProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  
}

export interface XdsTooltipProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'position'?: TooltipPosition;
  'disabled'?: boolean;
  'close-on-activation'?: boolean;
  'auto-align'?: boolean;
  'boundary'?: string;
}

export interface XdsCardProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'padding'?: CardPadding;
  'interactive'?: boolean;
}

export interface XdsNewsCardProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'title'?: string;
  'description'?: string;
  'date'?: string;
  'image'?: string;
  'category'?: string;
}

export interface XdsQuickServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'title'?: string;
  'description'?: string;
}

export interface XdsServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  slot?: string;
  'title'?: string;
  'description'?: string;
  'price'?: string;
  'type'?: ServiceType | '';
  'category'?: string;
  'free'?: boolean;
}

// ── Wrappers React ────────────────────────────────────────────

export const XdsBreadcrumbItem = React.forwardRef<HTMLElement, XdsBreadcrumbItemProps>(
  (props, ref) => React.createElement('xds-breadcrumb-item', { ...props, ref } as any),
);
XdsBreadcrumbItem.displayName = 'XdsBreadcrumbItem';

export const XdsBreadcrumb = React.forwardRef<HTMLElement, XdsBreadcrumbProps>(
  (props, ref) => React.createElement('xds-breadcrumb', { ...props, ref } as any),
);
XdsBreadcrumb.displayName = 'XdsBreadcrumb';

export const XdsAccordionItemSkeleton = React.forwardRef<HTMLElement, XdsAccordionItemSkeletonProps>(
  (props, ref) => React.createElement('xds-accordion-item-skeleton', { ...props, ref } as any),
);
XdsAccordionItemSkeleton.displayName = 'XdsAccordionItemSkeleton';

export const XdsAccordionItem = React.forwardRef<HTMLElement, XdsAccordionItemProps>(
  (props, ref) => React.createElement('xds-accordion-item', { ...props, ref } as any),
);
XdsAccordionItem.displayName = 'XdsAccordionItem';

export const XdsAccordionSkeleton = React.forwardRef<HTMLElement, XdsAccordionSkeletonProps>(
  (props, ref) => React.createElement('xds-accordion-skeleton', { ...props, ref } as any),
);
XdsAccordionSkeleton.displayName = 'XdsAccordionSkeleton';

export const XdsAccordion = React.forwardRef<HTMLElement, XdsAccordionProps>(
  (props, ref) => React.createElement('xds-accordion', { ...props, ref } as any),
);
XdsAccordion.displayName = 'XdsAccordion';

export const XdsAvatar = React.forwardRef<HTMLElement, XdsAvatarProps>(
  (props, ref) => React.createElement('xds-avatar', { ...props, ref } as any),
);
XdsAvatar.displayName = 'XdsAvatar';

export const XdsBadgeIndicator = React.forwardRef<HTMLElement, XdsBadgeIndicatorProps>(
  (props, ref) => React.createElement('xds-badge-indicator', { ...props, ref } as any),
);
XdsBadgeIndicator.displayName = 'XdsBadgeIndicator';

export const XdsCallout = React.forwardRef<HTMLElement, XdsCalloutProps>(
  (props, ref) => React.createElement('xds-callout', { ...props, ref } as any),
);
XdsCallout.displayName = 'XdsCallout';

export const XdsButtonSkeleton = React.forwardRef<HTMLElement, XdsButtonSkeletonProps>(
  (props, ref) => React.createElement('xds-button-skeleton', { ...props, ref } as any),
);
XdsButtonSkeleton.displayName = 'XdsButtonSkeleton';

export const XdsButton = React.forwardRef<HTMLElement, XdsButtonProps>(
  (props, ref) => React.createElement('xds-button', { ...props, ref } as any),
);
XdsButton.displayName = 'XdsButton';

export const XdsCheckboxGroup = React.forwardRef<HTMLElement, XdsCheckboxGroupProps>(
  (props, ref) => React.createElement('xds-checkbox-group', { ...props, ref } as any),
);
XdsCheckboxGroup.displayName = 'XdsCheckboxGroup';

export const XdsCheckbox = React.forwardRef<HTMLElement, XdsCheckboxProps>(
  (props, ref) => React.createElement('xds-checkbox', { ...props, ref } as any),
);
XdsCheckbox.displayName = 'XdsCheckbox';

export const XdsDivider = React.forwardRef<HTMLElement, XdsDividerProps>(
  (props, ref) => React.createElement('xds-divider', { ...props, ref } as any),
);
XdsDivider.displayName = 'XdsDivider';

export const XdsSelectItemGroup = React.forwardRef<HTMLElement, XdsSelectItemGroupProps>(
  (props, ref) => React.createElement('xds-select-item-group', { ...props, ref } as any),
);
XdsSelectItemGroup.displayName = 'XdsSelectItemGroup';

export const XdsSelectItem = React.forwardRef<HTMLElement, XdsSelectItemProps>(
  (props, ref) => React.createElement('xds-select-item', { ...props, ref } as any),
);
XdsSelectItem.displayName = 'XdsSelectItem';

export const XdsSelectSkeleton = React.forwardRef<HTMLElement, XdsSelectSkeletonProps>(
  (props, ref) => React.createElement('xds-select-skeleton', { ...props, ref } as any),
);
XdsSelectSkeleton.displayName = 'XdsSelectSkeleton';

export const XdsSelect = React.forwardRef<HTMLElement, XdsSelectProps>(
  (props, ref) => React.createElement('xds-select', { ...props, ref } as any),
);
XdsSelect.displayName = 'XdsSelect';

export const XdsExternalLinkGuard = React.forwardRef<HTMLElement, XdsExternalLinkGuardProps>(
  (props, ref) => React.createElement('xds-external-link-guard', { ...props, ref } as any),
);
XdsExternalLinkGuard.displayName = 'XdsExternalLinkGuard';

export const XdsIcon = React.forwardRef<HTMLElement, XdsIconProps>(
  (props, ref) => React.createElement('xds-icon', { ...props, ref } as any),
);
XdsIcon.displayName = 'XdsIcon';

export const XdsIconButton = React.forwardRef<HTMLElement, XdsIconButtonProps>(
  (props, ref) => React.createElement('xds-icon-button', { ...props, ref } as any),
);
XdsIconButton.displayName = 'XdsIconButton';

export const XdsInputSkeleton = React.forwardRef<HTMLElement, XdsInputSkeletonProps>(
  (props, ref) => React.createElement('xds-input-skeleton', { ...props, ref } as any),
);
XdsInputSkeleton.displayName = 'XdsInputSkeleton';

export const XdsInput = React.forwardRef<HTMLElement, XdsInputProps>(
  (props, ref) => React.createElement('xds-input', { ...props, ref } as any),
);
XdsInput.displayName = 'XdsInput';

export const XdsPasswordInputSkeleton = React.forwardRef<HTMLElement, XdsPasswordInputSkeletonProps>(
  (props, ref) => React.createElement('xds-password-input-skeleton', { ...props, ref } as any),
);
XdsPasswordInputSkeleton.displayName = 'XdsPasswordInputSkeleton';

export const XdsPasswordInput = React.forwardRef<HTMLElement, XdsPasswordInputProps>(
  (props, ref) => React.createElement('xds-password-input', { ...props, ref } as any),
);
XdsPasswordInput.displayName = 'XdsPasswordInput';

export const XdsLoading = React.forwardRef<HTMLElement, XdsLoadingProps>(
  (props, ref) => React.createElement('xds-loading', { ...props, ref } as any),
);
XdsLoading.displayName = 'XdsLoading';

export const XdsModalBody = React.forwardRef<HTMLElement, XdsModalBodyProps>(
  (props, ref) => React.createElement('xds-modal-body', { ...props, ref } as any),
);
XdsModalBody.displayName = 'XdsModalBody';

export const XdsModalBodyContent = React.forwardRef<HTMLElement, XdsModalBodyContentProps>(
  (props, ref) => React.createElement('xds-modal-body-content', { ...props, ref } as any),
);
XdsModalBodyContent.displayName = 'XdsModalBodyContent';

export const XdsModalFooter = React.forwardRef<HTMLElement, XdsModalFooterProps>(
  (props, ref) => React.createElement('xds-modal-footer', { ...props, ref } as any),
);
XdsModalFooter.displayName = 'XdsModalFooter';

export const XdsModalHeader = React.forwardRef<HTMLElement, XdsModalHeaderProps>(
  (props, ref) => React.createElement('xds-modal-header', { ...props, ref } as any),
);
XdsModalHeader.displayName = 'XdsModalHeader';

export const XdsModalHeading = React.forwardRef<HTMLElement, XdsModalHeadingProps>(
  (props, ref) => React.createElement('xds-modal-heading', { ...props, ref } as any),
);
XdsModalHeading.displayName = 'XdsModalHeading';

export const XdsModalLabel = React.forwardRef<HTMLElement, XdsModalLabelProps>(
  (props, ref) => React.createElement('xds-modal-label', { ...props, ref } as any),
);
XdsModalLabel.displayName = 'XdsModalLabel';

export const XdsModalCloseButton = React.forwardRef<HTMLElement, XdsModalCloseButtonProps>(
  (props, ref) => React.createElement('xds-modal-close-button', { ...props, ref } as any),
);
XdsModalCloseButton.displayName = 'XdsModalCloseButton';

export const XdsModal = React.forwardRef<HTMLElement, XdsModalProps>(
  (props, ref) => React.createElement('xds-modal', { ...props, ref } as any),
);
XdsModal.displayName = 'XdsModal';

export const XdsPagination = React.forwardRef<HTMLElement, XdsPaginationProps>(
  (props, ref) => React.createElement('xds-pagination', { ...props, ref } as any),
);
XdsPagination.displayName = 'XdsPagination';

export const XdsProgressBar = React.forwardRef<HTMLElement, XdsProgressBarProps>(
  (props, ref) => React.createElement('xds-progress-bar', { ...props, ref } as any),
);
XdsProgressBar.displayName = 'XdsProgressBar';

export const XdsSearchSkeleton = React.forwardRef<HTMLElement, XdsSearchSkeletonProps>(
  (props, ref) => React.createElement('xds-search-skeleton', { ...props, ref } as any),
);
XdsSearchSkeleton.displayName = 'XdsSearchSkeleton';

export const XdsSearch = React.forwardRef<HTMLElement, XdsSearchProps>(
  (props, ref) => React.createElement('xds-search', { ...props, ref } as any),
);
XdsSearch.displayName = 'XdsSearch';

export const XdsTag = React.forwardRef<HTMLElement, XdsTagProps>(
  (props, ref) => React.createElement('xds-tag', { ...props, ref } as any),
);
XdsTag.displayName = 'XdsTag';

export const XdsText = React.forwardRef<HTMLElement, XdsTextProps>(
  (props, ref) => React.createElement('xds-text', { ...props, ref } as any),
);
XdsText.displayName = 'XdsText';

export const XdsToast = React.forwardRef<HTMLElement, XdsToastProps>(
  (props, ref) => React.createElement('xds-toast', { ...props, ref } as any),
);
XdsToast.displayName = 'XdsToast';

export const XdsToaster = React.forwardRef<HTMLElement, XdsToasterProps>(
  (props, ref) => React.createElement('xds-toaster', { ...props, ref } as any),
);
XdsToaster.displayName = 'XdsToaster';

export const XdsTooltipContent = React.forwardRef<HTMLElement, XdsTooltipContentProps>(
  (props, ref) => React.createElement('xds-tooltip-content', { ...props, ref } as any),
);
XdsTooltipContent.displayName = 'XdsTooltipContent';

export const XdsTooltip = React.forwardRef<HTMLElement, XdsTooltipProps>(
  (props, ref) => React.createElement('xds-tooltip', { ...props, ref } as any),
);
XdsTooltip.displayName = 'XdsTooltip';

export const XdsCard = React.forwardRef<HTMLElement, XdsCardProps>(
  (props, ref) => React.createElement('xds-card', { ...props, ref } as any),
);
XdsCard.displayName = 'XdsCard';

export const XdsNewsCard = React.forwardRef<HTMLElement, XdsNewsCardProps>(
  (props, ref) => React.createElement('xds-news-card', { ...props, ref } as any),
);
XdsNewsCard.displayName = 'XdsNewsCard';

export const XdsQuickServiceCard = React.forwardRef<HTMLElement, XdsQuickServiceCardProps>(
  (props, ref) => React.createElement('xds-quick-service-card', { ...props, ref } as any),
);
XdsQuickServiceCard.displayName = 'XdsQuickServiceCard';

export const XdsServiceCard = React.forwardRef<HTMLElement, XdsServiceCardProps>(
  (props, ref) => React.createElement('xds-service-card', { ...props, ref } as any),
);
XdsServiceCard.displayName = 'XdsServiceCard';
