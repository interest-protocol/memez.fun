import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { LoaderSVG } from '@/components/svg';
import { useDialog } from '@/hooks/use-dialog';

import { SignInForm, SignInStepEnum } from './sign-in.types';

const SignInButtons: FC = () => {
  const { control, setValue } = useFormContext<SignInForm>();
  const { dialog, handleClose } = useDialog();

  const currentStep = useWatch({ control, name: 'step' });

  const handleCreateProfile = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          handleClose();
          setValue('success', true);
          setValue('step', currentStep + 1);
          return;
        }
        reject('Errp');
      }, 1000);
    });
  };

  const handleSignIn = () => {
    console.log("You're log in");
  };

  const handleAuth = async () => {
    await dialog.promise(handleCreateProfile(), {
      success: () => ({
        title: 'Account created',
        button: {
          label: 'See on explorer',
        },
        message: 'Account successfully created',
        ghostButton: {
          label: 'Continue browsing',
          onClick: handleCreateProfile,
        },
      }),
      loading: () => ({
        Icon: <LoaderSVG />,
        title: 'Creating...',
        message: 'Creating an account...',
      }),
      error: (e) => ({
        title: 'Oops! You can not create an account!',
        button: { label: 'Try again', onClick: handleClose },
        message: (
          e.message || 'Make sure you fill every field correctly and try again.'
        ).replace('Invariant failed: ', ''),
        ghostButton: {
          label: 'Do not want to try again!',
          onClick: handleClose,
        },
      }),
    });
  };

  return (
    <Div mt="2.5rem" display="flex" gap="0.5rem" justifyContent="center">
      <Button
        all="unset"
        py="0.4rem"
        bg="#F6C853"
        display="flex"
        width="7.5rem"
        cursor="pointer"
        borderRadius="100px"
        transition="all .3s"
        justifyContent="center"
        border="1px solid #F6C853"
        onClick={async () =>
          currentStep == SignInStepEnum.CreateProfileProps
            ? await handleAuth()
            : handleSignIn()
        }
        nHover={{
          transform: 'scale(1.05)',
        }}
      >
        <Span>
          {currentStep == SignInStepEnum.CreateProfileProps
            ? 'Next'
            : 'Sign in'}
        </Span>
      </Button>
    </Div>
  );
};

export default SignInButtons;
