import { ProfileTabsEnum } from '../../profile-tabs/profile-tabs.types';

export interface CoinInfoProps {
  type: string;
  supportingText?: string;
}

export interface HistoricInfoProps {
  isSold?: boolean;
  coinName?: string;
  amount: string;
  amountInUSD?: string;
}

export interface ActionButtonsProps {
  onBuy: () => void;
  onSell: () => void;
}

export interface ActivityListProps {
  currentTab: ProfileTabsEnum;
}

export type ActivityCardProps = CoinInfoProps &
  HistoricInfoProps &
  ActionButtonsProps;

export type DataGroupByData = {
  [key: string]: ActivityCardProps[];
};
