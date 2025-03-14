import { H1 } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import { LogoSVG, PlusSVG } from '@/components/svg';

import { CreateCoinButton } from './components';

const Home: FC = () => (
  <Layout>
    <H1>Home</H1>
    <CreateCoinButton
      suffixIcon={
        <PlusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
      }
      preffixIcon={
        <PlusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
      }
      onClick={() => console.log('clicked')}
    >
      Create coin
    </CreateCoinButton>
    <LogoSVG maxHeight="3rem" maxWidth="3rem" width="100%" />
  </Layout>
);

export default Home;
