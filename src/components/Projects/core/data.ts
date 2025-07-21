import { FaMobile, FaDesktop, FaCode } from 'react-icons/fa';
import { SiFlutter, SiReact, SiTypescript, SiFirebase, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { Project, Category } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-flutter',
    title: 'E-Commerce Mobile App',
    description: 'Application mobile de commerce électronique complète avec Flutter',
    longDescription: 'Une application mobile e-commerce moderne développée avec Flutter, offrant une expérience utilisateur fluide avec gestion des produits, panier, paiements et authentification utilisateur.',
    category: 'mobile',
    technologies: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
    ],
    features: [
      'Interface utilisateur moderne et responsive',
      'Authentification sécurisée avec Firebase',
      'Gestion du panier et des commandes',
      'Intégration de paiements en ligne',
      'Notifications push en temps réel',
      'Mode hors ligne avec synchronisation'
    ],
    image: '/api/placeholder/400/300',
    githubUrl: 'https://github.com/kevin-tene/ecommerce-flutter',
    status: 'completed',
    color: '#4facfe'
  },
  {
    id: 'portfolio-react',
    title: 'Portfolio React TypeScript',
    description: 'Portfolio personnel avec design liquid glass et animations avancées',
    longDescription: 'Un portfolio moderne développé avec React et TypeScript, featuring un design liquid glass unique avec des animations fluides et une expérience utilisateur immersive.',
    category: 'web',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
    ],
    features: [
      'Design liquid glass innovant',
      'Animations fluides avec Framer Motion',
      'Interface responsive et moderne',
      'Optimisation des performances',
      'SEO optimisé',
      'Mode sombre/clair'
    ],
    image: '/api/placeholder/400/300',
    githubUrl: 'https://github.com/kevin-tene/portfolio-react',
    liveUrl: 'https://kevin-tene-portfolio.vercel.app',
    status: 'completed',
    color: '#00f2fe'
  },
  {
    id: 'task-manager-fullstack',
    title: 'Task Manager Full-Stack',
    description: 'Application de gestion de tâches avec backend NestJS et frontend React',
    longDescription: 'Une application complète de gestion de tâches avec un backend robuste en NestJS et un frontend moderne en React, incluant authentification, collaboration en équipe et notifications.',
    category: 'fullstack',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'NestJS', icon: SiNodedotjs, color: '#E0234E' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
    ],
    features: [
      'Gestion complète des tâches et projets',
      'Collaboration en équipe en temps réel',
      'Authentification JWT sécurisée',
      'API REST documentée avec Swagger',
      'Interface drag & drop intuitive',
      'Notifications et rappels automatiques'
    ],
    image: '/api/placeholder/400/300',
    githubUrl: 'https://github.com/kevin-tene/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    status: 'completed',
    color: '#f093fb'
  },
  {
    id: 'weather-flutter',
    title: 'Weather App Flutter',
    description: 'Application météo avec géolocalisation et prévisions détaillées',
    longDescription: 'Application météo moderne avec Flutter offrant des prévisions précises, géolocalisation automatique, et une interface utilisateur élégante avec animations météorologiques.',
    category: 'mobile',
    technologies: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
    ],
    features: [
      'Prévisions météo en temps réel',
      'Géolocalisation automatique',
      'Interface animée selon la météo',
      'Historique des données météo',
      'Alertes météorologiques',
      'Mode hors ligne'
    ],
    image: '/api/placeholder/400/300',
    githubUrl: 'https://github.com/kevin-tene/weather-flutter',
    status: 'in-progress',
    color: '#667eea'
  },
  {
    id: 'gaming-platform',
    title: 'Gaming Platform Web',
    description: 'Plateforme web pour l\'industrie du gaming chez Kiro\'o Games',
    longDescription: 'Développement d\'une plateforme web moderne pour l\'industrie du gaming, incluant gestion des joueurs, statistiques en temps réel et intégration avec les systèmes de jeu.',
    category: 'web',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ],
    features: [
      'Dashboard administrateur avancé',
      'Gestion des profils joueurs',
      'Statistiques en temps réel',
      'Intégration APIs de jeux',
      'Système de notifications',
      'Interface responsive'
    ],
    image: '/api/placeholder/400/300',
    status: 'in-progress',
    color: '#764ba2'
  },
  {
    id: 'ai-chat-app',
    title: 'AI Chat Application',
    description: 'Application de chat avec intelligence artificielle intégrée',
    longDescription: 'Une application de chat moderne intégrant l\'intelligence artificielle pour des conversations intelligentes, avec support multiplateforme et fonctionnalités avancées.',
    category: 'fullstack',
    technologies: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'NestJS', icon: SiNodedotjs, color: '#E0234E' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ],
    features: [
      'Chat en temps réel avec IA',
      'Support multiplateforme',
      'Reconnaissance vocale',
      'Traduction automatique',
      'Historique des conversations',
      'Interface conversationnelle intuitive'
    ],
    image: '/api/placeholder/400/300',
    status: 'planned',
    color: '#ff6b6b'
  }
];

export const categories: Category[] = [
  { id: 'all', label: 'Tous les projets', icon: FaCode },
  { id: 'mobile', label: 'Mobile', icon: FaMobile },
  { id: 'web', label: 'Web', icon: FaDesktop },
  { id: 'fullstack', label: 'Full-Stack', icon: FaCode }
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return '#4CAF50';
    case 'in-progress': return '#FF9800';
    case 'planned': return '#9C27B0';
    default: return '#757575';
  }
};

export const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Terminé';
    case 'in-progress': return 'En cours';
    case 'planned': return 'Planifié';
    default: return 'Inconnu';
  }
};