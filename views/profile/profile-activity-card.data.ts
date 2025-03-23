import { ActivityCardProps } from './activity-list/activity-card/activity-card.types';
import { ProfileTabsEnum } from './profile-tabs/profile-tabs.types';

export const HISTORIC_DATA: ActivityCardProps[] = [
  {
    isSold: true,
    amount: '335k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
    amountInUSD: '3.345',
    supportingText: 'Jan 3, 2025',
    coinName: 'Ocean token',
  },
  {
    isSold: false,
    amount: '234k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
    amountInUSD: '9.345',
    supportingText: 'Feb 3, 2025',
    coinName: 'Blue token',
  },
  {
    isSold: false,
    amount: '112k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
    amountInUSD: '4.533',
    supportingText: 'DEC 3, 2025',
    coinName: 'Blue token',
  },
  {
    isSold: false,
    amount: '112k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
    amountInUSD: '4.533',
    supportingText: 'DEC 3, 2025',
    coinName: 'Blue token',
  },
];

export const COIN_OWNED_DATA: ActivityCardProps[] = [
  {
    amount: '335k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '234k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '112k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '234k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '112k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
];

export const COIN_CREATED_DATA: ActivityCardProps[] = [
  {
    amount: '111k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '678k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '999k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '678k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
  {
    amount: '999k',
    onBuy: () => {},
    onSell: () => {},
    type: '0x000000000',
  },
];

export const ACTIVITY_DATA: Record<ProfileTabsEnum, ActivityCardProps[]> = {
  [ProfileTabsEnum.History]: [...HISTORIC_DATA, ...HISTORIC_DATA],
  [ProfileTabsEnum.CoinCreated]: COIN_CREATED_DATA,
  [ProfileTabsEnum.CoinOwned]: COIN_OWNED_DATA,
};
