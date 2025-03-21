import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

import { VerifiedSVG } from '../../svg';
import { AvatarProps } from './avatar.types';

const Avatar: FC<AvatarProps> = ({ isVerified, imgSrc, size = 'small' }) => {
  const sizeMap = {
    small: '1.5rem',
    medium: '2rem',
  };

  const verifiedPosition = {
    small: '-0.4rem',
    medium: '0rem',
  };

  const avatarSize = (size && sizeMap[size]) || sizeMap.small;

  return (
    <Div width={avatarSize} position="relative">
      <Div
        display="flex"
        width="100%"
        height="100%"
        borderRadius="50%"
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
      >
        <Img src={imgSrc ?? '/avatar.png'} width="100%" height="100%" />
      </Div>
      {isVerified && (
        <Div
          top="-0.2rem"
          color="#F6C853"
          position="absolute"
          right={(size && verifiedPosition[size]) || '0rem'}
        >
          <VerifiedSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        </Div>
      )}
    </Div>
  );
};

export default Avatar;
