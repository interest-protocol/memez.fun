import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    mx="auto"
    py="1.5rem"
    maxWidth="1400px"
    position="relative"
    px={['0.7rem', '2rem', '1.5rem', '2rem', '2rem']}
  >
    <Header />
    {children}
    <Footer />
  </Main>
);

export default Layout;
