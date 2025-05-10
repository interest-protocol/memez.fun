import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useIsMobile } from '@/hooks/use-is-mobile';
import { usePools } from '@/hooks/use-pools';

import HeroBackground from './hero-background';
import Carousel from './hero-carousel';
import HeroCarouselItem from './hero-carousel-item';
import MiniHeroCarouselItem from './mini-hero-carousel-item';

const Hero: FC = () => {
  const { isMobile } = useIsMobile();
  const { pools, isLoading } = usePools(
    1,
    3,
    {
      canonicalOnly: false,
      minBondingCurve: 80,
    },
    { direction: 'DESC', field: 'bondingCurve' }
  );

  return (
    <Div flex="1" height="27.688rem" position="relative">
      <HeroBackground />
      <Carousel>
        {pools.map((item) => (
          <>
            {!isMobile ? (
              <HeroCarouselItem
                key={v4()}
                iconSize="10rem"
                name={item.name}
                isLoading={isLoading}
                volume24h={item.volume24H}
                marketCap={item.quoteBalance}
                iconUrl={item.iconUrl as string}
                allTimeVolume={item.allTimeVolume}
              />
            ) : (
              <MiniHeroCarouselItem
                key={v4()}
                iconSize="8rem"
                name={item.name}
                iconUrl={item.iconUrl as string}
              />
            )}
          </>
        ))}
      </Carousel>
    </Div>
  );
};

export default Hero;
