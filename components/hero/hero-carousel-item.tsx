import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatNumber } from '@/utils';

import { HeroCarouselItemProps } from './hero-carousel.types';
import HeroCarouselItemTokenIcon from './hero-carousel-item-token-icon';
import HeroCarouselItemTokenIconSkeleton from './hero-skeletons/hero-carousel-item-token-icon-skeleton';
import HeroFloatItemSkeleton from './hero-skeletons/hero-float-item-skeleton';
import HoverFloatItem from './hover-float-item';

const HeroCarouselItem: FC<HeroCarouselItemProps> = ({
  name,
  isHot,
  iconUrl,
  iconSize,
  isLoading = true,
  marketCap,
  volume24h,
  allTimeVolume,
}) => {
  return (
    <Div
      display="flex"
      width="100%"
      height="100%"
      objectFit="cover"
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
          <Div
            mr={['unset', 'unset', 'unset', '2rem', '5rem']}
            display={['none', 'none', 'none', 'block', 'block']}
          >
            {isLoading ? (
              <HeroFloatItemSkeleton />
            ) : (
              <HoverFloatItem
                labelKey="marketCap"
                value={formatNumber(marketCap)}
              />
            )}
          </Div>
          <Div mr={['unset', 'unset', 'unset', '5rem', '5rem']}>
            {!isLoading ? (
              <HeroCarouselItemTokenIcon
                isHot={isHot}
                size={iconSize}
                iconUrl={iconUrl}
              />
            ) : (
              <HeroCarouselItemTokenIconSkeleton />
            )}
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
        {isLoading ? (
          <Skeleton height="5.688rem" width="21.813rem" />
        ) : (
          <Span fontFamily="GoodGame" fontSize="6rem">
            {name}
          </Span>
        )}
      </Div>
      <Div flex="2" height="100%" display="flex" justifyContent="flex-start">
        <Div
          pl="6rem"
          height="100%"
          display="flex"
          alignItems="center"
          position="relative"
          justifyContent="space-between"
        >
          <Div
            mt="10rem"
            ml={['5rem', '5rem', '5rem', '-5rem', '5rem']}
            display={['none', 'none', 'none', 'block', 'block']}
          >
            {isLoading ? (
              <HeroFloatItemSkeleton />
            ) : (
              <HoverFloatItem
                value={formatNumber(Number(volume24h))}
                labelKey="volume24h"
              />
            )}
          </Div>
          <Div
            height="100%"
            alignItems="flex-start"
            display={['none', 'none', 'none', 'flex', 'flex']}
          >
            <Div mt="6rem">
              {isLoading ? (
                <HeroFloatItemSkeleton />
              ) : (
                <HoverFloatItem
                  value={formatNumber(Number(allTimeVolume))}
                  labelKey="allTimeVolume"
                />
              )}
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default HeroCarouselItem;
