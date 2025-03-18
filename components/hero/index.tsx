import { Div } from '@stylin.js/elements';
import { FC, useCallback, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import { v4 } from 'uuid';

import { DATA } from './hero.data';
import Carousel from './hero-carousel';
import HeroCarouselItem from './hero-carousel-item';
import MiniHeroCarouselItem from './mini-hero-carousel-item';

const Hero: FC = () => {
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

  return (
    <Div px="1rem" height="27.688rem">
      <Carousel>
        {DATA.map((item) => (
          <>
            {!isMobile ? (
              <HeroCarouselItem
                key={v4()}
                iconUrl={item.iconUrl}
                tokenName={item.tokenName}
                marketCap={item.marketCap}
                volume24h={item.volume24h}
                allTimeVolume={item.allTimeVolume}
              />
            ) : (
              <MiniHeroCarouselItem
                iconSize="8rem"
                iconUrl={item.iconUrl}
                tokenName={item.tokenName}
              />
            )}
          </>
        ))}
      </Carousel>
    </Div>
  );
};

export default Hero;
