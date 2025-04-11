export enum Network {
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
}

export const NETWORK = process.env.NEXT_PUBLIC_NETWORK as Network;
export const BASE_URL = process.env.NEXT_PUBLIC_AUTH_URL as string;
