
import { VideoLesson, VideoLevel, MasterHistory, ForumPost, TrainingLocation, CapoeiraEvent, GalleryItem, PartnerApp } from './types';

export const COLORS = {
  black: '#0a0a0a',
  red: '#dc2626',
  orange: '#f97316',
  yellow: '#fbbf24'
};

export const TRANSLATIONS = {
  PT: {
    welcome: 'Salve, Guerreiro!',
    home: 'Início',
    classes: 'Videoaulas',
    lives: 'Lives',
    community: 'Comunidade',
    masters: 'Mestres do Grupo',
    gallery: 'Galeria Multimedia',
    partners: 'Parceiros e Apps',
    admin: 'Administração',
    locations: 'Locais',
    events: 'Eventos e Rodas',
    contact: 'Contato',
    language: 'Idioma',
    askMaster: 'Pergunte ao mestre...',
    favorites: 'Meus Favoritos',
    upcomingEvents: 'Próximos Eventos',
    logout: 'Sair',
    profile: 'Meu Perfil',
    registration: 'Cadastro de Aluno',
    name: 'Nome Completo',
    nickname: 'Apelido',
    birthDate: 'Data de Nascimento',
    graduation: 'Graduação',
    save: 'Salvar Cadastro'
  },
  ES: {
    welcome: '¡Salve, Guerrero!',
    home: 'Inicio',
    classes: 'Clases',
    lives: 'En Vivo',
    community: 'Comunidad',
    masters: 'Maestros del Grupo',
    gallery: 'Galería',
    partners: 'Socios',
    admin: 'Administración',
    locations: 'Locales',
    events: 'Eventos y Ruedas',
    contact: 'Contacto',
    language: 'Idioma',
    askMaster: 'Pregunta al maestro...',
    favorites: 'Mis Favoritos',
    upcomingEvents: 'Próximos Eventos',
    logout: 'Salir',
    profile: 'Mi Perfil',
    registration: 'Registro de Alumno',
    name: 'Nombre Completo',
    nickname: 'Apodo',
    birthDate: 'Fecha de Nascimento',
    graduation: 'Graduación',
    save: 'Guardar Registro'
  }
};

