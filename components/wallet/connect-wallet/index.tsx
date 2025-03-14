import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import { WalletSVG } from '@/components/svg';

const ConnectWalletButton: FC = () => {
  return (
    <Button
      all="unset"
      px="1rem"
      gap="1rem"
      py="0.5rem"
      display="flex"
      color="#F5B722"
      cursor="pointer"
      fontSize="1.1rem"
      transition="0.3s"
      border="1px solid"
      alignItems="center"
      whiteSpace="nowrap"
      borderRadius="2rem"
      borderColor="#F5B722"
      justifyContent="center"
      nHover={{
        color: '#0a090d',
        backgroundColor: '#F5B722',
      }}
    >
      <Div>
        <WalletSVG maxWidth="1.2rem" maxHeight="1.2rem" width="1.2rem" />
      </Div>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
