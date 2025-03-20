import { Div, H1, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SignInHeaderData } from './sign-in.data';
import { SignInForm } from './sign-in.types';

const SignInHeader: FC = () => {
  const { control } = useFormContext<SignInForm>();
  const currentStep = useWatch({ control, name: 'step' });

  return (
    <>
      <Div my={['1.25rem', '1.25rem', '1.25rem', '5rem']}>
        <H1
          my="0.5rem"
          color="#E4E7EB"
          fontWeight="500"
          textAlign="center"
          textTransform="capitalize"
          fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
        >
          {SignInHeaderData[currentStep].title}
        </H1>
        {SignInHeaderData[currentStep].description && (
          <P
            fontSize="1rem"
            color="#90939D"
            textAlign="center"
            lineHeight="1.5rem"
          >
            {SignInHeaderData[currentStep].description}
          </P>
        )}
      </Div>
    </>
  );
};
export default SignInHeader;
