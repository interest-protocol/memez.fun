import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { HeroCarouselItemTokenIconSkeletonProps } from '../hero-carousel.types';

const HeroCarouselItemTokenIconSkeleton: FC<
  HeroCarouselItemTokenIconSkeletonProps
> = ({ size = '11.25rem' }) => {
  const imageSize = `calc(${size} * 0.775)`;

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
      <Div transform="rotate(-20deg)" width={imageSize} height={imageSize}>
        <Skeleton
          width="100%"
          height="100%"
          circle
          style={{ borderRadius: '50%' }}
        />
      </Div>
    </Div>
  );
};

export default HeroCarouselItemTokenIconSkeleton;
