import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { GlobeSVG, TelegramSVG, XSVG } from '@/components/svg';
import { SVGProps } from '@/components/svg/svg.types';
import { Pool } from '@/interface';
import { fetchCoinHistory, fetchMetadata } from '@/utils/pools';

const iconMap: Record<string, React.FC<SVGProps>> = {
  Telegram: TelegramSVG,
  Website: GlobeSVG,
  X: XSVG,
};

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

        const [history1D, history12M] = await Promise.all([
          fetchCoinHistory(pool.coinType, '1D'),
          fetchCoinHistory(pool.coinType, '12M'),
        ]);

        const allowedSocials = [
          'Twitter',
          'GitHub',
          'Telegram',
          'Website',
          'X',
        ];

        const socialsArray = pool.metadata
          ? Object.entries(pool.metadata)
              .filter(([key, value]) => allowedSocials.includes(key) && !!value)
              .map(([key, value]) => ({
                title: key,
                link: value as string,
                Icon: iconMap[key],
              }))
          : [];

        setPoolWithRemainingData({
          ...pool,
          ...metadata,
          socials: socialsArray,
          iconUrl: 'suiMan.png',
          volume24H: history1D[0].volume,
          allTimeVolume: history12M[0].volume,
        });
      } catch (err) {
        console.error('Error getting pool data:', err);
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
