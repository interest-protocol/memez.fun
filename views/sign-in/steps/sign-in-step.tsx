import { Button, Div, Hr, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import InputField from '@/components/input-field';
import { XSVG } from '@/components/svg';

import { SignInForm } from '../sign-in.types';
const SignInStep: FC = () => {
  const { register } = useFormContext<SignInForm>();
  return (
    <Div maxWidth={['90vw', '90vw', '90vw', '33rem']} mx="auto" mt="3rem">
      <Div
        gap="1rem"
        p="1.5rem"
        width="100%"
        bg="#131419"
        display="flex"
        flexDirection="column"
        borderRadius="0.75rem"
        border="1px solid #24282D"
      >
        <Button
          gap=".5rem"
          p=".5rem"
          width="100%"
          bg="#0A090D"
          display="flex"
          color="#fff"
          border="none"
          outline="none"
          cursor="pointer"
          onClick={() => {}}
          borderRadius="0.75rem"
          alignItems="center"
          transition="all .3s"
          justifyContent="center"
          nHover={{
            transform: 'scale(1.05)',
          }}
        >
          <Span fontSize="1rem">Continue with</Span>
          <XSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem"></XSVG>
        </Button>
        <Div
          my=".5rem"
          gap=".5rem"
          width="100%"
          color="#90939D"
          display="center"
          alignItems="center"
          justifyContent="center"
        >
          <Hr width="40%" color="#90939D" />
          <P fontSize="1rem">Or</P>
          <Hr width="40%" color="#90939D" />
        </Div>
        <Div
          gap="1rem"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <InputField
            tooltipDescription="Fill username"
            placeholder="username"
            {...register('username')}
          />
          <InputField
            tooltipDescription="Fill password"
            placeholder="password"
            {...register('password')}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default SignInStep;
