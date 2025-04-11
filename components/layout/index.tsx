import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  noFooter,
  children,
  centerContent,
}) => (
  <Div display="flex" minHeight="100vh" flexDirection="column">
    <Header />
    <Main
      flex="1"
      {...(centerContent
        ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
        : {})}
    >
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
