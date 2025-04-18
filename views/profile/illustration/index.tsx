import { Div } from '@stylin.js/elements';
import Image from 'next/image';
import { FC } from 'react';

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
      <Image
        height={600}
        width={400}
        src="/vector-left.png"
        alt="profile illustration left"
      />
    </Div>
    <Div
      right="0.1rem"
      top="25%"
      position="absolute"
      width={['15rem', '25rem', '25rem']}
      height={['17rem', '22rem', '32rem']}
      display={['none', 'none', 'none', 'flex']}
    >
      <Image
        height={600}
        width={400}
        src="/vector-right.png"
        alt="profile illustration right"
      />
    </Div>
  </Div>
);

export default Illustration;
