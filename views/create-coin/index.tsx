import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Layout } from '@/components';

import { CreateCoinViewStep } from './create-coin.data';
import { CreateCoinForm } from './create-coin.types';
import CreateCoinButtons from './create-coin-buttons';
import CreateCoinSuccess from './create-coin-success';
import CreateCoinHeader from './header';

const CreateCoin: FC = () => {
  const { control } = useFormContext<CreateCoinForm>();
  const currentStep = useWatch({ control, name: 'step' });
  const success = useWatch({ control, name: 'success' });

  return (
    <Layout noFooter={success}>
      {success ? (
        <CreateCoinSuccess />
      ) : (
        <Div maxWidth={['90vw', '90vw', '90vw', '33rem']} mx="auto">
          <CreateCoinHeader />
          <Div>
            {CreateCoinViewStep[currentStep]}
            <CreateCoinButtons />
          </Div>
        </Div>
      )}
    </Layout>
  );
};

export default CreateCoin;
