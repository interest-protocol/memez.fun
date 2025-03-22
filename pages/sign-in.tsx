import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import SignIn from '@/views/sign-in';
import { SignInForm, SignInStepEnum } from '@/views/sign-in/sign-in.types';

const SignInPage: NextPage = () => {
  const form = useForm<SignInForm>({
    defaultValues: {
      avatar: '',
      step: SignInStepEnum.CreateProfileProps,
      username: '',
      password: '',
      description: '',
    },
  });
  return (
    <FormProvider {...form}>
      <SEO />
      <SignIn />
    </FormProvider>
  );
};

export default SignInPage;
