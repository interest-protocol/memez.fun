import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

import { VerifiedSVG } from '../../svg';

const Avatar: FC = () => {
  return (
    <Div width="2rem" position="relative">
      <Div
        display="flex"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
      >
        <Img src="/avatar.png" width="100%" />
      </Div>
      <Div top="-0.2rem" right="0.1rem" position="absolute">
        <VerifiedSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
      </Div>
    </Div>
  );
};

export default Avatar;
