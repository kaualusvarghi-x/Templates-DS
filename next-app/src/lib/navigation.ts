export const NAV_ITEMS = [
  { id: 'button', name: 'Button', tag: 'xds-button', icon: 'smart_button', done: true },
  { id: 'icon', name: 'Icon', tag: 'xds-icon', icon: 'interests', done: true },
  { id: 'icon-button', name: 'Icon Button', tag: 'xds-icon-button', icon: 'radio_button_checked', done: true },
  { id: 'text', name: 'Text', tag: 'xds-text', icon: 'title', done: true },
  { id: 'divider', name: 'Divider', tag: 'xds-divider', icon: 'horizontal_rule', done: true },
  { id: 'tag', name: 'Tag', tag: 'xds-tag', icon: 'sell', done: true },
  { id: 'callout', name: 'Callout', tag: 'xds-callout', icon: 'subject', done: true },
  { id: 'avatar', name: 'Avatar', tag: 'xds-avatar', icon: 'account_circle', done: true },
  { id: 'tooltip', name: 'Tooltip', tag: 'xds-tooltip', icon: 'help_outline', done: true },
  { id: 'input', name: 'Input', tag: 'xds-input', icon: 'text_fields', done: true },
  { id: 'password-input', name: 'Password Input', tag: 'xds-password-input', icon: 'password', done: true },
  { id: 'select', name: 'Select', tag: 'xds-select', icon: 'arrow_drop_down_circle', done: true },
  { id: 'checkbox', name: 'Checkbox', tag: 'xds-checkbox', icon: 'check_box', done: true },
  { id: 'accordion', name: 'Accordion', tag: 'xds-accordion', icon: 'expand_more', done: true },
  { id: 'progress-bar', name: 'Progress Bar', tag: 'xds-progress-bar', icon: 'linear_scale', done: true },
  { id: 'pagination', name: 'Pagination', tag: 'xds-pagination', icon: 'more_horiz', done: true },
  { id: 'toast', name: 'Toast + Toaster', tag: 'xds-toast / xds-toaster', icon: 'notifications', done: true },
  { id: 'modal', name: 'Modal', tag: 'xds-modal', icon: 'open_in_new', done: true },
  { id: 'external-link-guard', name: 'External Link Guard', tag: 'xds-external-link-guard', icon: 'open_in_browser', done: true },
] as const;

export type PageId = typeof NAV_ITEMS[number]['id'];

export function isPageId(value: string): value is PageId {
  return NAV_ITEMS.some((item) => item.id === value);
}
