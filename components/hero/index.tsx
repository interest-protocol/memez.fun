import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Hero: FC = () => {
  return (
    <Div height="27.688rem">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        autoPlay
        infiniteLoop
      >
        <Div height="27.688rem" objectFit="contain">
          <Img src="/hero-bg.png" height="100%" />
        </Div>
        <Div height="27.688rem" objectFit="cover">
          <Img src="/hero-bg-2.png" height="100%" />
        </Div>
      </Carousel>
    </Div>
  );
};

export default Hero;
