import { Component, computed, ElementRef, HostListener, inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { NgClass, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

type NavItem = {
  path: string
  name: string
  tag: string
  icon: string
  done: boolean
}

const NAV_ITEMS: NavItem[] = [
  { path: 'button', name: 'Button', tag: 'xds-button', icon: 'smart_button', done: true },
  { path: 'icon', name: 'Icon', tag: 'xds-icon', icon: 'interests', done: true },
  { path: 'icon-button', name: 'Icon Button', tag: 'xds-icon-button', icon: 'radio_button_checked', done: true },
  { path: 'text', name: 'Text', tag: 'xds-text', icon: 'title', done: true },
  { path: 'divider', name: 'Divider', tag: 'xds-divider', icon: 'horizontal_rule', done: true },
  { path: 'tag', name: 'Tag', tag: 'xds-tag', icon: 'sell', done: true },
  { path: 'callout', name: 'Callout', tag: 'xds-callout', icon: 'subject', done: true },
  { path: 'avatar', name: 'Avatar', tag: 'xds-avatar', icon: 'account_circle', done: true },
  { path: 'breadcrumb', name: 'Breadcrumb', tag: 'xds-breadcrumb', icon: 'chevron_right', done: true },
  { path: 'tooltip', name: 'Tooltip', tag: 'xds-tooltip', icon: 'help_outline', done: true },
  { path: 'input', name: 'Input', tag: 'xds-input', icon: 'text_fields', done: true },
  { path: 'password-input', name: 'Password Input', tag: 'xds-password-input', icon: 'password', done: true },
  { path: 'select', name: 'Select', tag: 'xds-select', icon: 'arrow_drop_down_circle', done: true },
  { path: 'checkbox', name: 'Checkbox', tag: 'xds-checkbox', icon: 'check_box', done: true },
  { path: 'accordion', name: 'Accordion', tag: 'xds-accordion', icon: 'expand_more', done: true },
  { path: 'progress-bar', name: 'Progress Bar', tag: 'xds-progress-bar', icon: 'linear_scale', done: true },
  { path: 'pagination', name: 'Pagination', tag: 'xds-pagination', icon: 'more_horiz', done: true },
  { path: 'toast', name: 'Toast + Toaster', tag: 'xds-toast / xds-toaster', icon: 'notifications', done: true },
  { path: 'modal', name: 'Modal', tag: 'xds-modal', icon: 'open_in_new', done: true },
  { path: 'external-link-guard', name: 'External Link Guard', tag: 'xds-external-link-guard', icon: 'open_in_browser', done: true },
  { path: 'search', name: 'Search', tag: 'xds-search', icon: 'manage_search', done: true },
  { path: 'card', name: 'Card', tag: 'xds-card / xds-news-card / xds-quick-service-card / xds-service-card', icon: 'dashboard', done: true },
  { path: 'loading', name: 'Loading', tag: 'xds-loading', icon: 'autorenew', done: true },
];

const THEME_OPTIONS = [
  { value: 'surface-0', title: 'Surface 0', hex: '#FFFFFF', dark: false },
  { value: 'surface-10', title: 'Surface 10', hex: '#F8FAFC', dark: false },
  { value: 'surface-20', title: 'Surface 20', hex: '#F6F9FB', dark: false },
  { value: 'surface-30', title: 'Surface 30', hex: '#F5F8FB', dark: false },
  { value: 'surface-60', title: 'Surface 60', hex: '#1E293B', dark: true },
  { value: 'surface-70', title: 'Surface 70', hex: '#151E31', dark: true },
  { value: 'surface-80', title: 'Surface 80', hex: '#0F172A', dark: true },
] as const;

type ThemeValue = (typeof THEME_OPTIONS)[number]['value'];
const THEME_STORAGE_KEY = 'xvia-angular-theme';

function isThemeValue(value: string | undefined): value is ThemeValue {
  if (!value) return false;
  return THEME_OPTIONS.some((option) => option.value === value);
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nav = [...NAV_ITEMS].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  sidebarCollapsed = signal(false);
  themeOptions = THEME_OPTIONS;
  themeMenuOpen = signal(false);
  selectedTheme = signal<ThemeValue>('surface-0');
  selectedThemeOption = computed(
    () => THEME_OPTIONS.find((option) => option.value === this.selectedTheme()) ?? THEME_OPTIONS[0]
  );

  @ViewChild('themeMenuRef') themeMenuRef?: ElementRef<HTMLElement>;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedFromStorage = this.readStoredTheme();
    const savedFromDataset = document.documentElement.dataset['theme'];
    const nextTheme: ThemeValue = savedFromStorage
      ? savedFromStorage
      : isThemeValue(savedFromDataset)
        ? savedFromDataset
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'surface-70'
        : 'surface-0';

    this.selectedTheme.set(nextTheme);
    document.documentElement.dataset['theme'] = this.resolveDataTheme(nextTheme);
    document.body.style.backgroundColor = THEME_OPTIONS.find((o) => o.value === nextTheme)?.hex ?? '';
    this.persistTheme(nextTheme);
  }

  toggleThemeMenu(event: MouseEvent) {
    event.stopPropagation();
    this.themeMenuOpen.set(!this.themeMenuOpen());
  }

  selectTheme(value: ThemeValue) {
    this.selectedTheme.set(value);
    this.themeMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dataset['theme'] = this.resolveDataTheme(value);
      document.body.style.backgroundColor = THEME_OPTIONS.find((o) => o.value === value)?.hex ?? '';
      this.persistTheme(value);
    }
  }

  private resolveDataTheme(value: ThemeValue): 'light' | 'dark' {
    return THEME_OPTIONS.find((o) => o.value === value)?.dark ? 'dark' : 'light';
  }

  toggleSidebar() {
    this.sidebarCollapsed.set(!this.sidebarCollapsed());
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentMouseDown(event: MouseEvent) {
    if (!this.themeMenuOpen()) return;
    const target = event.target as Node;
    if (!this.themeMenuRef?.nativeElement.contains(target)) {
      this.themeMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.themeMenuOpen.set(false);
  }

  itemClass(item: { done: boolean }): Record<string, boolean> {
    return {
      'ds-nav__item': true,
      'ds-nav__item--wip': !item.done,
    };
  }

  private readStoredTheme(): ThemeValue | undefined {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY) ?? undefined;
      return isThemeValue(stored) ? stored : undefined;
    } catch {
      return undefined;
    }
  }

  private persistTheme(value: ThemeValue) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch {
      // Ignore storage access errors and keep runtime theme state.
    }
  }
}
