import { ComponentType, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import InputPage from './pages/InputPage';
import PasswordInputPage from './pages/PasswordInputPage';
import ModalPage from './pages/ModalPage';
import ToastPage from './pages/ToastPage';
import TextPage from './pages/TextPage';
import DividerPage from './pages/DividerPage';
import AvatarPage from './pages/AvatarPage';
import TooltipPage from './pages/TooltipPage';
import SelectPage from './pages/SelectPage';
import CheckboxPage from './pages/CheckboxPage';
import AccordionPage from './pages/AccordionPage';
import PaginationPage from './pages/PaginationPage';
import IconPage from './pages/IconPage';
import TagPage from './pages/TagPage';
import CalloutPage from './pages/CalloutPage';
import IconButtonPage from './pages/IconButtonPage';
import ProgressBarPage from './pages/ProgressBarPage';
import ExternalLinkGuardPage from './pages/ExternalLinkGuardPage';
import SearchPage from './pages/SearchPage';
import LoadingPage from './pages/LoadingPage';
import CardPage from './pages/CardPage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import TimelinePage from './pages/TimelinePage';
import EmptyStatePage from './pages/EmptyStatePage';

type PageId =
  | 'home'
  | 'button'
  | 'icon'
  | 'icon-button'
  | 'text'
  | 'divider'
  | 'tag'
  | 'callout'
  | 'avatar'
  | 'tooltip'
  | 'input'
  | 'password-input'
  | 'select'
  | 'checkbox'
  | 'accordion'
  | 'progress-bar'
  | 'toast'
  | 'modal'
  | 'external-link-guard'
  | 'search'
  | 'pagination'
  | 'loading'
  | 'card'
  | 'breadcrumb'
  | 'timeline'
  | 'empty-state';

type PageProps = { onNavigate?: (page: string) => void };

const PAGES: Record<PageId, ComponentType<PageProps>> = {
  home: HomePage,
  button: ButtonPage,
  icon: IconPage,
  'icon-button': IconButtonPage,
  text: TextPage,
  divider: DividerPage,
  tag: TagPage,
  callout: CalloutPage,
  avatar: AvatarPage,
  tooltip: TooltipPage,
  input: InputPage,
  'password-input': PasswordInputPage,
  select: SelectPage,
  checkbox: CheckboxPage,
  accordion: AccordionPage,
  'progress-bar': ProgressBarPage,
  toast: ToastPage,
  modal: ModalPage,
  'external-link-guard': ExternalLinkGuardPage,
  search: SearchPage,
  pagination: PaginationPage,
  loading: LoadingPage,
  card: CardPage,
  breadcrumb: BreadcrumbPage,
  timeline: TimelinePage,
  'empty-state': EmptyStatePage,
};

type NavItem = {
  id: PageId
  name: string
  tag: string
  icon: string
  done: boolean
}

const NAV_ITEMS: NavItem[] = [
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
  { id: 'search', name: 'Search', tag: 'xds-search', icon: 'manage_search', done: true },
  { id: 'loading', name: 'Loading', tag: 'xds-loading', icon: 'autorenew', done: true },
  { id: 'card', name: 'Card', tag: 'xds-card / xds-news-card / xds-quick-service-card / xds-service-card', icon: 'dashboard', done: true },
  { id: 'breadcrumb', name: 'Breadcrumb', tag: 'xds-breadcrumb', icon: 'chevron_right', done: true },
  { id: 'timeline', name: 'Timeline', tag: 'xds-timeline / xds-timeline-item', icon: 'timeline', done: true },
  { id: 'empty-state', name: 'Empty State', tag: 'xds-empty-state', icon: 'inbox', done: true },
]

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
const THEME_STORAGE_KEY = 'xvia-react-theme';

function isThemeValue(value: string | undefined): value is ThemeValue {
  if (!value) return false;
  return THEME_OPTIONS.some((option) => option.value === value);
}

function readStoredTheme(): ThemeValue | undefined {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) ?? undefined;
    if (isThemeValue(stored)) return stored;
  } catch {
    // Ignore storage access errors and fall back to data-theme/system preference.
  }
  return undefined;
}

