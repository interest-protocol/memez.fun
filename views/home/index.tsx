import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import CreateCoinButton from '@/components/creat-coin-button';

import Card from './card';
import { CARDS } from './card.data';

const Home: FC = () => {
  const handleCreatCointButtonClick = () => {};

  return (
    <Layout>
      <Div py="2rem" display="flex">
        <CreateCoinButton onClick={handleCreatCointButtonClick} />
      </Div>
      <Div
        width="100%"
        gap="0.5rem"
        display="grid"
        flexWrap="wrap"
        justifyContent="center"
        gridTemplateColumns={[
          '21rem',
          '25rem',
          'repeat(2, 21rem)',
          'repeat(3, 20rem)',
          'repeat(4, 18rem)',
        ]}
      >
        {CARDS.map((card) => (
          <Card key={v4()} imgSrc={card.imgSrc} />
        ))}
      </Div>
    </Layout>
  );
};

export default Home;
