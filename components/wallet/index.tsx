import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import ConnectWalletButton from './connect-wallet';

const Wallet: FC = () => {
  return (
    <Div
      border="1xp solid red"
      gap="m"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <ConnectWalletButton />
    </Div>
  );
};

export default Wallet;
