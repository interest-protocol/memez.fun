export interface ActionCardTabsProps {
  activeColor: string;
  activeTab: 'buy' | 'sell' | 'burn';
  setActiveTab: (type: 'buy' | 'sell' | 'burn') => void;
}

export interface ActionCardTabsItemProps {
  title: string;
  isActive: boolean;
  activeColor: string;
  onClick: () => void;
}
