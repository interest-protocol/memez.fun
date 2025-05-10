import { useCallback, useEffect, useState } from 'react';

import { fetchPoolLikes } from '@/utils/pools';
import { Likes } from '@/views/home/card/card.types';

export const useFetchPoolLikes = (poolId: string) => {
  const [likes, setLikes] = useState<Likes>({ total: 0, data: [] });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchLikes = useCallback(async () => {
    if (!poolId) return;

    setIsLoading(true);
    try {
      const data = await fetchPoolLikes(poolId);
      setLikes(data);
    } catch (err) {
      console.error('Failed to fetch likes:', err);
    } finally {
      setIsLoading(false);
    }
  }, [poolId]);

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  return {
    total: likes.total,
    data: likes.data,
    isLoading,
  };
};
