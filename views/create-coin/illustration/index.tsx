import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import IllustrationCreateCoinBottom from './bottom';
import IllustrationCreateCoinLeft from './left';
import IllustrationCreateCoinRight from './right';

const Illustration: FC = () => (
  <Div position="relative" height="90vh">
    <Div
      top="8rem"
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
      top="8rem"
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
    <Div
      left="0"
      bottom="0"
      position="absolute"
      width={['15rem', '17rem', '17rem']}
      height={['17rem', '22rem', '22rem']}
      display={['flex', 'flex', 'flex', 'none']}
    >
      <IllustrationCreateCoinBottom
        maxWidth="100%"
        maxHeight="100%"
        height="100%"
      />
    </Div>
  </Div>
);

export default Illustration;
