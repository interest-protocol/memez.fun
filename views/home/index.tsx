import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import CreateCoinButton from '@/components/creat-coin-button';
import FilterButton from '@/components/filter-button';
import Hero from '@/components/hero';
import SearchButton from '@/components/search-button';
import { Routes, RoutesEnum } from '@/constants';
import { usePools } from '@/hooks/use-pools';

import Card from './card';
import CardsSkleton from './components/cards-skeleton';

const Home: FC = () => {
  const { push } = useRouter();

  const [currentFilter, setCurrentFilter] = useState('Relevance');

  const { pools, fullLoading } = usePools(1, 10, {}, undefined, true);

  const handleFilterSelect = (value: string) => {
    setCurrentFilter(value);
  };

  const handleCreateCoinButtonClick = () => push(Routes[RoutesEnum.CreateCoin]);

  return (
    <Layout>
      <Div
        mx="auto"
        maxWidth="1400px"
        px={['unset', 'unset', 'unset', '1.5rem', '1.5rem']}
      >
        <Hero />
      </Div>
      <Div pt="3rem" px="1.5rem" maxWidth="1400px" mx="auto">
        <Div py="2rem" display="flex" justifyContent="space-between">
          <Div gap="0.5rem" display="flex">
            <FilterButton
              currentFilter={currentFilter}
              setFilter={handleFilterSelect}
            />
            <SearchButton />
          </Div>
          <CreateCoinButton onClick={handleCreateCoinButtonClick} />
        </Div>
        {fullLoading ? (
          <CardsSkleton />
        ) : (
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
            {pools.map(
              ({
                name,
                likes,
                poolId,
                iconUrl,
                lastTradeAt,
                bondingCurve,
                quoteBalance,
                creatorAddress,
              }) => (
                <Card
                  key={v4()}
                  name={name}
                  likes={likes}
                  poolId={poolId}
                  imgSrc={iconUrl as string}
                  lastPurchase={lastTradeAt}
                  quoteBalance={quoteBalance}
                  creatorAddress={creatorAddress}
                  bondingCurve={Number(bondingCurve)}
                />
              )
            )}
          </Div>
        )}
      </Div>
    </Layout>
  );
};

export default Home;
