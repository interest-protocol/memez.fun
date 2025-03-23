import { useCallback, useState } from 'react';

import useEventListener from '../use-event-listener';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? !window.matchMedia('(min-width: 64em)').matches
      : false
  );

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 64em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop);

  return { isMobile };
};