function persistTheme(value: ThemeValue) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch {
    // Ignore storage access errors and keep runtime theme state.
  }
}

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeValue>(() => {
    const savedFromStorage = readStoredTheme();
    if (savedFromStorage) return savedFromStorage;
    const savedFromDataset = document.documentElement.dataset.theme;
    if (isThemeValue(savedFromDataset)) return savedFromDataset;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'surface-70'
      : 'surface-0';
  });
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const Page = PAGES[page] ?? HomePage;

  const selectedThemeOption = useMemo(
    () => THEME_OPTIONS.find((option) => option.value === selectedTheme) ?? THEME_OPTIONS[0],
    [selectedTheme]
  );
  const sortedNavItems = useMemo(
    () => [...NAV_ITEMS].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')),
    []
  )

  useEffect(() => {
    const option = THEME_OPTIONS.find((o) => o.value === selectedTheme);
    document.documentElement.dataset.theme = option?.dark ? 'dark' : 'light';
    document.body.style.backgroundColor = option?.hex ?? '';
    persistTheme(selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if (!themeMenuOpen) return;

    const onMouseDown = (event: MouseEvent) => {
      if (!themeMenuRef.current?.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setThemeMenuOpen(false);
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onEscape);
    };
  }, [themeMenuOpen]);

  return (
    <>
      <nav className={`ds-nav${sidebarCollapsed ? ' ds-nav--collapsed' : ''}`}>
        <div className="ds-nav__header">
          <div className="ds-nav__logo-row">
            <button
              className="ds-nav__toggle"
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              title={sidebarCollapsed ? 'Abrir sidebar' : 'Fechar sidebar'}
              aria-label={sidebarCollapsed ? 'Abrir sidebar' : 'Fechar sidebar'}
              aria-pressed={sidebarCollapsed}
            >
              <span className="material-icons-round">
                {sidebarCollapsed ? 'menu' : 'menu_open'}
              </span>
            </button>
            <div className="ds-nav__logo" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
              Xvia<span>DS</span>
              <div className="ds-nav__logo-sub">Design System</div>
            </div>
          </div>
          <div className="ds-nav__theme-row">
            <div className="ds-nav__theme" ref={themeMenuRef}>
              <button
                className="ds-nav__theme-toggle"
                onClick={() => setThemeMenuOpen((open) => !open)}
                title="Selecionar surface do tema"
                aria-haspopup="menu"
                aria-expanded={themeMenuOpen}
              >
                <span className="ds-nav__theme-dot" style={{ backgroundColor: selectedThemeOption.hex }} />
                <span className="ds-nav__theme-label">{selectedThemeOption.title}</span>
                <span className="material-icons-round">{themeMenuOpen ? 'expand_less' : 'expand_more'}</span>
              </button>

              {themeMenuOpen && (
                <div className="ds-nav__theme-menu" role="menu" aria-label="Theme surfaces">
                  {THEME_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      className={`ds-nav__theme-option${selectedTheme === option.value ? ' ds-nav__theme-option--active' : ''}`}
                      onClick={() => {
                        setSelectedTheme(option.value);
                        setThemeMenuOpen(false);
                      }}
                      role="menuitemradio"
                      aria-checked={selectedTheme === option.value}
                    >
                      <span className="ds-nav__theme-dot" style={{ backgroundColor: option.hex }} />
                      <span>{option.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ds-nav__body">
          <div className="ds-nav__group">Componentes</div>
          {sortedNavItems.map((item) => (
            <div
              key={item.id}
              className={`ds-nav__item${page === item.id ? ' ds-nav__item--active' : ''}${!item.done ? ' ds-nav__item--wip' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span className="material-icons-round" style={{ fontSize: 14 }}>{item.icon}</span>
              {item.name.trim() || item.id}
              <span className={`ds-nav__item-dot ${item.done ? 'ds-nav__item-dot--done' : 'ds-nav__item-dot--wip'}`} title={item.done ? 'Implementado' : 'Em desenvolvimento'} />
            </div>
          ))}
        </div>
      </nav>

      <main className={`ds-main${sidebarCollapsed ? ' ds-main--expanded' : ''}`}>
        <div className="ds-content" key={page}>
          <Page onNavigate={(p) => setPage(p as PageId)} />
        </div>
      </main>
    </>
  );
}
