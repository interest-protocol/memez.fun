import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import CreateCoinButton from '@/components/creat-coin-button';
import FilterButton from '@/components/filter-button';
import Hero from '@/components/hero';
import SearchButton from '@/components/search-button';
import { Routes, RoutesEnum } from '@/constants';

import Card from './card';
import { CARDS } from './card.data';

const Home: FC = () => {
  const { push } = useRouter();

  const handleCreateCoinButtonClick = () => push(Routes[RoutesEnum.CreateCoin]);

  return (
    <Layout>
      <Hero />
      <Div maxWidth="1400px" mx="auto">
        <Div py="2rem" display="flex" justifyContent="space-between">
          <Div gap="0.5rem" display="flex">
            <FilterButton />
            <SearchButton />
          </Div>
          <CreateCoinButton onClick={handleCreateCoinButtonClick} />
        </Div>
        <Div
          width="100%"
          gap="0.5rem"
          display="grid"
          flexWrap="wrap"
          justifyContent="center"
          gridTemplateColumns={[
            '100%',
            '25rem',
            'repeat(2, 21rem)',
            'repeat(3, 20rem)',
            'repeat(4, 24.5%)',
          ]}
        >
          {CARDS.map((card) => (
            <Card key={v4()} imgSrc={card.imgSrc} />
          ))}
        </Div>
      </Div>
    </Layout>
  );
};

export default Home;
