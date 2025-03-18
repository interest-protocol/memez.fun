import { Div } from '@stylin.js/elements';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <Div>
      <Skeleton
        style={{
          border: '1px solid #24282D',
        }}
        borderRadius="1rem"
        width="100%"
        height="29.774rem"
      />
    </Div>
  );
};

export default CardSkeleton;
