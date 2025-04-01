import { gql, useQuery } from '@apollo/client';

import { PoolsData } from '@/interface';

const GET_POOLS = gql`
  query GetPools($page: Int!, $pageSize: Int!) {
    pools(page: $page, pageSize: $pageSize) {
      pools {
        poolId
        curve
        config
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
        migrationWitness
        virtualLiquidity
        coinIpxTreasuryCap
        targetQuoteLiquidity
        nsfw
      }
      total
    }
  }
`;

export const usePools = (page: number = 1, pageSize: number = 10) => {
  const { data, loading, error } = useQuery<{ pools: PoolsData }>(GET_POOLS, {
    variables: {
      page: Number(page),
      pageSize: Number(pageSize),
    },
  });

  return {
    pools: data?.pools.pools || [],
    total: data?.pools.total || 0,
    loading,
    error,
  };
};
