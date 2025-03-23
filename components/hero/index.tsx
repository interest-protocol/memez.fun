import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useIsMobile } from '@/hooks/use-is-mobile';

import { DATA } from './hero.data';
import HeroBackground from './hero-background';
import Carousel from './hero-carousel';
import HeroCarouselItem from './hero-carousel-item';
import MiniHeroCarouselItem from './mini-hero-carousel-item';

const Hero: FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <Div flex="1" height="27.688rem" position="relative">
      <HeroBackground />
      <Carousel>
        {DATA.map((item) => (
          <>
            {!isMobile ? (
              <HeroCarouselItem
                key={v4()}
                iconSize="10rem"
                iconUrl={item.iconUrl}
                tokenName={item.tokenName}
                marketCap={item.marketCap}
                volume24h={item.volume24h}
                allTimeVolume={item.allTimeVolume}
              />
            ) : (
              <MiniHeroCarouselItem
                key={v4()}
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
