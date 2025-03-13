import { Div, Header } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchBar from '@/components/search-bar';
import { MemeZLogoSVG } from '@/components/svg';
import Wallet from '@/components/wallet';

const HeaderBar: FC = () => {
  const { push } = useRouter();

  return (
    <Header
      py="1rem"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
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
      <Wallet />
    </Header>
  );
};

export default HeaderBar;
