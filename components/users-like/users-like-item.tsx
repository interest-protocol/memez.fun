import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Avatar from '../avatar-group/avatar';
import { ArrowUpRightFromSquareSVG } from '../svg';
import { UsersLikesItemProps } from './users-like.types';

const UserLikeItem: FC<UsersLikesItemProps> = ({ userName, userAvatar }) => {
  return (
    <Div
      p="0.8rem"
      key={v4()}
      display="flex"
      transition="0.3s"
      borderRadius="1rem"
      alignItems="center"
      justifyContent="space-between"
      nHover={{
        background: '#e4e7eb35',
      }}
    >
      <Div gap="1rem" display="flex" alignItems="center">
        <Avatar imgSrc={userAvatar} size="medium" isVerified />
        <Span color="#E4E7EB" fontSize="1rem">
          {userName}
        </Span>
      </Div>
      <Div cursor="pointer">
        <ArrowUpRightFromSquareSVG
          width="1rem"
          maxWidth="1rem"
          maxHeight="1rem"
        />
      </Div>
    </Div>
  );
};

export default UserLikeItem;
