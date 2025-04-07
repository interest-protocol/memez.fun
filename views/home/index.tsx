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
import { usePools } from '@/hooks/use-pools';

import Card from './card';
// import { CARDS } from './card.data';

const Home: FC = () => {
  const { push } = useRouter();

  const handleCreateCoinButtonClick = () => push(Routes[RoutesEnum.CreateCoin]);

  const { pools } = usePools(1, 10);

  console.log('pools', pools);

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
            'repeat(2, 50%)',
            'repeat(3, 20rem)',
            'repeat(4, 24.5%)',
          ]}
        >
          {pools.map(
            ({
              creatorAddress,
              name,
              iconUrl,
              bondingCurve,
              quoteBalance,
              decimals,
            }) => {
              return (
                <Card
                  key={v4()}
                  name={name}
                  decimals={decimals}
                  quoteBalance={quoteBalance}
                  imgSrc={iconUrl as string}
                  creatorAddress={creatorAddress}
                  bondingCurve={Number(bondingCurve)}
                  // isVerified={isVerified}
                  // cardNumber={cardNumber}
                  // lastPurchase={lastPurchase}
                />
              );
            }
          )}
        </Div>
      </Div>
    </Layout>
  );
};

export default Home;
