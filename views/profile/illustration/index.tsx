import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import IllustrationCreateCoinLeft from './left';
import IllustrationCreateCoinRight from './right';

const Illustration: FC = () => (
  <Div maxHeight="90vh" bg="red">
    <Div
      top="25%"
      left="-2rem"
      position="absolute"
      width={['15rem', '25rem', '25rem']}
      height={['17rem', '22rem', '32rem']}
      display={['none', 'none', 'none', 'flex']}
    >
      <IllustrationCreateCoinLeft
        maxWidth="100%"
        maxHeight="100%"
        height="100%"
      />
    </Div>
    <Div
      right="-5rem"
      top="25%"
      position="absolute"
      width={['15rem', '25rem', '25rem']}
      height={['17rem', '22rem', '32rem']}
      display={['none', 'none', 'none', 'flex']}
    >
      <IllustrationCreateCoinRight
        maxWidth="100%"
        maxHeight="100%"
        height="100%"
      />
    </Div>
  </Div>
);

export default Illustration;
