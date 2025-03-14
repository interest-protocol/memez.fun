import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import { PlusSVG } from '@/components/svg';

import Card from './card';
import { CARDS } from './card.data';
import { CreateCoinButton } from './components';

const Home: FC = () => {
  const handleCreatCointButtonClick = () => {};

  return (
    <Layout>
      <Div
        py="2rem"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <CreateCoinButton onClick={handleCreatCointButtonClick}>
          temporary button
        </CreateCoinButton>
        <CreateCoinButton
          suffixIcon={
            <PlusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
          }
          preffixIcon={
            <PlusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
          }
          onClick={handleCreatCointButtonClick}
        >
          Create coin
        </CreateCoinButton>
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
