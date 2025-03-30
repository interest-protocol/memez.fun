import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import CreateCoin from '@/views/create-coin';
import {
  CreateCoinForm,
  CreateCoinStepEnum,
} from '@/views/create-coin/create-coin.types';
import { createCoinValidationSchema } from '@/views/create-coin/steps/create-coin.validations';

const CreateCoinPage: NextPage = () => {
  const form = useForm<CreateCoinForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(createCoinValidationSchema),
    defaultValues: {
      step: CreateCoinStepEnum.CoinDetails,
      vesting: {
        period: 'days',
      },
    },
  });

  return (
    <FormProvider {...form}>
      <SEO />
      <CreateCoin />
    </FormProvider>
  );
};

export default CreateCoinPage;
