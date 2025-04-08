import { useEffect, useState } from 'react';

export const usePoolFollowers = (poolId: string) => {
  const [followers, setFollowers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!poolId) return;

    setLoading(true);
    fetch(`/api/pools/${poolId}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data.followersCount))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [poolId]);

  return { followers, loading, error };
};
