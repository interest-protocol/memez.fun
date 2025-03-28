import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import SignIn from '@/views/sign-in';
import { SignInFormProps } from '@/views/sign-in/sign-in.types';
import { SignInValidationSchema } from '@/views/sign-in/sign-in-validations';

const SignInPage: NextPage = () => {
  const form = useForm<SignInFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignInValidationSchema),
    defaultValues: {
      username: '',
      password: '',
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
