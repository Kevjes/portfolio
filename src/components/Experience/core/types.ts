export interface ExperienceItem {
  id: string;
  type: 'work' | 'education' | 'project';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ComponentType<any>;
  color: string;
  logoUrl?: string;
}

export interface Achievement {
  number: string;
  label: string;
  description: string;
  icon?: React.ComponentType<any>;
}