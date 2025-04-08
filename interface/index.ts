import { CoinMetadata, SuiTransactionBlockResponse } from '@mysten/sui/client';
import BigNumber from 'bignumber.js';

export type BigNumberish = BigNumber | bigint | string | number;

export interface CoinMetadataWithType extends CoinMetadata {
  type: `0x${string}`;
}

export interface TimedSuiTransactionBlockResponse
  extends SuiTransactionBlockResponse {
  time: number;
}

export interface Pool extends CoinMetadata {
  poolId: string;
  coinType: string;
  metadata: string;
  updatedAt: string;
  migrated: boolean;
  createdAt: string;
  canonical: boolean;
  lastTradeAt: string;
  quoteBalance: string;
  coinBalance: string;
  canMigrate: boolean;
  bondingCurve: string;
  creatorAddress: string;
  virtualLiquidity: string;
}

export type PoolsData = {
  pools: Pool[];
  total: number;
};
