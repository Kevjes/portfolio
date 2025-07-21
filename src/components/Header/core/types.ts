import { IconType } from 'react-icons';

export interface NavItem {
  id: string;
  label: string;
  icon: IconType;
}

export interface HeaderProps {
  activeSection: string;
  isDarkTheme?: boolean;
  toggleTheme?: () => void;
}