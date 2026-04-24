import { useEffect, useMemo, useRef, useState } from 'react';
import PortalHeader from './PortalHeader';
import PortalFooter from './PortalFooter';
import { NotificationItem } from '../data';

interface NewsPageProps {
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

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: 'Infraestrutura' | 'Saúde' | 'Educação' | 'Obras' | 'Tecnologia' | 'Economia';
  source: string;
  date: string;
  image: string;
}

const NEWS_LIST: NewsItem[] = [
  {
    id: '1',
    title: 'Plano de Investimento em Obras Urbanas chega a R$ 100 milhões',
    summary: 'Governo anuncia novo pacote de revitalização de rodovias e modernização do transporte público na região metropolitana.',
    category: 'Infraestrutura',
    source: 'SEC. DE INFRAESTRUTURA',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80',
  },
  {
    id: '2',
    title: 'Novos mutirões de vacinação iniciam em todo o estado',
    summary: 'Campanha visa aumentar a cobertura vacinal contra gripe e covid-19 em todas as regiões.',
    category: 'Saúde',
    source: 'SEC. DE SAÚDE',
    date: '2024-05-14',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    title: 'Entrega de 50 mil novos notebooks para estudantes',
    summary: 'Programa de inclusão digital beneficia alunos da rede pública estadual do ensino médio.',
    category: 'Educação',
    source: 'SEC. DE EDUCAÇÃO',
    date: '2024-05-12',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '4',
    title: 'Conclusão da ponte sobre o Rio Claro desafoga tráfego',
    summary: 'Obra aguardada há 10 anos é entregue e deve reduzir o tempo de deslocamento em 40%.',
    category: 'Obras',
    source: 'SEC. DE OBRAS',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '5',
    title: 'Novo hub de inovação acelera projetos de startups locais',
    summary: 'Espaço reúne mentoria, laboratórios e conexão com investidores para impulsionar negócios.',
    category: 'Tecnologia',
    source: 'SEC. DE CIÊNCIA E TECNOLOGIA',
    date: '2024-05-08',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '6',
    title: 'Linha de crédito para microempreendedores é ampliada',
    summary: 'Programa oferece juros reduzidos e carência de até seis meses para pequenos negócios.',
    category: 'Economia',
    source: 'SEC. DE DESENVOLVIMENTO ECONÔMICO',
    date: '2024-05-06',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '7',
    title: 'Hospital regional recebe novos equipamentos de imagem',
    summary: 'Modernização deve reduzir filas para exames e agilizar diagnósticos de alta complexidade.',
    category: 'Saúde',
    source: 'SEC. DE SAÚDE',
    date: '2024-05-05',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '8',
    title: 'Escolas técnicas terão laboratórios maker em 2024',
    summary: 'Projeto inclui robótica, impressão 3D e trilhas práticas para formação profissional.',
    category: 'Educação',
    source: 'SEC. DE EDUCAÇÃO',
    date: '2024-05-04',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '9',
    title: 'Novo corredor viário melhora acesso à zona industrial',
    summary: 'Intervenção diminui gargalos logísticos e aumenta a segurança no tráfego pesado.',
    category: 'Infraestrutura',
    source: 'SEC. DE INFRAESTRUTURA',
    date: '2024-05-03',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
];

const ALL_CATEGORIES = ['Todas as Categorias', 'Infraestrutura', 'Saúde', 'Educação', 'Obras', 'Tecnologia', 'Economia'] as const;

const CATEGORY_KIND: Record<NewsItem['category'], 'info' | 'success' | 'warning' | 'danger'> = {
  Infraestrutura: 'info',
  Saúde: 'success',
  Educação: 'warning',
  Obras: 'danger',
  Tecnologia: 'info',
  Economia: 'warning',
};

function formatCardDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

function formatFeaturedDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-');
  const monthMap = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];
  const monthName = monthMap[Math.max(0, Number(month) - 1)] ?? month;
  return `${Number(day)} de ${monthName}, ${year}`;
}

