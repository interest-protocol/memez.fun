export interface ProfileTabsItemProps {
  title: string;
  isSelected?: boolean;
  onSelect: () => void;
}
export enum ProfileTabsEnum {
  History,
  CoinOwned,
  CoinCreated,
}

export interface ProfileTabsProps {
  currentTab: ProfileTabsEnum;
  onSelect: (tab: ProfileTabsEnum) => void;
}
