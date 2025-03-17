import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { YellowFireSVG } from '../svg';
import { HeroCarouselItemTokenIconProps } from './hero-carousel.types';

const HeroCarouselItemTokenIcon: FC<HeroCarouselItemTokenIconProps> = ({
  size = '11.25rem',
  iconUrl,
  isHot = true,
}) => {
  const imageSize = `calc(${size} * 0.775)`;

  const hotRight = `calc(${size} * 0.07)`;
  const hotGap = `calc(${size} * 0.0267)`;
  const hotPaddingX = `calc(${size} * 0.0355)`;
  const hotFontSize = `calc(${size} * 0.0889)`;
  const hotPaddingY = `calc(${size} * 0.0267)`;
  const hotBorderRadius = `calc(${size} * 0.1778)`;

  return (
    <Div
      width={size}
      height={size}
      display="flex"
      borderRadius="50%"
      alignItems="center"
      position="relative"
      justifyContent="center"
      background="#FFFFFF40"
      backdropFilter="blur(0.5rem)"
    >
      {isHot && (
        <Div
          top="0"
          zIndex="2"
          gap={hotGap}
          bg="#303238"
          display="flex"
          right={hotRight}
          py={hotPaddingY}
          pr={hotPaddingX}
          position="absolute"
          alignItems="center"
          transform="rotate(-20deg)"
          pl={`calc(${size} * 0.1)`}
          borderRadius={hotBorderRadius}
          boxShadow="2.13px 7.8px 4.47px -3.54px rgba(0, 0, 0, 0.6)"
        >
          <Span fontFamily="NDot" color="#F6C853" fontSize={hotFontSize}>
            Hot
          </Span>
          <YellowFireSVG
            width={hotFontSize}
            maxWidth={hotFontSize}
            maxHeight={hotFontSize}
          />
        </Div>
      )}
      <Div transform="rotate(-20deg)" width={imageSize} height={imageSize}>
        <Img src={iconUrl ?? 'suiMan.png'} width="100%" />
      </Div>
    </Div>
  );
};

export default HeroCarouselItemTokenIcon;
