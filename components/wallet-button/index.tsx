import { useCurrentAccount } from '@mysten/dapp-kit';
import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import { WalletSVG } from '@/components/svg';

import ConnectedModal from './connected-modal';
import { useConnectModal } from './wallet-button.hook';

const WalletButton: FC = () => {
  const currentAccount = useCurrentAccount();
  const handleOpenConnectModal = useConnectModal();

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
      onClick={handleOpenConnectModal}
    >
      <Div width="1.5rem" height="1.5rem">
        <WalletSVG maxWidth="100%" maxHeight="100%" width="100%" />
      </Div>
      Connect Wallet
    </Button>
  );
};

export default WalletButton;
