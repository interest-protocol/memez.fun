import { Div } from '@stylin.js/elements';
import Skeleton from 'react-loading-skeleton';

const HeroFloatItemSkeleton = () => {
  return (
    <Div>
      <Skeleton width="10rem" height="5rem" borderRadius="2rem" />
    </Div>
  );
};

export default HeroFloatItemSkeleton;
