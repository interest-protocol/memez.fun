import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import DialogCountdown from '@/components/dialog/dialog-countdown';
import { LoaderSVG } from '@/components/svg';
import { useConnectModal } from '@/components/wallet-button/wallet-button.hook';
import { MEMEZ_FUN_TOKEN_AUTH } from '@/constants';
import { useCookie } from '@/hooks/use-cookie';
import { useDialog } from '@/hooks/use-dialog';

import { SignInFormProps } from './sign-in.types';

const SignInButton: FC = () => {
  const { set: setCookie } = useCookie(MEMEZ_FUN_TOKEN_AUTH);
  const { getValues, handleSubmit } = useFormContext<SignInFormProps>();
  const { dialog, handleClose } = useDialog();
  const handleOpenConnectModal = useConnectModal();

  const onSignIn = async () => {
    const { username, password } = getValues();
    const body = JSON.stringify({
      username,
      password,
    });
    return await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/sign-in`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then(async (res) => {
      const response = await res.json();
      if (!res.ok) {
        throw new Error(`${response.error}: ${response.message}`);
      }
      setCookie(response.accessToken);
      return;
    });
  };

  const handleSignIn = () => {
    dialog.promise(onSignIn(), {
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
    <Div
      mt="2.5rem"
      display="flex"
      gap="0.5rem"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Button
        all="unset"
        py="0.4rem"
        bg="#F6C853"
        display="flex"
        width="7.5rem"
        cursor="pointer"
        type="submit"
        borderRadius="100px"
        transition="all .3s"
        justifyContent="center"
        border="1px solid #F6C853"
        onClick={handleSubmit(handleSignIn)}
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
