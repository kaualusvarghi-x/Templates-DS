import { useEffect, useMemo, useRef, useState } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { MOCK_SERVICES, NotificationItem } from '../data';

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
    const pagination = paginationRef.current;
    if (!pagination) return;

    const handlePageChanged = (event: Event) => {
      const detail = (event as CustomEvent<{ page?: number }>).detail;
      if (detail?.page) setPage(detail.page);
    };

    pagination.addEventListener('xds-pagination-changed', handlePageChanged as EventListener);

    return () => {
      pagination.removeEventListener('xds-pagination-changed', handlePageChanged as EventListener);
    };
  }, []);

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

  const toggleCategory = (cat: string) => {
    setPage(1);
    setSelectedCategories((prev) => (
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    ));
  };

  const toggleType = (type: 'Digital' | 'Presencial') => {
    setPage(1);
    setSelectedTypes((prev) => (
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    ));
  };

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
            radius="pill"
          >
            <xds-button slot="action" kind="primary" size="xl">BUSCAR</xds-button>
          </xds-search>
        </div>
      </section>

      <main className="portal-services-main">
        <div className="portal-shell portal-services-layout">
          <aside className="portal-services-filter">
            <xds-text variant="label" as="p" className="portal-services-filter__label">Filtrar por</xds-text>

            <section className="portal-services-filter__group">
              <xds-text variant="h3" as="h2">Categorias</xds-text>
              <div className="portal-services-filter__checks">
                {displayedCategories.map((cat) => (
                  <xds-checkbox
                    key={cat}
                    checked={selectedCategories.includes(cat)}
                    label-text={cat}
                    onClick={() => toggleCategory(cat)}
                  ></xds-checkbox>
                ))}
              </div>
              {ALL_CATEGORIES.length > 5 && (
                <xds-button
                  kind="tertiary"
                  size="md"
                  className="portal-services-filter__more"
                  onClick={() => setShowAllCategories((prev) => !prev)}
                >
                  {showAllCategories ? 'Ver menos' : `Ver mais (${ALL_CATEGORIES.length - 5})`}
                </xds-button>
              )}
            </section>

            <section className="portal-services-filter__group">
              <xds-text variant="h3" as="h2">Canal de Atendimento</xds-text>
              <div className="portal-services-filter__checks">
                <xds-checkbox
                  checked={selectedTypes.includes('Digital')}
                  label-text="Digital (Online)"
                  onClick={() => toggleType('Digital')}
                ></xds-checkbox>
                <xds-checkbox
                  checked={selectedTypes.includes('Presencial')}
                  label-text="Presencial / Híbrido"
                  onClick={() => toggleType('Presencial')}
                ></xds-checkbox>
              </div>
            </section>

            <xds-card className="portal-services-help" padding="md">
              <xds-text variant="body" as="p" italic>
                "Não encontrou o que precisava?"
              </xds-text>
              <xds-button kind="secondary" size="lg">
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
