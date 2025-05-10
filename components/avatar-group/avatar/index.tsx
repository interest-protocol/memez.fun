import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

import { VerifiedSVG } from '../../svg';
import { AvatarProps } from './avatar.types';

const Avatar: FC<AvatarProps> = ({
  name,
  avatar,
  onClick,
  isVerified,
  size = 'small',
}) => {
  const sizeMap = {
    small: '1.5rem',
    medium: '2rem',
    large: '2.75rem',
  };

  const verifiedSizeMap = {
    small: '1rem',
    medium: '1rem',
    large: '1rem',
  };

  const verifiedPosition = {
    small: '-0.3rem',
    medium: '0rem',
    large: '-0.3rem',
  };

  const avatarSize = sizeMap[size] || sizeMap.small;
  const verifiedSize = verifiedSizeMap[size] || verifiedSizeMap.small;

  return (
    <Div onClick={onClick} width={avatarSize} position="relative">
      <Div
        display="flex"
        overflow="hidden"
        width={avatarSize}
        borderRadius="50%"
        alignItems="center"
        height={avatarSize}
        justifyContent="center"
      >
        <Img src={avatar} alt={name} width="100%" height="100%" />
      </Div>
      {isVerified && (
        <Div
          top="-0.2rem"
          color="#F6C853"
          position="absolute"
          right={verifiedPosition[size] || '0rem'}
        >
          <VerifiedSVG
            width={verifiedSize}
            maxWidth={verifiedSize}
            maxHeight={verifiedSize}
          />
        </Div>
      )}
    </Div>
  );
};

export default Avatar;
