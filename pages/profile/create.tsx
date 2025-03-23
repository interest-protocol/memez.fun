import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import CreateProfile from '@/views/create-profile';
import { CreateProfileFormProps } from '@/views/create-profile/create-profile.types';

const CreateProfilePage: NextPage = () => {
  const form = useForm<CreateProfileFormProps>();

  return (
    <FormProvider {...form}>
      <SEO />
      <CreateProfile />
    </FormProvider>
  );
};

export default CreateProfilePage;
