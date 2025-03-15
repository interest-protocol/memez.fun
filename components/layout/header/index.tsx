import { Div, Header } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchBar from '@/components/search-bar';
import { MemeZLogoSVG } from '@/components/svg';
import WalletButton from '@/components/wallet-button';

const HeaderBar: FC = () => {
  const { push } = useRouter();

  return (
    <Header
      py="1rem"
      pr="1.5rem"
      width="100%"
      display="flex"
      maxWidth="1400px"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
    >
      <Div
        gap="1rem"
        display="flex"
        cursor="pointer"
        alignItems="center"
        onClick={() => push('/')}
      >
        <MemeZLogoSVG maxHeight="10rem" maxWidth="10rem" width="100%" />
      </Div>
      <SearchBar />
      <WalletButton />
    </Header>
  );
};

export default HeaderBar;
