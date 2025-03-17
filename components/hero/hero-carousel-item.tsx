import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { HeroCarouselItemProps } from './hero-carousel.types';
import HeroCarouselItemTokenIcon from './hero-carousel-item-token-icon';
import HoverFloatItem from './hover-float-item';

const HeroCarouselItem: FC<HeroCarouselItemProps> = ({
  isHot,
  iconUrl,
  marketCap,
  volume24h,
  tokenName,
  allTimeVolume,
}) => {
  return (
    <Div
      display="flex"
      width="100%"
      height="100%"
      objectFit="cover"
      //   backgroundImage="url('/hero-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Div flex="2" height="100%" display="flex" justifyContent="flex-end">
        <Div
          height="100%"
          display="flex"
          alignItems="center"
          position="relative"
          justifyContent="space-between"
        >
          <Div mr="5rem" display={['none', 'none', 'none', 'block', 'block']}>
            <HoverFloatItem value={marketCap} labelKey="marketCap" />
          </Div>
          <Div mr={['unset', 'unset', 'unset', '5rem', '5rem']}>
            <HeroCarouselItemTokenIcon isHot={isHot} iconUrl={iconUrl} />
          </Div>
        </Div>
      </Div>
      <Div
        flex="1"
        height="100%"
        color="#E4E7EB"
        alignItems="center"
        position="relative"
        justifyContent="center"
        display={['none', 'none', 'none', 'flex', 'flex']}
      >
        <Span fontFamily="GoodGame" fontSize="6rem">
          {tokenName}
        </Span>
      </Div>
      <Div flex="2" height="100%" display="flex" justifyContent="flex-start">
        <Div
          height="100%"
          display="flex"
          alignItems="center"
          position="relative"
          justifyContent="space-between"
        >
          <Div mt="10rem" display={['none', 'none', 'none', 'block', 'block']}>
            <HoverFloatItem value={volume24h} labelKey="volume24h" />
          </Div>
          <Div
            height="100%"
            alignItems="flex-start"
            display={['none', 'none', 'none', 'flex', 'flex']}
          >
            <Div mt="5rem" ml="-3rem">
              <HoverFloatItem value={allTimeVolume} labelKey="allTimeVolume" />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default HeroCarouselItem;
