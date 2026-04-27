import { useEffect, useMemo, useRef, useState } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { MOCK_SERVICES, NotificationItem } from '../data';
import { EXTERNAL_LINKS } from './externalLinks';

interface ServiceSearchProps {
  isLoggedIn: boolean;
  userName: string;
  avatarUrl: string;
  cpf: string;
  notifications: NotificationItem[];
  globalSearchTerm: string;
  setGlobalSearchTerm: (v: string) => void;
  onNavigate: (view: string) => void;
  onFontSize: (action: 'increase' | 'decrease') => void;
}

const ALL_CATEGORIES = [
  'Transporte e Trânsito',
  'Educação',
  'Saúde',
  'Habitação',
  'Segurança',
  'Meio Ambiente',
  'Assistência Social',
  'Economia',
  'Cultura',
];

const ITEMS_PER_PAGE = 5;
const currencyFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function toServiceType(type: 'Digital' | 'Presencial' | 'Híbrido'): 'digital' | 'presencial' | 'hibrido' {
  if (type === 'Digital') return 'digital';
  if (type === 'Presencial') return 'presencial';
  return 'hibrido';
}

type CheckboxChangedDetail = {
  checked?: boolean;
  value?: string;
};

export default function ServiceSearch({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
}: ServiceSearchProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sortBy, setSortBy] = useState<'relevantes' | 'az' | 'recentes'>('relevantes');

  const heroSearchRef = useRef<HTMLElement | null>(null);
  const paginationRef = useRef<HTMLElement | null>(null);
  const sortSelectRef = useRef<HTMLElement | null>(null);
  const categoryChecksRef = useRef<HTMLDivElement | null>(null);
  const typeChecksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const search = heroSearchRef.current;
    if (!search) return;

    const handleInput = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string }>).detail;
      setGlobalSearchTerm(detail?.value ?? '');
      setPage(1);
    };

    const handleSubmit = () => {
      onNavigate('search');
    };

    search.addEventListener('xds-search-input', handleInput as EventListener);
    search.addEventListener('xds-search-submit', handleSubmit);

    return () => {
      search.removeEventListener('xds-search-input', handleInput as EventListener);
      search.removeEventListener('xds-search-submit', handleSubmit);
    };
  }, [onNavigate, setGlobalSearchTerm]);

  useEffect(() => {
    const select = sortSelectRef.current;
    if (!select) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue) return pathValue;
      return (select as HTMLElement & { value?: string }).value ?? '';
    };

    const handleSortChange = (event: Event) => {
      const value = resolveValue(event);
      if (value === 'az' || value === 'recentes' || value === 'relevantes') {
        setSortBy(value);
      }
    };

    select.addEventListener('change', handleSortChange);

    return () => {
      select.removeEventListener('change', handleSortChange);
    };
  }, []);

  useEffect(() => {
    const checks = categoryChecksRef.current;
    if (!checks) return;

    const handleCategoryChanged = (event: Event) => {
      const checkbox = event.target as HTMLElement | null;
      const cat = checkbox?.getAttribute('data-category');
      if (!cat) return;

      const detail = (event as CustomEvent<CheckboxChangedDetail>).detail;
      const isChecked = Boolean(detail?.checked);
      setPage(1);
      setSelectedCategories((prev) => {
        if (isChecked) return prev.includes(cat) ? prev : [...prev, cat];
        return prev.filter((c) => c !== cat);
      });
    };

    checks.addEventListener(
      'xds-checkbox-changed',
      handleCategoryChanged as EventListener
    );

    return () => {
      checks.removeEventListener(
        'xds-checkbox-changed',
        handleCategoryChanged as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const checks = typeChecksRef.current;
    if (!checks) return;

    const handleTypeChanged = (event: Event) => {
      const checkbox = event.target as HTMLElement | null;
      const type = checkbox?.getAttribute('data-type') as
        | 'Digital'
        | 'Presencial'
        | null;
      if (!type) return;

      const detail = (event as CustomEvent<CheckboxChangedDetail>).detail;
      const isChecked = Boolean(detail?.checked);
      setPage(1);
      setSelectedTypes((prev) => {
        if (isChecked) return prev.includes(type) ? prev : [...prev, type];
        return prev.filter((t) => t !== type);
      });
    };

    checks.addEventListener(
      'xds-checkbox-changed',
      handleTypeChanged as EventListener
    );

    return () => {
      checks.removeEventListener(
        'xds-checkbox-changed',
        handleTypeChanged as EventListener
      );
    };
  }, []);

  const filteredServices = useMemo(() => {
    const matched = MOCK_SERVICES.filter((service) => {
      const q = globalSearchTerm.trim().toLowerCase();
      const matchSearch = !q
        || service.title.toLowerCase().includes(q)
        || service.description.toLowerCase().includes(q);
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(service.category);
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(service.type === 'Digital' ? 'Digital' : 'Presencial');
      return matchSearch && matchCategory && matchType;
    });

    const sorted = [...matched];
    if (sortBy === 'az') {
      sorted.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
    } else if (sortBy === 'recentes') {
      sorted.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return sorted;
  }, [globalSearchTerm, selectedCategories, selectedTypes, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filteredServices.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const displayedCategories = showAllCategories ? ALL_CATEGORIES : ALL_CATEGORIES.slice(0, 5);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    const pagination = paginationRef.current as (HTMLElement & { page?: number }) | null;
    if (!pagination) return;

    const syncPageFromElement = () => {
      const fromProp = pagination.page;
      const fromAttr = pagination.getAttribute('page');
      const parsed = Number(fromProp ?? fromAttr ?? '');
      if (Number.isFinite(parsed) && parsed >= 1) {
        setPage(parsed);
      }
    };

    const handlePageChanged = (event: Event) => {
      const detail = (event as CustomEvent<{ page?: number }>).detail;
      if (typeof detail?.page === 'number' && detail.page >= 1) {
        setPage(detail.page);
        return;
      }
      syncPageFromElement();
    };

    const resolvePageFromClick = (event: Event): number | null => {
      const path = event.composedPath?.() ?? [];
      const clickedButton = path.find(
        (node) => node instanceof HTMLButtonElement,
      ) as HTMLButtonElement | undefined;

      if (!clickedButton) return null;

      const numericText = clickedButton.textContent?.trim() ?? '';
      if (/^\d+$/.test(numericText)) return Number(numericText);

      const aria = (clickedButton.getAttribute('aria-label') ?? '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      if (aria.includes('proxima')) return Math.min(totalPages, currentPage + 1);
      if (aria.includes('anterior')) return Math.max(1, currentPage - 1);

      return null;
    };

    const handleFallbackClick = (event: Event) => {
      const resolved = resolvePageFromClick(event);
      if (resolved && resolved !== currentPage) {
        setPage(resolved);
        return;
      }
      window.requestAnimationFrame(syncPageFromElement);
    };

    const observer = new MutationObserver(syncPageFromElement);
    observer.observe(pagination, { attributes: true, attributeFilter: ['page'] });

    pagination.addEventListener('xds-pagination-changed', handlePageChanged as EventListener);
    pagination.addEventListener('xds-page-changed', handlePageChanged as EventListener);
    pagination.addEventListener('change', handlePageChanged as EventListener);
    pagination.addEventListener('click', handleFallbackClick);

    return () => {
      observer.disconnect();
      pagination.removeEventListener('xds-pagination-changed', handlePageChanged as EventListener);
      pagination.removeEventListener('xds-page-changed', handlePageChanged as EventListener);
      pagination.removeEventListener('change', handlePageChanged as EventListener);
      pagination.removeEventListener('click', handleFallbackClick);
    };
  }, [currentPage, totalPages, filteredServices.length]);

  return (
    <div className="portal-page portal-page--public">
      <PortalHeader
        isLoggedIn={isLoggedIn}
        userName={userName}
        avatarUrl={avatarUrl}
        cpf={cpf}
        notifications={notifications}
        globalSearchTerm={globalSearchTerm}
        setGlobalSearchTerm={setGlobalSearchTerm}
        onNavigate={onNavigate}
        onFontSize={onFontSize}
        view="search"
      />

      <section className="portal-services-hero">
        <div className="portal-shell">
          <xds-search
            ref={heroSearchRef}
            className="portal-services-hero__search"
            placeholder="O que você procura hoje?"
            value={globalSearchTerm}
            radius="rounded"
          >
            <xds-button slot="action" kind="secondary" size="md">BUSCAR</xds-button>
          </xds-search>
        </div>
      </section>

      <main className="portal-services-main">
        <div className="portal-shell portal-services-layout">
          <aside className="portal-services-filter">
            <xds-text variant="label" as="p" className="portal-services-filter__label">Filtrar por</xds-text>

            <section className="portal-services-filter__group">
              <xds-text variant="h3" as="h2" className="portal-services-filter__group-title">Categorias</xds-text>
              <div className="portal-services-filter__checks" ref={categoryChecksRef}>
                {displayedCategories.map((cat) => (
                  <xds-checkbox
                    key={cat}
                    checked={selectedCategories.includes(cat)}
                    label-text={cat}
                    value={cat}
                    data-category={cat}
                  ></xds-checkbox>
                ))}
              </div>
              {ALL_CATEGORIES.length > 5 && (
                <xds-button
                  kind="ghost"
                  size="sm"
                  animation="underline"
                  className="portal-services-filter__more"
                  onClick={() => setShowAllCategories((prev) => !prev)}
                >
                  {showAllCategories ? 'Ver menos' : `Ver mais (${ALL_CATEGORIES.length - 5})`}
                </xds-button>
              )}
            </section>

            <section className="portal-services-filter__group">
              <xds-text variant="h3" as="h2" className="portal-services-filter__group-title">Canal de Atendimento</xds-text>
              <div className="portal-services-filter__checks" ref={typeChecksRef}>
                <xds-checkbox
                  checked={selectedTypes.includes('Digital')}
                  label-text="Digital (Online)"
                  value="Digital"
                  data-type="Digital"
                ></xds-checkbox>
                <xds-checkbox
                  checked={selectedTypes.includes('Presencial')}
                  label-text="Presencial / Híbrido"
                  value="Presencial"
                  data-type="Presencial"
                ></xds-checkbox>
              </div>
            </section>

            <xds-card className="portal-services-help" padding="md">
              <xds-text variant="body" as="p" italic className="portal-services-help__title">
                Não encontrou o que precisava?
              </xds-text>
              <xds-button
                kind="tertiary"
                size="lg"
                icon-position="left"
                full-width
                className="portal-services-help__action"
                href={EXTERNAL_LINKS.ouvidoria}
                target="_blank"
              >
                <xds-icon slot="icon" name="support_agent" size="sm"></xds-icon>
                Falar com Ouvidoria
              </xds-button>
            </xds-card>
          </aside>

          <section className="portal-services-results">
            <header className="portal-services-results__header">
              <xds-text variant="h2" as="h1">Exibindo {filteredServices.length} resultados</xds-text>

              <div className="portal-services-results__sort-wrap">
                <xds-text variant="body" as="span">Ordenar por:</xds-text>
                <xds-select
                  ref={sortSelectRef}
                  value={sortBy}
                  variant="ghost"
                >
                  <xds-select-item value="relevantes">Mais Relevantes</xds-select-item>
                  <xds-select-item value="az">A-Z</xds-select-item>
                  <xds-select-item value="recentes">Recentes</xds-select-item>
                </xds-select>
              </div>
            </header>

            {paginated.length > 0 ? (
              <div className="portal-services-results__list">
                {paginated.map((service) => {
                  const isDigital = service.type === 'Digital';
                  const actionLabel = isDigital ? 'INICIAR SERVIÇO' : 'VER DETALHES';

                  return (
                    <xds-service-card
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      category={service.category.toUpperCase()}
                      type={toServiceType(service.type)}
                      free={service.isFree}
                      price={service.isFree ? '' : currencyFmt.format(service.cost)}
                    >
                      <xds-button
                        slot="actions"
                        kind={isDigital ? 'primary' : 'tertiary'}
                        size="sm"
                        onClick={() => onNavigate('search')}
                      >
                        {actionLabel}
                      </xds-button>
                    </xds-service-card>
                  );
                })}
              </div>
            ) : (
              <xds-card className="portal-services-empty" padding="lg">
                <xds-text variant="h3" as="h2">Nenhum serviço encontrado</xds-text>
                <xds-text variant="body" as="p">Tente buscar com outros termos ou limpe os filtros.</xds-text>
                <xds-button
                  kind="secondary"
                  onClick={() => {
                    setGlobalSearchTerm('');
                    setSelectedCategories([]);
                    setSelectedTypes([]);
                    setPage(1);
                  }}
                >
                  Limpar filtros
                </xds-button>
              </xds-card>
            )}

            {filteredServices.length > ITEMS_PER_PAGE && (
              <div className="portal-services-pagination">
                <xds-pagination
                  ref={paginationRef}
                  page={currentPage}
                  total-pages={totalPages}
                  max-visible-pages={5}
                ></xds-pagination>
              </div>
            )}
          </section>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
