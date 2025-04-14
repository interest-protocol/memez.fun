import { Button, Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import CreateCoinButton from '@/components/creat-coin-button';
import FilterButton from '@/components/filter-button';
import { SortItem } from '@/components/filter-button/filter-button.types';
import Hero from '@/components/hero';
import NoResults from '@/components/no-results';
import SearchButton from '@/components/search-button';
import { Routes, RoutesEnum } from '@/constants';
import { usePools } from '@/hooks/use-pools';

import Card from './card';
import CardsSkleton from './components/cards-skeleton';

const Home: FC = () => {
  const { push } = useRouter();

  const [page, setPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState<SortItem>({
    label: 'Default',
    value: 'default',
  });

  const sortBy =
    currentFilter.value === 'default'
      ? undefined
      : { field: currentFilter.value, direction: 'DESC' };

  const { pools, total, isLoading } = usePools(page, 10, {}, sortBy, true);

  const handleFilterSelect = (sortItem: SortItem) => {
    setCurrentFilter(sortItem);
    setPage(1);
  };

  const handleCreateCoinButtonClick = () => push(Routes[RoutesEnum.CreateCoin]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  const renderContent = () => {
    if (isLoading) {
      return <CardsSkleton />;
    }

    if (!pools || pools.length === 0) {
      return <NoResults />;
    }

    return (
      <>
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

        {pools.length < total && (
          <Div mt="2rem" display="flex" justifyContent="center">
            <Button
              px="1rem"
              py="0.6rem"
              color="#fff"
              borderRadius="1rem"
              disabled={isLoading}
              background="transparent"
              onClick={handleLoadMore}
              border="1px solid #24282D"
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </Button>
          </Div>
        )}
      </>
    );
  };

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
        {renderContent()}
      </Div>
    </Layout>
  );
};

export default Home;
