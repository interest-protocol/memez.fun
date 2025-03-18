import {
  GreenActionCardBackgroundSVG,
  RedActionCardBackgroundSVG,
  YellowActionCardBackgroundSVG,
} from '@/components/svg';

import ActionCardBurButton from './action-card-buttons/action-card-burn-button';
import ActionCardBuyButton from './action-card-buttons/action-card-buy-button';
import ActionCardDumpButton from './action-card-buttons/action-card-sell-button';

export const BACKGROUND_SVGS = {
  sell: YellowActionCardBackgroundSVG,
  buy: GreenActionCardBackgroundSVG,
  burn: RedActionCardBackgroundSVG,
};

export const ACTIVE_COLORS = {
  sell: '#F8AE19',
  buy: '#6EFF57',
  burn: '#F81946',
};

export const BUTTONS = {
  sell: ActionCardDumpButton,
  buy: ActionCardBuyButton,
  burn: ActionCardBurButton,
};
