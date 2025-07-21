import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color: string;
}

export interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

export interface ExpertiseCard {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  technologies: Technology[];
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
}