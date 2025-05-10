import {
  useCurrentAccount,
  useDisconnectWallet,
  useSignPersonalMessage,
} from '@mysten/dapp-kit';
import { Button, Div, Img } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { v4 } from 'uuid';

import { LoaderSVG, MemeZLogoSVG, WalletSVG } from '@/components/svg';
import { BASE_URL, MEMEZ_FUN_TOKEN_AUTH } from '@/constants';
import { useDialog } from '@/hooks/use-dialog';

import ConnectedModal from './connected-modal';
import { useConnectModal } from './wallet-button.hook';

const WalletButton: FC = () => {
  const handleOpenConnectModal = useConnectModal();
  const currentAccount = useCurrentAccount();
  const { mutate: disconnectWallet } = useDisconnectWallet();
  const [signing, setSigning] = useState(false);
  const { dialog, handleClose } = useDialog();
  const { mutate: signPersonalMessage } = useSignPersonalMessage();
  const [signedPM, setSignedPM] = useLocalStorage<{
    signature: string;
    message: string;
  }>(MEMEZ_FUN_TOKEN_AUTH, { signature: '', message: '' });

  const handleConnectWallet = () => {
    handleOpenConnectModal();
  };

  useEffect(() => {
    if (signedPM.signature || signedPM.message || !currentAccount) return;

    const newMessage = v4();

    signPersonalMessage(
      {
        message: new TextEncoder().encode(newMessage),
      },
      {
        onSuccess: (result) => {
          setSigning(not);
          setSignedPM({
            signature: result.signature,
            message: newMessage,
          });
        },
        onError: () => disconnectWallet(),
      }
    );
  }, [currentAccount]);

  useEffect(() => {
    if (!signedPM.signature || !signedPM.message || !currentAccount || !signing)
      return;
    const signIn = async () => {
      await fetch(`${BASE_URL}/auth/sign-in`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: signedPM.message,
          signature: signedPM.signature,
          address: currentAccount.address,
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            disconnectWallet();
            throw new Error('signin error');
          }

          console.log(res.headers.getSetCookie(), '>>>res');
        })
        .catch(() => {
          disconnectWallet();
          setSignedPM({
            signature: '',
            message: '',
          });
        });
      setSigning(not);
    };
    dialog.promise(signIn(), {
      success: () => ({
        timeout: 10000,
        title: 'Sign in!',
        button: { label: 'Continue browsing', onClick: handleClose },
        message: 'Signin successfully',
        Icon: (
          <Div
            gap="1rem"
            display="flex"
            cursor="pointer"
            alignItems="center"
            justifyContent="center"
          >
            <MemeZLogoSVG maxHeight="10rem" maxWidth="10rem" width="100%" />
          </Div>
        ),
      }),
      loading: () => ({
        Icon: <LoaderSVG />,
        title: 'Signing...',
        message: 'Hang tight! Signing. Please wait',
      }),
      error: (e) => ({
        title: 'Oops! You could not Connect!',
        button: { label: 'Try again', onClick: () => signIn() },
        message:
          e.message ||
          'Sigin-in failed. Try to refresh the page, double-check your inputs, or reconnect your wallet.',
        ghostButton: {
          label: 'Do not want to connect my wallet',
          onClick: handleClose,
        },
        Icon: (
          <Img
            alt="Error"
            width="7rem"
            height="7rem"
            src="/dialogs/error.png"
          />
        ),
      }),
    });
  }, [signing]);

  if (currentAccount) return <ConnectedModal />;

  return (
    <Button
      all="unset"
      gap="0.85rem"
      px="0.875rem"
      py="0.5rem"
      display="flex"
      color="#F6C853"
      cursor="pointer"
      fontSize="0.875rem"
      lineHeight="1rem"
      transition="0.3s"
      border="1px solid"
      alignItems="center"
      whiteSpace="nowrap"
      borderRadius="2rem"
      borderColor="#F6C853"
      justifyContent="center"
      nHover={{
        color: '#0a090d',
        backgroundColor: '#F6C853',
      }}
      onClick={handleConnectWallet}
    >
      <Div width="1.5rem" height="1.5rem">
        <WalletSVG maxWidth="100%" maxHeight="100%" width="100%" />
      </Div>
      Connect Wallet
    </Button>
  );
};

export default WalletButton;
