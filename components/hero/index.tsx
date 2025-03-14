import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

import Carousel from './hero-carousel';

const Hero: FC = () => {
  return (
    <Div height="27.688rem">
      <Carousel>
        <Div height="100%" width="100%" objectFit="contain">
          <Img src="/hero-bg.png" width="100%" />
        </Div>
        <Div height="100%" width="100%" objectFit="contain">
          <Img src="/hero-bg-2.png" width="100%" />
        </Div>
      </Carousel>
    </Div>
  );
};

export default Hero;
