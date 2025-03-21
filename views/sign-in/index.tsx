import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import Layout from '@/components/layout';

import { SignViewStep } from './sign-in.data';
import { SignInForm } from './sign-in.types';
import SignInButtons from './sign-in-buttons';
import SignInHeader from './sign-in-header';

const SignIn: FC = () => {
  const { control, setValue } = useFormContext<SignInForm>();
  const currentStep = useWatch({ control, name: 'step' });
  const success = useWatch({ control, name: 'success' });

  return (
    <Layout noFooter={success}>
      <Div maxWidth={['90vw', '90vw', '90vw', '33rem']} mx="auto">
        <SignInHeader />
        <Div>
          {SignViewStep[currentStep]}
          <SignInButtons />

          {currentStep === 1 && (
            <Div
              mt="3rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <P color="#fff" fontSize="1rem" lineHeight="1.375rem">
                {`Don't have an account?`}
              </P>
              <P
                color="#F6C853"
                fontSize="1rem"
                cursor="pointer"
                lineHeight="1.375rem"
                onClick={() => setValue('step', currentStep - 1)}
              >
                Create a Profile
              </P>
            </Div>
          )}
        </Div>
      </Div>
    </Layout>
  );
};
export default SignIn;
