export interface Technology {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'mobile' | 'web' | 'fullstack';
  technologies: Technology[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  color: string;
}

export interface Category {
  id: 'all' | 'mobile' | 'web' | 'fullstack';
  label: string;
  icon: React.ComponentType<any>;
}

export interface ProjectsProps {}