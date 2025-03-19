import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ noFooter, children }) => (
  <Div
    display="flex"
    minHeight="100vh"
    position="relative"
    flexDirection="column"
  >
    <Header />
    <Main flex="1" minHeight={noFooter ? '90vh' : '100vh'}>
      {children}
    </Main>
    {!noFooter && (
      <Div flex="1">
        <Footer />
      </Div>
    )}
  </Div>
);

export default Layout;
