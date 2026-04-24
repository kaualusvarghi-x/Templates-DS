export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'Digital' | 'Presencial' | 'Híbrido';
  cost: number;
  isFree: boolean;
  icon?:
    | 'directions_car'
    | 'badge'
    | 'smartphone'
    | 'school'
    | 'medical_services'
    | 'policy'
    | 'home'
    | 'work'
    | 'store'
    | 'forest';
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'system' | 'update' | 'alert' | 'info';
}

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Renovação de Carteira Nacional de Habilitação (CNH)',
    description: 'Serviço para motoristas que precisam renovar sua licença para conduzir veículos. O processo pode ser iniciado online.',
    category: 'Transporte e Trânsito',
    type: 'Digital',
    cost: 112.00,
    isFree: false,
    icon: 'directions_car',
  },
  {
    id: '2',
    title: 'Segunda via da CNH por Perda ou Roubo',
    description: 'Solicitação de novo documento físico em caso de extravio, furto ou roubo. Requer boletim de ocorrência.',
    category: 'Transporte e Trânsito',
    type: 'Presencial',
    cost: 85.00,
    isFree: false,
    icon: 'badge',
  },
  {
    id: '3',
    title: 'Habilitação Digital (CDT)',
    description: 'Baixe sua CNH Digital diretamente no seu smartphone. O documento tem o mesmo valor jurídico da versão impressa.',
    category: 'Transporte e Trânsito',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'smartphone',
  },
  {
    id: '4',
    title: 'Emissão de Carteira de Identidade (RG)',
    description: 'Solicitação de 1ª e 2ª via da carteira de identidade com agendamento prévio.',
    category: 'Segurança',
    type: 'Híbrido',
    cost: 0,
    isFree: true,
    icon: 'badge',
  },
  {
    id: '5',
    title: 'Matrícula Escolar Online',
    description: 'Realize a pré-matrícula na rede estadual de ensino de forma rápida e segura.',
    category: 'Educação',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'school',
  },
  {
    id: '6',
    title: 'Agendamento de Consultas Médicas',
    description: 'Marque consultas na rede pública de saúde sem sair de casa.',
    category: 'Saúde',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'medical_services',
  },
  {
    id: '7',
    title: 'Boletim de Ocorrência Online',
    description: 'Registre ocorrências de menor gravidade sem precisar ir à delegacia.',
    category: 'Segurança',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'policy',
  },
  {
    id: '8',
    title: 'Inscrição em Programas Habitacionais',
    description: 'Cadastre-se para participar de sorteios de moradia popular.',
    category: 'Habitação',
    type: 'Presencial',
    cost: 0,
    isFree: true,
    icon: 'home',
  },
  {
    id: '9',
    title: 'Licenciamento Anual de Veículos',
    description: 'Emita o CRLV do seu veículo após quitação de débitos.',
    category: 'Transporte e Trânsito',
    type: 'Digital',
    cost: 155.00,
    isFree: false,
    icon: 'directions_car',
  },
  {
    id: '10',
    title: 'Seguro Desemprego',
    description: 'Solicitação do benefício para trabalhadores demitidos sem justa causa.',
    category: 'Assistência Social',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'work',
  },
  {
    id: '11',
    title: 'Abertura de MEI',
    description: 'Formalize seu pequeno negócio e obtenha CNPJ na hora.',
    category: 'Economia',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'store',
  },
  {
    id: '12',
    title: 'Denúncia Ambiental',
    description: 'Relate crimes ambientais como desmatamento e poluição.',
    category: 'Meio Ambiente',
    type: 'Digital',
    cost: 0,
    isFree: true,
    icon: 'forest',
  },
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    title: 'Seu IPTU 2024 está disponível',
    message: 'Acesse para emitir a guia com desconto de 10% para pagamento à vista.',
    date: 'Hoje, 09:30',
    read: false,
    type: 'system',
  },
  {
    id: '2',
    title: 'Documento Aprovado',
    message: 'Sua foto foi aprovada para a Carteira de Identidade. Aguarde a emissão.',
    date: 'Ontem, 14:20',
    read: false,
    type: 'update',
  },
  {
    id: '3',
    title: 'Campanha de Vacinação',
    message: 'A campanha de vacinação contra a gripe começa na próxima segunda-feira.',
    date: '02/05/2024',
    read: true,
    type: 'info',
  },
  {
    id: '4',
    title: 'Manutenção no Sistema',
    message: 'O sistema de emissão de notas fiscais ficará indisponível no domingo.',
    date: '01/05/2024',
    read: true,
    type: 'alert',
  },
];
