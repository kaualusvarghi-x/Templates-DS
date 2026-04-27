import { useEffect, useMemo, useRef, useState } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { NotificationItem } from '../data';

interface DepartmentsPageProps {
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

type OrgType = 'AGÊNCIA' | 'ÓRGÃO' | 'PROGRAMA' | 'AUTARQUIA' | 'EMPRESA' | 'FUNDAÇÃO' | 'SECRETARIA' | 'INSTITUTO';

interface OrgItem {
  id: string;
  acronym: string;
  name: string;
  type: OrgType;
}

const ORGS: OrgItem[] = [
  { id: '1', acronym: 'ARSESP', name: 'Agência Reguladora de Saneamento e Energia', type: 'AGÊNCIA' },
  { id: '2', acronym: 'ARTESP', name: 'Agência Reguladora de Transportes', type: 'AGÊNCIA' },
  { id: '3', acronym: 'APESP', name: 'Arquivo Público do Estado', type: 'ÓRGÃO' },
  { id: '4', acronym: 'BPP', name: 'Banco do Povo', type: 'PROGRAMA' },
  { id: '5', acronym: 'CPS', name: 'Centro Paula Souza', type: 'AUTARQUIA' },
  { id: '6', acronym: 'CETESB', name: 'Companhia Ambiental', type: 'EMPRESA' },
  { id: '7', acronym: 'PRODESP', name: 'Companhia de Processamento de Dados do Estado', type: 'EMPRESA' },
  { id: '8', acronym: 'SABESP', name: 'Companhia de Saneamento Básico', type: 'EMPRESA' },
  { id: '9', acronym: 'UNICAMP', name: 'Universidade Estadual de Campinas', type: 'AUTARQUIA' },
  { id: '10', acronym: 'UNESP', name: 'Universidade Estadual Paulista', type: 'AUTARQUIA' },
  { id: '11', acronym: 'USP', name: 'Universidade de São Paulo', type: 'AUTARQUIA' },
  { id: '12', acronym: 'SEDUC', name: 'Secretaria da Educação', type: 'SECRETARIA' },
  { id: '13', acronym: 'SES', name: 'Secretaria da Saúde', type: 'SECRETARIA' },
  { id: '14', acronym: 'SSP', name: 'Secretaria da Segurança Pública', type: 'SECRETARIA' },
  { id: '15', acronym: 'SEFAZ', name: 'Secretaria da Fazenda e Planejamento', type: 'SECRETARIA' },
  { id: '16', acronym: 'SEDS', name: 'Secretaria de Desenvolvimento Social', type: 'SECRETARIA' },
  { id: '17', acronym: 'SEMIL', name: 'Secretaria de Meio Ambiente, Infraestrutura e Logística', type: 'SECRETARIA' },
  { id: '18', acronym: 'SDE', name: 'Secretaria de Desenvolvimento Econômico', type: 'SECRETARIA' },
  { id: '19', acronym: 'SETUR', name: 'Secretaria de Turismo e Viagens', type: 'SECRETARIA' },
  { id: '20', acronym: 'SDM', name: 'Secretaria dos Direitos da Mulher', type: 'SECRETARIA' },
  { id: '21', acronym: 'IPT', name: 'Instituto de Pesquisas Tecnológicas', type: 'INSTITUTO' },
  { id: '22', acronym: 'IMESP', name: 'Imprensa Oficial do Estado', type: 'EMPRESA' },
  { id: '23', acronym: 'DER', name: 'Departamento de Estradas de Rodagem', type: 'ÓRGÃO' },
  { id: '24', acronym: 'DETRAN', name: 'Departamento Estadual de Trânsito', type: 'ÓRGÃO' },
  { id: '25', acronym: 'DAEE', name: 'Departamento de Águas e Energia Elétrica', type: 'AUTARQUIA' },
  { id: '26', acronym: 'CPOS', name: 'Companhia Paulista de Obras e Serviços', type: 'EMPRESA' },
  { id: '27', acronym: 'EMTU', name: 'Empresa Metropolitana de Transportes Urbanos', type: 'EMPRESA' },
  { id: '28', acronym: 'FDE', name: 'Fundação para o Desenvolvimento da Educação', type: 'FUNDAÇÃO' },
  { id: '29', acronym: 'FURP', name: 'Fundação para o Remédio Popular', type: 'FUNDAÇÃO' },
  { id: '30', acronym: 'CDHU', name: 'Companhia de Desenvolvimento Habitacional e Urbano', type: 'EMPRESA' },
  { id: '31', acronym: 'FOSP', name: 'Fundação Oncocentro de São Paulo', type: 'FUNDAÇÃO' },
  { id: '32', acronym: 'IAMSPE', name: 'Instituto de Assistência Médica ao Servidor Público Estadual', type: 'INSTITUTO' },
  { id: '33', acronym: 'SPPREV', name: 'São Paulo Previdência', type: 'AUTARQUIA' },
  { id: '34', acronym: 'INVESTSP', name: 'Agência Paulista de Promoção de Investimentos', type: 'AGÊNCIA' },
  { id: '35', acronym: 'PROCON', name: 'Fundação de Proteção e Defesa do Consumidor', type: 'FUNDAÇÃO' },
  { id: '36', acronym: 'JUCESP', name: 'Junta Comercial do Estado de São Paulo', type: 'ÓRGÃO' },
  { id: '37', acronym: 'EMPLASA', name: 'Empresa Paulista de Planejamento Metropolitano', type: 'EMPRESA' },
  { id: '38', acronym: 'CGE', name: 'Controladoria Geral do Estado', type: 'ÓRGÃO' },
  { id: '39', acronym: 'FCASA', name: 'Fundação Centro de Atendimento Socioeducativo', type: 'FUNDAÇÃO' },
  { id: '40', acronym: 'CPE', name: 'Conselho de Participação Estadual', type: 'ÓRGÃO' },
];

const TYPE_KIND: Record<OrgType, 'neutral' | 'info' | 'warning' | 'success'> = {
  AGÊNCIA: 'info',
  ÓRGÃO: 'neutral',
  PROGRAMA: 'neutral',
  AUTARQUIA: 'warning',
  EMPRESA: 'success',
  FUNDAÇÃO: 'success',
  SECRETARIA: 'info',
  INSTITUTO: 'warning',
};

export default function DepartmentsPage({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
}: DepartmentsPageProps) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'Todos' | OrgType>('Todos');
  const [sortOrder, setSortOrder] = useState<'A-Z' | 'Z-A'>('A-Z');

