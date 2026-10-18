export type WindowId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'education'
  | 'certifications'
  | 'contact'
  | 'resume'
  | 'mail'
  | 'chat'
  | 'music'
  | 'photo';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

export interface DesktopIconItem {
  id: WindowId;
  label: string;
  iconType: string;
  shortcutBadge?: string;
}

export interface DockAppItem {
  id: WindowId | 'github' | 'linkedin';
  label: string;
  iconType: string;
  isExternal?: boolean;
  externalUrl?: string;
}
