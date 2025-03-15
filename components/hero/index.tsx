import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Div } from '@stylin.js/elements';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <Div height="28rem">
      <Div
        height="27.688rem"
        objectFit="contain"
        backgroundImage="url('/hero-bg.png')"
        backgroundSize="cover"
      >
        bom dia
      </Div>
      <Div />
    </Div>
  );
};

export default Hero;