  const searchRef = useRef<HTMLElement | null>(null);
  const typeSelectRef = useRef<HTMLElement | null>(null);
  const sortSelectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const search = searchRef.current;
    if (!search) return;

    const handleSearchInput = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string }>).detail;
      setQuery(detail?.value ?? '');
    };

    search.addEventListener('xds-search-input', handleSearchInput as EventListener);

    return () => {
      search.removeEventListener('xds-search-input', handleSearchInput as EventListener);
    };
  }, []);

  useEffect(() => {
    const typeSelect = typeSelectRef.current;
    if (!typeSelect) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue) return pathValue;
      return (typeSelect as HTMLElement & { value?: string }).value ?? '';
    };

    const handleChange = (event: Event) => {
      const next = resolveValue(event);
      if (!next) return;
      if (next === 'Todos' || next === 'AGÊNCIA' || next === 'ÓRGÃO' || next === 'PROGRAMA' || next === 'AUTARQUIA' || next === 'EMPRESA' || next === 'FUNDAÇÃO' || next === 'SECRETARIA' || next === 'INSTITUTO') {
        setTypeFilter(next);
      }
    };

    typeSelect.addEventListener('change', handleChange);

    return () => {
      typeSelect.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const sortSelect = sortSelectRef.current;
    if (!sortSelect) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue) return pathValue;
      return (sortSelect as HTMLElement & { value?: string }).value ?? '';
    };

    const handleChange = (event: Event) => {
      const next = resolveValue(event);
      if (next === 'A-Z' || next === 'Z-A') {
        setSortOrder(next);
      }
    };

    sortSelect.addEventListener('change', handleChange);

    return () => {
      sortSelect.removeEventListener('change', handleChange);
    };
  }, []);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const byFilter = ORGS.filter((org) => typeFilter === 'Todos' || org.type === typeFilter);
    const byQuery = byFilter.filter((org) => {
      if (!normalizedQuery) return true;
      return org.name.toLowerCase().includes(normalizedQuery) || org.acronym.toLowerCase().includes(normalizedQuery);
    });

    return [...byQuery].sort((a, b) => {
      const cmp = a.name.localeCompare(b.name, 'pt-BR');
      return sortOrder === 'A-Z' ? cmp : -cmp;
    });
  }, [query, sortOrder, typeFilter]);

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
        view="departments"
      />

      <main className="portal-organs-main">
        <div className="portal-shell">
          <xds-breadcrumb no-trailing-slash>
            <xds-breadcrumb-item href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>
              Início
            </xds-breadcrumb-item>
            <xds-breadcrumb-item is-current-page>Órgãos e Secretarias</xds-breadcrumb-item>
          </xds-breadcrumb>

          <header className="portal-organs-header">
            <xds-text variant="h1" as="h1" className="portal-organs-header__title">Estrutura do Governo</xds-text>
            <xds-text variant="body" as="p" weight="regular" className="portal-organs-header__subtitle">
              Encontre informações, serviços e contatos de todos os órgãos,
              secretarias e entidades da administração pública.
            </xds-text>
          </header>

          <xds-card className="portal-organs-toolbar" padding="md">
            <xds-search
              ref={searchRef}
              placeholder="Buscar por nome ou sigla..."
              size="md"
              radius="rounded"
              shadow={false}
              value={query}
              className="portal-organs-toolbar__search"
            ></xds-search>

            <div className="portal-organs-toolbar__filters">
              <div className="portal-organs-toolbar__filter">
                <xds-text variant="body-sm" weight="semibold" as="span" className="portal-organs-toolbar__label">Filtrar:</xds-text>
                <xds-select
                  ref={typeSelectRef}
                  size="sm"
                  value={typeFilter}
                  className="portal-organs-toolbar__select portal-organs-toolbar__select--type"
                >
                  <xds-select-item value="Todos">Todos</xds-select-item>
                  <xds-select-item value="AGÊNCIA">AGÊNCIA</xds-select-item>
                  <xds-select-item value="ÓRGÃO">ÓRGÃO</xds-select-item>
                  <xds-select-item value="PROGRAMA">PROGRAMA</xds-select-item>
                  <xds-select-item value="AUTARQUIA">AUTARQUIA</xds-select-item>
                  <xds-select-item value="EMPRESA">EMPRESA</xds-select-item>
                  <xds-select-item value="FUNDAÇÃO">FUNDAÇÃO</xds-select-item>
                  <xds-select-item value="SECRETARIA">SECRETARIA</xds-select-item>
                  <xds-select-item value="INSTITUTO">INSTITUTO</xds-select-item>
                </xds-select>
              </div>

              <div className="portal-organs-toolbar__filter">
                <xds-text variant="body-sm" weight="semibold" as="span" className="portal-organs-toolbar__label">Ordenar:</xds-text>
                <xds-select
                  ref={sortSelectRef}
                  size="sm"
                  value={sortOrder}
                  className="portal-organs-toolbar__select portal-organs-toolbar__select--sort"
                >
                  <xds-select-item value="A-Z">A-Z</xds-select-item>
                  <xds-select-item value="Z-A">Z-A</xds-select-item>
                </xds-select>
              </div>
            </div>
          </xds-card>

          <section className="portal-organs-grid" aria-label="Lista de órgãos">
            {filtered.map((org) => (
              <xds-card className="portal-organs-card" interactive key={org.id}>
                <div className="portal-organs-card__top">
                  <xds-tag kind="neutral">{org.acronym}</xds-tag>
                  <xds-tag kind={TYPE_KIND[org.type]}>{org.type}</xds-tag>
                </div>

                <xds-text variant="h3" as="h2" className="portal-organs-card__title">{org.name}</xds-text>

                <div className="portal-organs-card__links">
                  <xds-button kind="ghost" size="sm" icon-position="left" className="portal-organs-card__link-btn portal-organs-card__link-btn--details">
                    <xds-icon slot="icon" name="info" size="sm"></xds-icon>
                    Detalhes
                  </xds-button>
                  <xds-button
                    kind="ghost"
                    size="sm"
                    icon-position="left"
                    animation="underline"
                    className="portal-organs-card__link-btn portal-organs-card__link-btn--site"
                  >
                    <xds-icon slot="icon" name="share" size="sm"></xds-icon>
                    Site
                  </xds-button>
                </div>
              </xds-card>
            ))}
          </section>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
