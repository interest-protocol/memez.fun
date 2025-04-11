import { gql, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

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
  initialPage = 1,
  pageSize = 10,
  filters = {},
  sortBy = {},
  getPoolsLikes = false
) => {
  const [allPools, setAllPools] = useState<Pool[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [isEnriching, setIsEnriching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const enrichPoolsData = useCallback(
    async (pools: Pool[]): Promise<Pool[]> => {
      if (pools.length === 0) return pools;

      try {
        const coinTypes = Array.from(new Set(pools.map((p) => p.coinType)));
        const [metadataList, likesData] = await Promise.all([
          fetchMetadata(coinTypes),
          getPoolsLikes
            ? Promise.all(pools.map((p) => fetchPoolLikes(p.poolId)))
            : Promise.resolve([]),
        ]);

        return Promise.all(
          pools.map(async (pool, index) => {
            const [history1D, history12M] = await Promise.all([
              fetchCoinHistory(pool.coinType, '1D'),
              fetchCoinHistory(pool.coinType, '12M'),
            ]);

            return {
              ...pool,
              likes: getPoolsLikes ? likesData[index] : undefined,
              ...metadataList.find((el) => el.type === pool.coinType),
              volume24H: history1D[0]?.volume,
              allTimeVolume: history12M[0]?.volume,
            };
          })
        );
      } catch (err) {
        setError(err as Error);
        return pools; // Retorna os pools não enriquecidos em caso de erro
      }
    },
    [getPoolsLikes]
  );

  const { loading: isQueryLoading, fetchMore } = useQuery(GET_POOLS, {
    variables: {
      page: currentPage,
      pageSize,
      filters,
      ...(Object.keys(sortBy).length > 0 && { sortBy }),
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: async (data) => {
      if (!data?.pools) return;

      setTotal(data.pools.total);

      try {
        setIsEnriching(true);
        const enrichedPools = await enrichPoolsData(data.pools.pools);

        setAllPools((prev) => {
          // Se for a primeira página, substitui todos os pools
          if (currentPage === 1) {
            return enrichedPools;
          }
          // Se for uma página adicional, concatena os novos pools enriquecidos
          return [...prev, ...enrichedPools];
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsEnriching(false);
      }
    },
  });

  const loadMore = useCallback(async () => {
    if (isQueryLoading || isEnriching || allPools.length >= total) return;

    try {
      await fetchMore({
        variables: {
          page: currentPage + 1,
        },
      });
      setCurrentPage((prev) => prev + 1);
    } catch (err) {
      setError(err as Error);
    }
  }, [
    currentPage,
    fetchMore,
    isQueryLoading,
    isEnriching,
    allPools.length,
    total,
  ]);

  const refetchPools = useCallback(async () => {
    try {
      await fetchMore({
        variables: {
          page: 1,
          pageSize,
          filters,
          ...(Object.keys(sortBy).length > 0 && { sortBy }),
        },
      });
      setCurrentPage(1);
    } catch (err) {
      setError(err as Error);
    }
  }, [fetchMore, pageSize, filters, sortBy]);

  return {
    pools: allPools,
    total,
    error,
    isLoading: isQueryLoading || isEnriching,
    loadMore,
    refetch: refetchPools,
  };
};
