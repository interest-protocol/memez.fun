import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import Details from '@/views/details';
import { mockDetailsForm } from '@/views/details/details.data';
import { DetailsForm } from '@/views/details/details.types';

const DetailsPage: NextPage = () => {
  const form = useForm<DetailsForm>({
    defaultValues: {
      ...mockDetailsForm,
    },
  });

  return (
    <FormProvider {...form}>
      <SEO />
      <Details />
    </FormProvider>
  );
};

export default DetailsPage;
