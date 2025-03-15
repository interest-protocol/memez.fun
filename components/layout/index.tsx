import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Div display="flex" minHeight="100vh" flexDirection="column">
    <Header />
    <Main flex="1">{children}</Main>
  </Div>
);

export default Layout;
