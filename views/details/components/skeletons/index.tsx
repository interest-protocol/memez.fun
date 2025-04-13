import 'react-loading-skeleton/dist/skeleton.css';

import { Div } from '@stylin.js/elements';
import Skeleton from 'react-loading-skeleton';

const DetailsSkeleton = () => {
  return (
    <Div
      mx="auto"
      px="2rem"
      gap="0.5rem"
      display="grid"
      //   maxWidth="1400px"
      minWidth="1400px"
      justifyContent="center"
      gridTemplateColumns={[
        '100%',
        '100%',
        'repeat(1, 60%)',
        'repeat(3, 1fr)',
        '1fr 2fr 1fr',
      ]}
    >
      <Skeleton width="100%" height="53.438rem" borderRadius="1.5rem" />
      <Div width="100%" display="flex" flexDirection="column" gap="0.5rem">
        <Skeleton width="100%" height="13rem" borderRadius="1.5rem" />
        <Skeleton width="100%" height="39.563rem" borderRadius="1.5rem" />
      </Div>
      <Skeleton width="100%" height="53.438rem" borderRadius="1.5rem" />
    </Div>
  );
};

export default DetailsSkeleton;
