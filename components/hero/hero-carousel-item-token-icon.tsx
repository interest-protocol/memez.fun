import { Div, Img, Span } from '@stylin.js/elements';
import { motion } from 'framer-motion'; // Importe o motion
import { FC } from 'react';

import { YellowFireSVG } from '../svg';
import { HeroCarouselItemTokenIconProps } from './hero-carousel.types';

const HeroCarouselItemTokenIcon: FC<HeroCarouselItemTokenIconProps> = ({
  size = '11.25rem',
  iconUrl,
  isHot = true,
}) => {
  const imageSize = `calc(${size} * 0.775)`;

  const hotRight = `calc(${size} * 0.01)`;
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
      backdropFilter="blur(0.7rem)"
      border="1px solid #FFFFFF40"
    >
      {isHot && (
        <motion.div
          style={{
            top: '0',
            zIndex: '2',
            right: hotRight,
            position: 'absolute',
            borderRadius: hotBorderRadius,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Div
            gap={hotGap}
            bg="#303238"
            display="flex"
            py={hotPaddingY}
            pr={hotPaddingX}
            alignItems="center"
            pl={`calc(${size} * 0.1)`}
            transform="rotate(-20deg)"
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
        </motion.div>
      )}
      <Div transform="rotate(-20deg)" width={imageSize} height={imageSize}>
        <Img src={iconUrl ?? 'suiMan.png'} width="100%" />
      </Div>
    </Div>
  );
};

export default HeroCarouselItemTokenIcon;
