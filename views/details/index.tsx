import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Layout } from '@/components';
import { usePool } from '@/hooks/use-pool';

import { DetailsForm } from './details.types';
import DetailsCenterContent from './details-center-content';
import DetailsRightContent from './details-right-content';
import DetailsTokenBasics from './details-token-basics';
import MiniDetailsTokenBasics from './mini-details-token-basics';

const Details: FC = () => {
  const { setValue } = useFormContext<DetailsForm>();

  const router = useRouter();
  const { id } = router.query;
  const { pool } = usePool(id as string);

  console.log('pool', pool);

  useEffect(() => {
    if (pool) {
      setValue('name', pool.name);
      setValue('poolId', pool.poolId);
      setValue('coinType', pool.coinType);
      setValue('bondingCurve', pool.bondingCurve);
      setValue('likes', pool.likes);
      // setValue('dex', 'Your DEX');
      setValue('volume24H', pool.volume24H);
      setValue('symbol', pool.symbol);
      setValue('iconUrl', pool.iconUrl);
      setValue('creatorAddress', pool.creatorAddress);
      setValue('quoteBalance', pool.quoteBalance);
    }
  }, [pool, setValue]);

  return (
    <Layout centerContent>
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
        {/* <DetailsSkeleton /> */}
        <MiniDetailsTokenBasics />
        <DetailsTokenBasics />
        <DetailsCenterContent />
        <DetailsRightContent />
      </Div>
    </Layout>
  );
};

export default Details;
