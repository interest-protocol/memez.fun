import { useCallback, useState } from 'react';

export const useLikePools = (poolId: string) => {
  const [isLiking, setIsLiking] = useState(false);

  const toggleLike = useCallback(async () => {
    const url = `https://apimemezfun-staging.up.railway.app/api/v1/pools/${encodeURIComponent(poolId)}/likes`;

    setIsLiking(true);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Error toggle like');
      }
    } finally {
      setIsLiking(false);
    }
  }, [poolId]);

  return {
    toggleLike,
    isLiking,
  };
};
