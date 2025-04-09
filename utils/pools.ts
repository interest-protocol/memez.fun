import { CoinHistory, CoinMetadataWithType } from '@/interface';
import { Likes } from '@/views/home/card/card.types';

export const fetchCoinHistory = async (
  type: string,
  resolution: string = '1D'
): Promise<CoinHistory[]> => {
  const baseUrl =
    'https://datafeed-api-staging.up.railway.app/api/v1/datafeed/history';
  const encodedSymbol = encodeURIComponent(type);
  const url = `${baseUrl}?symbol=${encodedSymbol}&resolution=${resolution}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Error getting coin history');

    const data = await res.json();

    return data || [];
  } catch (err) {
    console.error('Error getting coin history:', err);
    return [];
  }
};

export const fetchMetadata = async (
  coinTypes: string[]
): Promise<CoinMetadataWithType[]> => {
  const baseUrl =
    'https://coin-metadata-api-testnet-staging.up.railway.app/api/v1/fetch-coins';
  const encodedTypes = coinTypes.map(encodeURIComponent).join(',');
  const url = `${baseUrl}?coinTypes=${encodedTypes}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        network: 'sui',
      },
    });

    if (!res.ok) throw new Error('Error getting coin metadata');

    const data = await res.json();

    return data || [];
  } catch (err) {
    console.error('Error getting coin metadata:', err);
    return [];
  }
};

export const fetchPoolLikes = async (poolId: string): Promise<Likes> => {
  const url = `https://apimemezfun-staging.up.railway.app/api/v1/pools/${encodeURIComponent(poolId)}/likes`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Error getting pools likes');

    const data = await res.json();

    return data ?? {};
  } catch (err) {
    console.error('Error getting pools likes:', err);
    return { total: 0, data: [] };
  }
};
