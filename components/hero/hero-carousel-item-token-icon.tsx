import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { YellowFireSVG } from '../svg';
import { HeroCarouselItemTokenIconProps } from './hero-carousel.types';

const HeroCarouselItemTokenIcon: FC<HeroCarouselItemTokenIconProps> = ({
  iconUrl,
  isHot = true,
}) => {
  return (
    <Div
      display="flex"
      width="11.25rem"
      height="11.25rem"
      borderRadius="50%"
      alignItems="center"
      position="relative"
      background="#FFFFFF40"
      justifyContent="center"
      backdropFilter="blur(0.5rem)"
    >
      {isHot && (
        <Div
          top="0"
          right="0"
          zIndex="2"
          py="0.3rem"
          pr="0.4rem"
          pl="0.7rem"
          gap="0.3rem"
          bg="#303238"
          display="flex"
          position="absolute"
          alignItems="center"
          borderRadius="2rem"
          transform="rotate(-20deg)"
          boxShadow="2.13px 7.8px 4.47px -3.54px rgba(0, 0, 0, 0.6)"
        >
          <Span fontFamily="NDot" color="#F6C853">
            Hot
          </Span>
          <YellowFireSVG maxHeight="1.2rem" maxWidth="1.2rem" width="1.2rem" />
        </Div>
      )}
      <Div transform="rotate(-20deg)" height="8.728rem" width="8.728rem">
        <Img src={iconUrl ?? 'suiMan.png'} width="100%" />
      </Div>
    </Div>
  );
};

export default HeroCarouselItemTokenIcon;
