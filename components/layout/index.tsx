import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ noFooter, children }) => (
  <Div display="flex" flexDirection="column">
    <Header />
    <Main flex="1" minHeight="100vh">
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
