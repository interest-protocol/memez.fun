import { gql, useQuery } from '@apollo/client';
import { CoinMetadata } from '@mysten/sui/client';
import { useEffect, useState } from 'react';

import { CoinMetadataWithType } from '@/interface';

interface Pool extends CoinMetadata {
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

const GET_POOLS = gql`
  query GetPools($page: Int!, $pageSize: Int!) {
    pools(page: $page, pageSize: $pageSize) {
      pools {
        coinType
        metadata
        updatedAt
        migrated
        createdAt
        canonical
        lastTradeAt
        quoteBalance
        coinBalance
        canMigrate
        bondingCurve
        creatorAddress
        virtualLiquidity
      }
      total
    }
  }
`;

const fetchMetadataBatch = async (
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

    if (!res.ok) throw new Error('Erro ao buscar metadados em lote');

    const data = await res.json();

    return data || [];
  } catch (err) {
    console.error('Erro ao buscar metadados externos:', err);
    return [];
  }
};

export const usePools = (page = 1, pageSize = 10) => {
  const { data, loading, error } = useQuery(GET_POOLS, {
    variables: { page, pageSize },
  });

  const [poolsWithMetadata, setPoolsWithMetadata] = useState<Pool[]>([]);

  useEffect(() => {
    const setCoinsWithMetadata = async () => {
      const pools: Pool[] = data?.pools?.pools ?? [];
      if (pools.length === 0) return;

      const coinTypes = Array.from(new Set(pools.map((p) => p.coinType)));
      const metadataList = await fetchMetadataBatch(coinTypes);

      const enrichedPools = pools.map((pool) => {
        const externalMetadata = metadataList.find(
          (el) => el.type === pool.coinType
        );

        return {
          ...pool,
          ...externalMetadata,
        };
      });

      setPoolsWithMetadata(enrichedPools);
    };

    setCoinsWithMetadata();
  }, [data]);

  return {
    pools: poolsWithMetadata,
    total: data?.pools.total ?? 0,
    loading,
    error,
  };
};
