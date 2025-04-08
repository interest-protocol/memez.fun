import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { Pool } from '@/interface';
import { fetchCoinHistory, fetchMetadata } from '@/utils/pools';

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

export const usePools = (
  page = 1,
  pageSize = 10,
  filters = {},
  sortBy = {}
) => {
  const variables = {
    page,
    pageSize,
    filters,
    ...(Object.keys(sortBy).length > 0 && { sortBy }),
  };

  const { data, loading, error } = useQuery(GET_POOLS, {
    variables,
  });

  const [poolsWithRemainingData, setPoolsWithRemainingData] = useState<Pool[]>(
    []
  );

  useEffect(() => {
    const setCoinsRemainingData = async () => {
      const pools: Pool[] = data?.pools?.pools ?? [];
      if (pools.length === 0) return;

      const coinTypes = Array.from(new Set(pools.map((p) => p.coinType)));
      const metadataList = await fetchMetadata(coinTypes);

      const enrichedPools = await Promise.all(
        pools.map(async (pool) => {
          const externalMetadata = metadataList.find(
            (el) => el.type === pool.coinType
          );

          const [history1D, history12M] = await Promise.all([
            fetchCoinHistory(pool.coinType, '1D'),
            fetchCoinHistory(pool.coinType, '12M'),
          ]);

          return {
            ...pool,
            ...externalMetadata,
            iconUrl: 'suiMan.png',
            volume24H: history1D[0].volume,
            allTimeVolume: history12M[0].volume,
          };
        })
      );

      setPoolsWithRemainingData(enrichedPools);
    };

    setCoinsRemainingData();
  }, [data]);

  return {
    pools: poolsWithRemainingData,
    total: data?.pools.total ?? 0,
    loading,
    error,
  };
};
