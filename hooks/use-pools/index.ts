import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { Pool } from '@/interface';
import { fetchCoinHistory, fetchMetadata, fetchPoolLikes } from '@/utils/pools';

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
  sortBy = {},
  getPoolsLikes = false
) => {
  const variables = {
    page,
    pageSize,
    filters,
    ...(Object.keys(sortBy).length > 0 && { sortBy }),
  };

  const {
    data,
    loading: graphqlLoading,
    error,
  } = useQuery(GET_POOLS, {
    variables,
  });

  const [poolsWithRemainingData, setPoolsWithRemainingData] = useState<Pool[]>(
    []
  );
  const [fullLoading, setFullLoading] = useState<boolean>(false);

  useEffect(() => {
    const setCoinsRemainingData = async () => {
      const pools: Pool[] = data?.pools?.pools ?? [];
      if (pools.length === 0) return;

      setFullLoading(true);

      try {
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

            const likes = !getPoolsLikes
              ? undefined
              : await fetchPoolLikes(pool.poolId);

            return {
              ...pool,
              likes,
              ...externalMetadata,
              iconUrl: 'suiMan.png',
              volume24H: history1D[0].volume,
              allTimeVolume: history12M[0].volume,
            };
          })
        );

        setPoolsWithRemainingData(enrichedPools);
      } catch (err) {
        console.error('Erro ao carregar dados adicionais dos pools:', err);
      } finally {
        setFullLoading(false);
      }
    };

    if (!graphqlLoading && data?.pools?.pools) {
      setCoinsRemainingData();
    }
  }, [data, graphqlLoading, getPoolsLikes]);

  return {
    error,
    fullLoading,
    graphqlLoading,
    pools: poolsWithRemainingData,
    total: data?.pools.total ?? 0,
  };
};
