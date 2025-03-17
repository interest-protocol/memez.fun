import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { DATA } from './hero.data';
import Carousel from './hero-carousel';
import HeroCarouselItem from './hero-carousel-item';

const Hero: FC = () => {
  return (
    <Div height="27.688rem">
      <Carousel>
        {DATA.map((item) => (
          <HeroCarouselItem
            key={v4()}
            iconUrl={item.iconUrl}
            marketCap={item.marketCap}
            volume24h={item.volume24h}
            allTimeVolume={item.allTimeVolume}
          />
        ))}
      </Carousel>
    </Div>
  );
};

export default Hero;
