import { Div } from '@stylin.js/elements';
import Skeleton from 'react-loading-skeleton';

const CardsSkleton = () => {
  return (
    <Div
      width="100%"
      gap="0.5rem"
      display="grid"
      flexWrap="wrap"
      justifyContent="center"
      gridTemplateColumns={[
        '100%',
        '25rem',
        'repeat(2, 50%)',
        'repeat(3, 20rem)',
        'repeat(4, 24.5%)',
      ]}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Div key={index} width="100%">
          <Skeleton width="100%" height="29.774rem" borderRadius="1.5rem" />
        </Div>
      ))}
    </Div>
  );
};

export default CardsSkleton;
