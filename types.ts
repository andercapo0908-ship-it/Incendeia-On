
export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export enum VideoLevel {
  BEGINNER = 'Iniciante',
  INTERMEDIATE = 'Intermediário',
  ADVANCED = 'Avançado',
  MESTRE = 'Mestre'
}

export enum Language {
  PT = 'PT',
  ES = 'ES'
}

export enum Graduation {
  ALUNO = 'Aluno',
  GRADUADO = 'Graduado',
  MONITOR = 'Monitor',
  INSTRUTOR = 'Instrutor',
  PROFESSOR = 'Professor',
  CONTRA_MESTRE = 'Contra-Mestre',
  MESTRE = 'Mestre'
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  showPatterns: boolean;
  layoutMode: 'compact' | 'spacious';
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  type: 'IMAGE' | 'VIDEO';
  category: string;
}

export interface PartnerApp {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  category: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: VideoLevel;
  category: string;
}

export interface TrainingLocation {
  id: string;
  name: string;
  address: string;
  schedule: string;
  contact: string;
  image: string;
}

export interface CapoeiraEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'RODA' | 'EVENTO';
}

export interface MasterHistory {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  achievements: string[];
}

export interface ForumPost {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  date: string;
}

export interface UserProfile {
  name: string;
  nickname: string;
  birthDate: string;
  contact: string;
  graduation: Graduation;
  level: VideoLevel;
  progress: number;
  streak: number;
  achievements: string[];
}
