/**
 * Données pour les composants de la section Contact
 */

import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter 
} from 'react-icons/fa';
import { ContactInfo, SocialLink } from './types';

/**
 * Informations de contact
 */
export const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'kevin.tene@example.com',
    link: 'mailto:kevin.tene@example.com',
    color: '#4facfe'
  },
  {
    icon: FaPhone,
    label: 'Téléphone',
    value: '+237 6XX XXX XXX',
    link: 'tel:+2376XXXXXXX',
    color: '#00f2fe'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Localisation',
    value: 'Yaoundé, Cameroun',
    link: 'https://maps.google.com/?q=Yaoundé,Cameroun',
    color: '#f093fb'
  }
];

/**
 * Liens vers les réseaux sociaux
 */
export const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevin-tene-371a6b208',
    color: '#0077B5'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    url: 'https://github.com/kevin-tene',
    color: '#333'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    url: 'https://twitter.com/kevin-tene',
    color: '#1DA1F2'
  }
];