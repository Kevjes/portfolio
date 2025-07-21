/**
 * Types pour les composants de la section Contact
 */

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  value: string;
  link: string;
  color: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  url: string;
  color: string;
}