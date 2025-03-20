import { ReactNode } from 'react';
import unikey from 'unikey';

import {
  CreateCoinHeaderProps,
  CreateCoinStepEnum,
  DexCardProps,
} from './create-coin.types';
import CreateCoinDetailsStep from './steps/create-coin-details-step';
import CreateCoinDexSocialMediaStep from './steps/create-coin-dex-social-media-step';
import CreateCoinRaiseVestingStep from './steps/create-coin-raise-vesting-step';
import CreateCoinReviewStep from './steps/create-coin-review-step';

export const CreateCoinHeaderData: ReadonlyArray<CreateCoinHeaderProps> = [
  {
    title: 'Set Your Memecoin Up',
    description:
      'Fill in the details to create your coin’s profile. Simple, quick, and meme-worthy!',
    step: CreateCoinStepEnum.CoinDetails,
  },
  {
    title: 'Set Dex & Socials',
    description:
      'Now choose the DEX and enter the social media where your memecoin can be found',
    step: CreateCoinStepEnum.DexSocialMedia,
  },
  {
    title: 'Raise & Vesting',
    description: 'Set up the vesting to complete the process',
    step: CreateCoinStepEnum.RaiseVesting,
  },
  {
    title: 'Review',
    step: CreateCoinStepEnum.Review,
  },
];

export const CreateCoinDexData: ReadonlyArray<DexCardProps> = [
  {
    dexId: unikey(),
    dexName: 'Cetus',
    imageUrl:
      'https://assets.coingecko.com/markets/images/1134/large/cetus.png?1706865152',
  },
  {
    dexId: unikey(),
    dexName: 'Raidium',
    imageUrl:
      'https://assets.coingecko.com/markets/images/649/large/raydium.jpeg?1706864594',
  },
  {
    dexId: unikey(),
    dexName: 'Shadow Exchange',
    imageUrl:
      'https://assets.coingecko.com/markets/images/11810/large/shadow.jpg?1735902352',
  },
  {
    dexId: unikey(),
    dexName: 'Hyperliquid',
    imageUrl:
      'https://assets.coingecko.com/markets/images/1571/large/PFP.png?1714470912',
  },
];

export const CreateCoinViewStep: ReadonlyArray<ReactNode> = [
  <CreateCoinDetailsStep key={unikey()} />,
  <CreateCoinDexSocialMediaStep key={unikey()} />,
  <CreateCoinRaiseVestingStep key={unikey()} />,
  <CreateCoinReviewStep key={unikey()} />,
];