export default function NewsPage({
  isLoggedIn,
  userName,
  avatarUrl,
  cpf,
  notifications,
  globalSearchTerm,
  setGlobalSearchTerm,
  onNavigate,
  onFontSize,
}: NewsPageProps) {
  const [categoryDraft, setCategoryDraft] = useState<(typeof ALL_CATEGORIES)[number]>('Todas as Categorias');
  const [dateDraft, setDateDraft] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<(typeof ALL_CATEGORIES)[number]>('Todas as Categorias');
  const [selectedDate, setSelectedDate] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categorySelectRef = useRef<HTMLElement | null>(null);
  const dateInputRef = useRef<HTMLElement | null>(null);
  const emailInputRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const categorySelect = categorySelectRef.current;
    if (!categorySelect) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue) return pathValue;
      return (categorySelect as HTMLElement & { value?: string }).value ?? '';
    };

    const handleCategory = (event: Event) => {
      const value = resolveValue(event);
      if (!value) return;
      if (ALL_CATEGORIES.includes(value as (typeof ALL_CATEGORIES)[number])) {
        setCategoryDraft(value as (typeof ALL_CATEGORIES)[number]);
      }
    };

    categorySelect.addEventListener('change', handleCategory);

    return () => {
      categorySelect.removeEventListener('change', handleCategory);
    };
  }, []);

  useEffect(() => {
    const dateInput = dateInputRef.current;
    if (!dateInput) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue !== undefined) return pathValue;
      return (dateInput as HTMLElement & { value?: string }).value ?? '';
    };

    const handleDate = (event: Event) => {
      const value = resolveValue(event);
      setDateDraft(value ?? '');
    };

    dateInput.addEventListener('change', handleDate);
    dateInput.addEventListener('input', handleDate);

    return () => {
      dateInput.removeEventListener('change', handleDate);
      dateInput.removeEventListener('input', handleDate);
    };
  }, []);

  useEffect(() => {
    const emailInput = emailInputRef.current;
    if (!emailInput) return;

    const resolveValue = (event: Event): string => {
      const fromPath = event
        .composedPath()
        .find((node) => typeof (node as { value?: unknown }).value === 'string');
      const pathValue = (fromPath as { value?: string } | undefined)?.value;
      if (pathValue !== undefined) return pathValue;
      return (emailInput as HTMLElement & { value?: string }).value ?? '';
    };

    const handleEmail = (event: Event) => {
      const value = resolveValue(event);
      setNewsletterEmail(value ?? '');
    };

    emailInput.addEventListener('change', handleEmail);
    emailInput.addEventListener('input', handleEmail);

    return () => {
      emailInput.removeEventListener('change', handleEmail);
      emailInput.removeEventListener('input', handleEmail);
    };
  }, []);

  const filteredNews = useMemo(() => {
    return NEWS_LIST.filter((item) => {
      const categoryOk = selectedCategory === 'Todas as Categorias' || item.category === selectedCategory;
      const dateOk = !selectedDate || item.date === selectedDate;
      return categoryOk && dateOk;
    });
  }, [selectedCategory, selectedDate]);

  const featured = filteredNews[0] ?? NEWS_LIST[0];
  const newsCards = (filteredNews.length > 0 ? filteredNews.slice(1) : []).slice(0, 6);

  const applyFilters = () => {
    setSelectedCategory(categoryDraft);
    setSelectedDate(dateDraft);
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
        view="news"
      />

      <main className="portal-news-main">
        <div className="portal-shell">
          <header className="portal-news-head">
            <div>
              <xds-breadcrumb no-trailing-slash>
                <xds-breadcrumb-item href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>
                  Início
                </xds-breadcrumb-item>
                <xds-breadcrumb-item is-current-page>Notícias</xds-breadcrumb-item>
              </xds-breadcrumb>

              <xds-text variant="h1" as="h1">Central de Notícias</xds-text>
            </div>

            <div className="portal-news-filters">
              <xds-select ref={categorySelectRef} value={categoryDraft}>
                {ALL_CATEGORIES.map((category) => (
                  <xds-select-item key={category} value={category}>{category}</xds-select-item>
                ))}
              </xds-select>

              <xds-input ref={dateInputRef} type="date" value={dateDraft}></xds-input>

              <xds-button kind="primary" size="lg" onClick={applyFilters}>
                <xds-icon slot="icon" name="filter_list" size="sm"></xds-icon>
                Filtrar
              </xds-button>
            </div>
          </header>

          {filteredNews.length > 0 ? (
            <>
              <article
                className="portal-news-featured"
                style={{ backgroundImage: `url(${featured.image})` }}
              >
                <div className="portal-news-featured__overlay" />
                <div className="portal-news-featured__content">
                  <xds-tag kind={CATEGORY_KIND[featured.category]}>
                    {featured.category.toUpperCase()}
                  </xds-tag>
                  <xds-text variant="h1-hero" as="h2" className="portal-news-featured__title">
                    {featured.title}
                  </xds-text>
                  <xds-text variant="h2" as="p" weight="regular" className="portal-news-featured__summary">
                    {featured.summary}
                  </xds-text>
                  <div className="portal-news-featured__actions">
                    <xds-button kind="secondary" size="lg">Ler notícia completa</xds-button>
                    <span className="portal-news-featured__date">
                      <xds-icon name="schedule" size="sm"></xds-icon>
                      {formatFeaturedDate(featured.date)}
                    </span>
                  </div>
                </div>
              </article>

              <section className="portal-news-page-grid" aria-label="Últimas notícias">
                {newsCards.map((news) => (
                  <xds-card key={news.id} className="portal-news-page-card" padding="none">
                    <div className="portal-news-page-card__media">
                      <img src={news.image} alt={news.title} />
                      <xds-tag kind={CATEGORY_KIND[news.category]}>
                        {news.category.toUpperCase()}
                      </xds-tag>
                    </div>

                    <div className="portal-news-page-card__body">
                      <xds-text variant="caption" as="p" className="portal-news-page-card__meta">
                        <xds-icon name="calendar_today" size="sm"></xds-icon>
                        {formatCardDate(news.date)}
                        <span>•</span>
                        {news.source}
                      </xds-text>

                      <xds-text variant="h2" as="h3" className="portal-news-page-card__title">{news.title}</xds-text>
                      <xds-text variant="body" as="p" className="portal-news-page-card__summary">{news.summary}</xds-text>

                      <xds-button kind="tertiary" size="md">
                        Saiba mais
                        <xds-icon slot="icon" name="arrow_forward" size="sm"></xds-icon>
                      </xds-button>
                    </div>
                  </xds-card>
                ))}
              </section>
            </>
          ) : (
            <section className="portal-news-empty">
              <xds-card padding="lg">
                <xds-text variant="h3" as="h2">Nenhuma notícia encontrada</xds-text>
                <xds-text variant="body" as="p">Tente remover os filtros para visualizar mais resultados.</xds-text>
                <xds-button
                  kind="secondary"
                  onClick={() => {
                    setCategoryDraft('Todas as Categorias');
                    setDateDraft('');
                    setSelectedCategory('Todas as Categorias');
                    setSelectedDate('');
                  }}
                >
                  Limpar filtros
                </xds-button>
              </xds-card>
            </section>
          )}

          <section className="portal-news-signup">
            <xds-card className="portal-news-signup__card" padding="lg">
              <div className="portal-news-signup__copy">
                <xds-text variant="h2" as="h2">Fique por dentro do que acontece</xds-text>
                <xds-text variant="body" as="p">Receba as principais notícias e editais diretamente no seu e-mail.</xds-text>
              </div>

              <form
                className="portal-news-signup__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterEmail('');
                }}
              >
                <xds-input
                  ref={emailInputRef}
                  type="email"
                  value={newsletterEmail}
                  placeholder="Seu melhor e-mail"
                ></xds-input>
                <xds-button type="submit" kind="primary" size="xl">Inscrever</xds-button>
                <xds-text variant="caption" as="span" italic>
                  Respeitamos sua privacidade.
                </xds-text>
              </form>
            </xds-card>
          </section>
        </div>
      </main>

      <PortalFooter onNavigate={onNavigate} />
    </div>
  );
}
