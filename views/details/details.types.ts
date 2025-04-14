import { CoinMetadata } from '@mysten/sui/client';

import { SocialProps } from '@/components/layout/footer/footer.types';

import { Likes } from '../home/card/card.types';

export interface DetailsForm extends CoinMetadata {
  likes?: Likes;
  poolId: string;
  coinType: string;
  metadata: string;
  volume24H: string;
  updatedAt: string;
  migrated: boolean;
  createdAt: string;
  canonical: boolean;
  lastTradeAt: string;
  coinBalance: string;
  canMigrate: boolean;
  bondingCurve: string;
  quoteBalance: string;
  allTimeVolume: string;
  creatorAddress: string;
  virtualLiquidity: string;
  socials: Array<SocialProps>;
}
