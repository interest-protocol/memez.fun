export interface ActionCardTabsProps {
  activeColor: string;
}

export interface ActionCardTabsItemProps {
  title: string;
  isActive: boolean;
  activeColor: string;
  onClick: () => void;
}
