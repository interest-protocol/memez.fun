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

export type Pool = {
  poolId: string;
  curve?: string;
  nsfw?: boolean;
  config?: string;
  coinType: string;
  updatedAt: string;
  migrated: boolean;
  createdAt: string;
  canonical?: boolean;
  coinBalance: string;
  canMigrate: boolean;
  quoteBalance: string;
  lastTradeAt?: string;
  bondingCurve: number;
  creatorAddress: string;
  virtualLiquidity: string;
  migrationWitness?: string;
  coinIpxTreasuryCap: string;
  targetQuoteLiquidity: string;
  metadata?: Record<string, unknown>;
};

export type PoolsData = {
  pools: Pool[];
  total: number;
};
