import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';

import DetailsCenterContent from './details-center-content';
import DetailsRightContent from './details-right-content';
import DetailsTokenBasics from './details-token-basics';
// import MiniDetailsTokenBasics from './details-token-basics/mini-details-token-basics';

const Details: FC = () => {
  return (
    <Layout>
      <Div
        mx="auto"
        px="1.5rem"
        gap="1.5rem"
        display="flex"
        maxWidth="1400px"
        justifyContent="center"
      >
        {/* <MiniDetailsTokenBasics /> */}
        <DetailsTokenBasics />
        <DetailsCenterContent />
        <DetailsRightContent />
      </Div>
    </Layout>
  );
};

export default Details;
