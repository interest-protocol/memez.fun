import { Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

import { UserAvatarProps } from './user-avatar.types';

const UserAvatar: FC<UserAvatarProps> = ({ imgSrc }) => {
  return (
    <Div
      display="flex"
      width="11.25rem"
      height="11.25rem"
      borderRadius="50%"
      alignItems="center"
      position="relative"
      background="#F6C85326"
      justifyContent="center"
      backdropFilter="blur(0.7rem)"
      border="1px solid #FFFFFF40"
    >
      <Div width="8.728rem" height="8.728rem">
        <Img src={imgSrc} width="100%" />
      </Div>
    </Div>
  );
};

export default UserAvatar;
