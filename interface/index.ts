import { CoinMetadata, SuiTransactionBlockResponse } from '@mysten/sui/client';
import BigNumber from 'bignumber.js';

import { Likes } from '@/views/home/card/card.types';

export type BigNumberish = BigNumber | bigint | string | number;

export interface CoinMetadataWithType extends CoinMetadata {
  type: `0x${string}`;
}

export interface TimedSuiTransactionBlockResponse
  extends SuiTransactionBlockResponse {
  time: number;
}

export interface CoinHistory {
  low: string;
  time: number;
  open: string;
  high: string;
  close: string;
  volume: string;
}

export interface Pool extends CoinMetadata {
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
}

export type PoolsData = {
  pools: Pool[];
  total: number;
};
