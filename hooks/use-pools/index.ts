import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { CoinMetadataWithType, Pool } from '@/interface';

const GET_POOLS = gql`
  query GetPools(
    $page: Int!
    $pageSize: Int!
    $filters: PoolsFilters
    $sortBy: PoolsSortBy
  ) {
    pools(
      page: $page
      pageSize: $pageSize
      filters: $filters
      sortBy: $sortBy
    ) {
      pools {
        poolId
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

export const usePools = (
  page = 1,
  pageSize = 10,
  filters = {},
  sortBy = {}
) => {
  const { data, loading, error } = useQuery(GET_POOLS, {
    variables: {
      page,
      pageSize,
      filters,
      sortBy,
    },
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
          iconUrl: 'suiMan.png',
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
