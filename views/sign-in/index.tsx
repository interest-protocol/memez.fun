import { useCurrentAccount } from '@mysten/dapp-kit';
import { Div, H1, P, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Layout from '@/components/layout';
import { Routes, RoutesEnum } from '@/constants';

import SignInButtons from './sign-in-button';
import SignInForm from './sign-in-form';

const SignIn: FC = () => {
  const currentAccount = useCurrentAccount();
  const { push } = useRouter();

  if (currentAccount) push('/');

  return (
    <Layout>
      <Div
        minHeight="70vh"
        maxWidth={['90vw', '90vw', '90vw', '33rem']}
        mx="auto"
      >
        <Div my={['1.25rem', '1.25rem', '1.25rem', '5rem']}>
          <H1
            my="0.5rem"
            color="#E4E7EB"
            fontWeight="500"
            textAlign="center"
            textTransform="capitalize"
            fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          >
            Sign in
          </H1>
          <P
            fontSize="1rem"
            color="#90939D"
            textAlign="center"
            lineHeight="1.5rem"
          >
            Welcome back. Select method to log in
          </P>
        </Div>
        <Div>
          <form>
            <SignInForm />
            <SignInButtons />
          </form>
          <Div
            mt="3rem"
            gap="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <P color="#fff" fontSize="1rem" lineHeight="1.375rem">
              Don&lsquo;t have an account?{' '}
              <Span
                color="#F6C853"
                cursor="pointer"
                onClick={() => {
                  push(Routes[RoutesEnum.CreateProfile]);
                }}
              >
                Create a Profile
              </Span>
            </P>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
};

export default SignIn;
