import { FaBriefcase, FaGraduationCap, FaCode, FaGamepad, FaLaptopCode, FaAward, FaUsers, FaMobileAlt } from 'react-icons/fa';
import { SiFlutter} from 'react-icons/si';
import { ExperienceItem, Achievement } from './types';

export const experiences: ExperienceItem[] = [
  {
    id: 'kiroo-games',
    type: 'work',
    title: 'Développeur Web',
    company: 'Kiro\'o Games',
    location: 'Cameroun',
    period: '2022 - Présent',
    description: [
      'Développement d\'applications web modernes pour l\'industrie du gaming',
      'Collaboration avec l\'équipe de développement sur des projets innovants',
      'Optimisation des performances et de l\'expérience utilisateur',
      'Intégration d\'APIs et services backend pour les jeux'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'API REST'],
    icon: FaGamepad,
    color: '#4facfe'
  },
  {
    id: 'flutter-dev',
    type: 'work',
    title: 'Développeur Flutter Freelance',
    company: 'Projets Indépendants',
    location: 'Remote',
    period: '2021 - Présent',
    description: [
      'Développement d\'applications mobiles cross-platform avec Flutter',
      'Création d\'applications Android, iOS, Web et Windows',
      'Gestion complète des projets de la conception au déploiement',
      'Plus de 2 ans d\'expérience avec des clients internationaux'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    icon: SiFlutter,
    color: '#02569B'
  },
  {
    id: 'backend-dev',
    type: 'work',
    title: 'Développeur Backend Junior',
    company: 'Projets Personnels',
    location: 'Cameroun',
    period: '2020 - 2022',
    description: [
      'Développement d\'APIs REST avec NestJS et Java',
      'Conception et implémentation de bases de données',
      'Apprentissage des architectures microservices',
      'Intégration de services tiers et authentification'
    ],
    technologies: ['NestJS', 'Java', 'PostgreSQL', 'MongoDB'],
    icon: FaCode,
    color: '#E0234E'
  },
  {
    id: 'mathematics-degree',
    type: 'education',
    title: 'Diplôme en Mathématiques',
    company: 'Université',
    location: 'Cameroun',
    period: '2018 - 2021',
    description: [
      'Formation solide en mathématiques appliquées et théoriques',
      'Spécialisation en informatique et programmation',
      'Développement de la logique analytique et de résolution de problèmes',
      'Projets de programmation et algorithmes avancés'
    ],
    technologies: ['Python', 'Algorithmes', 'Statistiques', 'Logique'],
    icon: FaGraduationCap,
    color: '#667eea'
  },
  {
    id: 'portfolio-project',
    type: 'project',
    title: 'Portfolio Personnel',
    company: 'Projet Personnel',
    location: 'Remote',
    period: '2023',
    description: [
      'Conception et développement d\'un portfolio interactif avec React et TypeScript',
      'Implémentation d\'animations fluides et d\'effets visuels modernes',
      'Optimisation pour les performances et l\'accessibilité',
      'Déploiement et maintenance continue'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS Avancé'],
    icon: FaLaptopCode,
    color: '#6c5ce7'
  }
];

export const achievements: Achievement[] = [
  {
    number: '2+',
    label: 'Années d\'expérience',
    description: 'En développement Flutter et Web',
    icon: FaBriefcase
  },
  {
    number: '10+',
    label: 'Projets réalisés',
    description: 'Applications mobiles et web',
    icon: FaLaptopCode
  },
  {
    number: '4',
    label: 'Plateformes',
    description: 'Android, iOS, Web, Windows',
    icon: FaMobileAlt
  },
  {
    number: '100%',
    label: 'Satisfaction client',
    description: 'Projets livrés avec succès',
    icon: FaAward
  },
  {
    number: '5+',
    label: 'Collaborations',
    description: 'Avec des équipes internationales',
    icon: FaUsers
  }
];