export const MOCK_GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Roda de Abertura 2024', url: 'https://images.unsplash.com/photo-1590554524412-168a69a4632c?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Eventos' },
  { id: 'g2', title: 'Treino na Praia', url: 'https://images.unsplash.com/photo-1549413203-89808a54832f?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Treinos' },
  { id: 'g3', title: 'Batizado Anual', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Eventos' },
  { id: 'g4', title: 'Movimentos Básicos', url: 'https://images.unsplash.com/photo-1599058917233-358043bc6494?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Técnica' },
  { id: 'g5', title: 'Oficina de Berimbau', url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Cultura' },
  { id: 'g6', title: 'Aulão de Domingo', url: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=800&auto=format&fit=crop', type: 'IMAGE', category: 'Treinos' },
];

export const MOCK_PARTNERS: PartnerApp[] = [
  { 
    id: 'p1', 
    name: 'Berimbau Pro', 
    description: 'Afinador e simulador de ritmos para prática individual.', 
    logo: 'https://cdn-icons-png.flaticon.com/512/3844/3844724.png', 
    url: '#', 
    category: 'Música' 
  },
  { 
    id: 'p2', 
    name: 'Loja SDOBRADO', 
    description: 'Equipamentos premium para capoeira, instrumentos e vestuário tradicional.', 
    logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png', 
    url: '#', 
    category: 'Loja' 
  },
  { 
    id: 'p3', 
    name: 'Nutri-Guerreiro', 
    description: 'Plataforma de dieta focada no alto rendimento da capoeira.', 
    logo: 'https://cdn-icons-png.flaticon.com/512/2927/2927347.png', 
    url: '#', 
    category: 'Saúde' 
  }
];

export const MOCK_LOCATIONS: TrainingLocation[] = [
  {
    id: 'loc1',
    name: 'QG Incendeia - Manaus',
    address: 'Av. Eduardo Ribeiro, Centro, Manaus - AM',
    schedule: 'Seg/Qua/Sex - 19:00',
    contact: '(92) 99999-0000',
    image: 'https://images.unsplash.com/photo-1549413203-89808a54832f?q=80&w=400&h=300&auto=format&fit=crop'
  },
  {
    id: 'loc2',
    name: 'Polo Cultural Amazônia',
    address: 'Parque Dez de Novembro, Manaus - AM',
    schedule: 'Ter/Qui - 18:30',
    contact: '(92) 99999-1111',
    image: 'https://images.unsplash.com/photo-1517836762399-3fd3e1c31f0a?q=80&w=400&h=300&auto=format&fit=crop'
  }
];

export const MOCK_EVENTS: CapoeiraEvent[] = [
  {
    id: 'ev1',
    title: 'Roda de Lua Cheia',
    date: '25/06/2024',
    time: '20:00',
    location: 'QG Incendeia',
    description: 'Nossa tradicional roda mensal sob a luz da lua.',
    type: 'RODA'
  },
  {
    id: 'ev2',
    title: 'Batizado e Troca de Cordas 2024',
    date: '12/10/2024',
    time: '09:00',
    location: 'Teatro Amazonas',
    description: 'Grande evento de graduação anual com mestres convidados.',
    type: 'EVENTO'
  }
];

export const MOCK_VIDEOS: VideoLesson[] = [
  {
    id: '1',
    title: 'Fundamentos da Ginga',
    description: 'A base de todo capoeirista. Aprenda a ginga clássica com equilíbrio e ritmo.',
    thumbnail: 'https://picsum.photos/seed/ginga/800/450',
    duration: '15:20',
    level: VideoLevel.BEGINNER,
    category: 'Fundamentos'
  },
  {
    id: '2',
    title: 'Meia-Lua de Compasso',
    description: 'Domine um dos golpes mais icônicos da capoeira com precisão técnica.',
    thumbnail: 'https://picsum.photos/seed/meialua/800/450',
    duration: '12:45',
    level: VideoLevel.INTERMEDIATE,
    category: 'Golpes'
  },
  {
    id: '3',
    title: 'Estratégia na Roda',
    description: 'Leitura de jogo e antecipação de movimentos para capoeiristas avançados.',
    thumbnail: 'https://picsum.photos/seed/roda/800/450',
    duration: '22:10',
    level: VideoLevel.ADVANCED,
    category: 'Estratégia'
  }
];

export const MOCK_MASTERS: MasterHistory[] = [
  {
    id: 'm1',
    name: 'Mestre Cristiano',
    title: 'Fundador e Presidente',
    bio: 'Fundador e presidente do Grupo Incendeia Capoeira. Lidera a instituição com visão e dedicação, preservando as tradições e expandindo o axé da capoeira através de sua voz e liderança na roda. Sua trajetória é marcada pelo compromisso com as raízes amazônicas e o fortalecimento da comunidade capoeirista no norte do Brasil.',
    image: 'https://storage.googleapis.com/aistudio-community-static/content/master_cristiano.png',
    achievements: ['Fundador do Grupo Incendeia', 'Presidente da Instituição', 'Líder do Movimento Fogo nas Rodas']
  },
  {
    id: 'm2',
    name: 'Mestre Duende',
    title: 'Mestre de Graduação',
    bio: 'Formado a corda vermelha em 2025, Mestre Duende é conhecido por sua agilidade e técnica refinada. Dedica sua vida ao ensino dos fundamentos para as novas gerações, focando na disciplina e no respeito ao berimbau como guia do jogo.',
    image: 'https://storage.googleapis.com/aistudio-community-static/content/master_duende.png',
    achievements: ['Formado Corda Vermelha 2025', 'Coordenador Pedagógico', 'Especialista em Berimbau']
  }
];

export const MOCK_FORUM: ForumPost[] = [
  {
    id: 'p1',
    author: 'João Graduado',
    title: 'Dúvidas sobre o Berimbau Viola',
    content: 'Como vocês afinam o berimbau viola para manter aquele som agudo sem estourar o arame?',
    likes: 12,
    comments: 5,
    date: '2 horas atrás'
  },
  {
    id: 'p2',
    author: 'Maria Capoeira',
    title: 'Roda na Praça Sábado!',
    content: 'Pessoal, vamos organizar uma roda aberta na Praça Central às 16h. Todos convidados!',
    likes: 45,
    comments: 18,
    date: '5 horas atrás'
  }
];
