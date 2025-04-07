import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

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
        bondingCurve
        creatorAddress
        migrationWitness
        virtualLiquidity
        targetQuoteLiquidity
        nsfw
      }
      total
    }
  }
`;

const fetchMetadataBatch = async (coinTypes: string[]) => {
  const baseUrl = `${process.env.NEXT_METADATA_API}/api/v1/fetch-coins`;
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
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const usePools = (page = 1, pageSize = 10) => {
  const { data, loading, error } = useQuery(GET_POOLS, {
    variables: { page, pageSize },
  });

  const [poolsWithMetadata, setPoolsWithMetadata] = useState([]);

  useEffect(() => {
    const enrichWithMetadata = async () => {
      if (!data?.pools?.pools) return;

      const pools = data.pools.pools;
      const coinTypes = Array.from(
        new Set(pools.map((p: string) => p.coinType))
      );

      const metadataList = await fetchMetadataBatch(coinTypes);

      console.log('metadataList', metadataList);

      const metadataMap = Object.fromEntries(
        metadataList.map((meta) => [meta.coinType, meta])
      );

      const enriched = pools.map((pool) => ({
        ...pool,
        externalMetadata: metadataMap[pool.coinType] || null,
      }));

      setPoolsWithMetadata(enriched);
    };

    enrichWithMetadata();
  }, [data]);

  // console.log('poolsWithMetadata', poolsWithMetadata);

  return {
    pools: poolsWithMetadata,
    total: data?.pools.total || 0,
    loading,
    error,
  };
};
