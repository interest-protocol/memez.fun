import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { MiniHeroCarouselItemProps } from './hero-carousel.types';
import HeroCarouselItemTokenIcon from './hero-carousel-item-token-icon';

const MiniHeroCarouselItem: FC<MiniHeroCarouselItemProps> = ({
  isHot,
  iconUrl,
  iconSize,
  tokenName,
}) => {
  return (
    <Div
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Div display="flex" alignItems="flex-end" flexDirection="column">
        <Div mb="1.5rem">
          <HeroCarouselItemTokenIcon
            isHot={isHot}
            size={iconSize}
            iconUrl={iconUrl}
          />
        </Div>
        <Div color="#E4E7EB" alignItems="center" position="relative">
          <Span fontFamily="GoodGame" fontSize="6rem">
            {tokenName}
          </Span>
        </Div>
      </Div>
    </Div>
  );
};

export default MiniHeroCarouselItem;
