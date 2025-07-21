import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { NavItem } from '../core/types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Accueil', icon: FaHome },
  { id: 'about', label: 'À propos', icon: FaUser },
  { id: 'skills', label: 'Compétences', icon: FaCode },
  { id: 'experience', label: 'Expérience', icon: FaBriefcase },
  { id: 'projects', label: 'Projets', icon: FaProjectDiagram },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];