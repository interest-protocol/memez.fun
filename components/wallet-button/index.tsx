import { useCurrentAccount, useSignPersonalMessage } from '@mysten/dapp-kit';
import { Button, Div } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { WalletSVG } from '@/components/svg';

import ConnectedModal from './connected-modal';
import { useConnectModal } from './wallet-button.hook';

const WalletButton: FC = () => {
  const handleOpenConnectModal = useConnectModal();
  const signMessage = useSignPersonalMessage();
  const [userAuth, setUserAuth] = useLocalStorage<{
    signature: string;
    bytes: string;
  } | null>('ww-signed-messages', null);
  const currentAccount = useCurrentAccount();

  const handleConnectWallet = () => {
    handleOpenConnectModal();
  };

  useEffect(() => {
    if (userAuth || !currentAccount) return;
    signMessage
      .mutateAsync({
        message: new TextEncoder().encode(
          'Please sign this to make sure verify your identity in our services.'
        ),
      })
      .then((response) => setUserAuth(response));
  }, [currentAccount]);

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
