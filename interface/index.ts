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

export interface CreateProfileFormProps {
  email?: string;
  avatar: string;
  username: string;
  firstName: string;
  lastName: string;
  bio: string;
}

export interface UserProps {
  id: string;
  bio: string;
  avatar: string;
  username: string;
}

export interface UserDetailsProps extends CreateProfileFormProps {
  following?: number;
  followers?: number;
  emailVerified: boolean;
}
