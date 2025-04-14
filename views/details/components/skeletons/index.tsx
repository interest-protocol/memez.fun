import 'react-loading-skeleton/dist/skeleton.css';

import { Div } from '@stylin.js/elements';
import Skeleton from 'react-loading-skeleton';

const DetailsSkeleton = () => {
  return (
    <Div
      mx="auto"
      px="2rem"
      gap="0.5rem"
      maxWidth="1400px"
      alignItems="center"
      justifyContent="center"
      display={['block', 'block', 'block', 'flex', 'flex']}
      flexDirection={['unset', 'unset', 'unset', 'row', 'row']}
    >
      <Div flex="1">
        <Skeleton width="100%" height="53.438rem" borderRadius="1.5rem" />
      </Div>
      <Div flex="2" gap="1rem">
        <Skeleton width="100%" height="13rem" borderRadius="1.5rem" />
        <Skeleton width="100%" height="39.563rem" borderRadius="1.5rem" />
      </Div>
      <Div flex="1">
        <Skeleton width="100%" height="53.438rem" borderRadius="1.5rem" />
      </Div>
    </Div>
  );
};

export default DetailsSkeleton;
