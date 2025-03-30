import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import CreateProfile from '@/views/create-profile';
import { CreateProfileFormProps } from '@/views/create-profile/create-profile.types';
import { CreateProfileValidationSchema } from '@/views/create-profile/create-profile-validation';

const CreateProfilePage: NextPage = () => {
  const form = useForm<CreateProfileFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(CreateProfileValidationSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      imageUrl: '',
      description: '',
    },
  });

  return (
    <FormProvider {...form}>
      <SEO />
      <CreateProfile />
    </FormProvider>
  );
};

export default CreateProfilePage;
