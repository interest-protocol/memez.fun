import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Layout } from '@/components';
import { usePool } from '@/hooks/use-pool';

import DetailsSkeleton from './components/skeletons';
import { DetailsForm } from './details.types';
import DetailsCenterContent from './details-center-content';
import DetailsRightContent from './details-right-content';
import DetailsTokenBasics from './details-token-basics';
import MiniDetailsTokenBasics from './mini-details-token-basics';

const Details: FC = () => {
  const { setValue } = useFormContext<DetailsForm>();

  const router = useRouter();
  const { id } = router.query;
  const { pool, loading, error } = usePool(id as string);

  useEffect(() => {
    if (pool) {
      setValue('name', pool.name);
      setValue('poolId', pool.poolId);
      setValue('coinType', pool.coinType);
      setValue('bondingCurve', pool.bondingCurve);
      setValue('likes', pool.likes);
      setValue('volume24H', pool.volume24H);
      setValue('symbol', pool.symbol);
      setValue('iconUrl', pool.iconUrl);
      setValue('creatorAddress', pool.creatorAddress);
      setValue('quoteBalance', pool.quoteBalance);
      setValue('socials', pool.socials);
    }
  }, [pool, setValue]);

  return (
    <Layout>
      {error?.message.includes('not found') ? (
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="90vh"
          width="100vw"
        >
          <Div color="#FBFBFB" fontSize="4rem">
            Pool not found
          </Div>
        </Div>
      ) : loading ? (
        <DetailsSkeleton />
      ) : (
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
      )}
    </Layout>
  );
};

export default Details;
