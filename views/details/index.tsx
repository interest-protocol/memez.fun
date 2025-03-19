import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';

import DetailsCenterContent from './details-center-content';
import DetailsRightContent from './details-right-content';
import DetailsTokenBasics from './details-token-basics';
import MiniDetailsTokenBasics from './mini-details-token-basics';

const Details: FC = () => {
  return (
    <Layout>
      <Div
        mx="auto"
        px="1.5rem"
        gap="1.5rem"
        display="grid"
        flexWrap="wrap"
        maxWidth="1400px"
        justifyContent="center"
        gridTemplateColumns={[
          '100%',
          '100%',
          'repeat(1, 98%)',
          'repeat(3, 1fr)',
          '1fr 2fr 1fr',
        ]}
      >
        <MiniDetailsTokenBasics />
        <DetailsTokenBasics />
        <DetailsCenterContent />
        <DetailsRightContent />
      </Div>
    </Layout>
  );
};

export default Details;
