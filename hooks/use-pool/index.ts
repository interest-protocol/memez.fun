import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { Pool } from '@/interface';
import { fetchCoinHistory, fetchMetadata, fetchPoolLikes } from '@/utils/pools';

const GET_POOL = gql`
  query GetPool($poolId: String!) {
    pool(poolId: $poolId) {
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
  }
`;

export const usePool = (poolId: string) => {
  const { data, error } = useQuery(GET_POOL, {
    variables: { poolId },
    skip: !poolId,
  });

  const [poolWithRemainingData, setPoolWithRemainingData] =
    useState<Pool | null>(null);
  const [isFullyLoading, setIsFullyLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPoolData = async () => {
      const pool = data?.pool;
      if (!pool) return;

      setIsFullyLoading(true);

      try {
        const [metadata] = await fetchMetadata([pool.coinType]);

        const [likes, history1D, history12M] = await Promise.all([
          fetchPoolLikes(pool.poolId),
          fetchCoinHistory(pool.coinType, '1D'),
          fetchCoinHistory(pool.coinType, '12M'),
        ]);

        const { data: likesData, total: likesTotal } = likes;

        setPoolWithRemainingData({
          ...pool,
          ...metadata,
          // socials,
          likes: {
            data: likesData[0],
            total: likesTotal,
          },
          iconUrl: 'suiMan.png',
          volume24H: history1D[0].volume,
          allTimeVolume: history12M[0].volume,
        });
      } catch (err) {
        console.error('Erro ao buscar dados do pool:', err);
      } finally {
        setIsFullyLoading(false);
      }
    };

    if (data) {
      fetchPoolData();
    }
  }, [data]);

  return {
    pool: poolWithRemainingData,
    loading: isFullyLoading,
    error,
  };
};
