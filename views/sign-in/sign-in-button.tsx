import { Button, Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import DialogCountdown from '@/components/dialog/dialog-countdown';
import { LoaderSVG } from '@/components/svg';
import { useConnectModal } from '@/components/wallet-button/wallet-button.hook';
import { RoutesEnum } from '@/constants';
import { BASE_URL } from '@/constants/global';
import { useDialog } from '@/hooks/use-dialog';

import { SignInFormProps } from './sign-in.types';

const SignInButton: FC = () => {
  const { setValue, trigger, getValues } = useFormContext<SignInFormProps>();
  const { dialog, handleClose } = useDialog();
  const handleOpenConnectModal = useConnectModal();
  const { push } = useRouter();

  const handleCreateProfile = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          setValue('success', true);
          resolve('success');
          return;
        }
        reject('Error');
      }, 1000);
    });
  };

  const handleSignIn = async () => {
    let fieldsToValidate: (keyof SignInFormProps)[] = [];

    fieldsToValidate = ['username', 'password'];
    const isValid = await trigger(fieldsToValidate);

    try {
      fetch(`${BASE_URL}/sign-in`, {
        method: 'POST',
        body: JSON.stringify({
          username: `${getValues('username')}`,
          password: `${getValues('password')}`,
        }),
      }).then((res) => {
        if (res.ok) {
          if (isValid) {
            dialog.promise(handleCreateProfile(), {
              success: () => ({
                title: 'Sign-in successful',
                button: (
                  <Button
                    all="unset"
                    py="1rem"
                    px="1.5rem"
                    flex="2"
                    bg="#F5B722"
                    color="#000000"
                    cursor="pointer"
                    textAlign="center"
                    borderRadius="1rem"
                  >
                    You will&apos;be redirect to connect your wallet in{' '}
                    <DialogCountdown
                      timeout={5000}
                      onComplete={handleOpenConnectModal}
                    />{' '}
                    sec
                  </Button>
                ),
                ghostButton: (
                  <Button
                    all="unset"
                    color="#F5B722"
                    cursor="pointer"
                    textAlign="center"
                    fontSize="0.825rem"
                    onClick={handleOpenConnectModal}
                    nHover={{ textDecoration: 'underline' }}
                  >
                    Connect your wallet now
                  </Button>
                ),
                message: 'Now connect your wallet do see all the function',
              }),
              loading: () => ({
                Icon: <LoaderSVG />,
                title: 'Signing...',
                message: 'Please wait...',
              }),
              error: (e) => ({
                title: 'Oops! You can not sign in!',
                button: { label: 'Try again', onClick: handleClose },
                message: (
                  e.message ||
                  'Make sure you fill every field correctly and try again.'
                ).replace('Invariant failed: ', ''),
                ghostButton: {
                  label: 'Do not want to try again!',
                  onClick: handleClose,
                },
              }),
            });
          }
          push(RoutesEnum.Profile);
        }
        if (!isValid) return;
      });
    } catch (error) {
      console.error('Error _> ', error);
    }
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
        onClick={async () => await handleSignIn()}
        nHover={{
          transform: 'scale(1.05)',
        }}
      >
        Sign in
      </Button>
    </Div>
  );
};

export default SignInButton;
