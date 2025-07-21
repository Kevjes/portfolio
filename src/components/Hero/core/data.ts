import { FaCode, FaMobile, FaServer, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiFlutter, SiReact, SiTypescript, SiDart, SiJavascript, SiNodedotjs, SiExpress, SiNestjs } from 'react-icons/si';
import { ExpertiseCard, SocialLink } from './types';

export const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/kevin-tene/',
    label: 'LinkedIn',
    color: '#0077B5'
  },
  {
    icon: FaGithub,
    href: 'https://github.com/kevintene',
    label: 'GitHub',
    color: '#333'
  },
  {
    icon: FaEnvelope,
    href: 'mailto:contact@kevintene.com',
    label: 'Email',
    color: '#EA4335'
  }
];

export const expertiseCards: ExpertiseCard[] = [
  { 
    id: 1,
    icon: FaMobile, 
    title: 'Mobile', 
    description: 'Développement d\'applications mobiles cross-platform performantes et intuitives.',
    technologies: [{ icon: SiFlutter, name: 'Flutter', color: '#54C5F8' }, { icon: SiDart, name: 'Dart', color: '#0175C2' }],
    gradient: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
    gradientFrom: '#6A11CB',
    gradientTo: '#2575FC'
  },
  { 
    id: 2,
    icon: FaCode, 
    title: 'Web', 
    description: 'Création d\'interfaces web modernes, réactives et accessibles.',
    technologies: [{ icon: SiReact, name: 'React', color: '#61DAFB' }, { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' }, { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' }],
    gradient: 'linear-gradient(135deg, #FF4E50 0%, #F9D423 100%)',
    gradientFrom: '#FF4E50',
    gradientTo: '#F9D423'
  },
  { 
    id: 3,
    icon: FaServer, 
    title: 'Backend', 
    description: 'Développement d\'APIs robustes et évolutives pour vos applications.',
    technologies: [{ icon: SiNodedotjs, name: 'Node.js', color: '#339933' }, { icon: SiExpress, name: 'Express', color: '#000000' }, { icon: SiNestjs, name: 'NestJS', color: '#E0234E' }],
    gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
    gradientFrom: '#11998E',
    gradientTo: '#38EF7D'
  }
];