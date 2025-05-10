import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { DEFAULT_IMAGE } from '@/constants';
import { useModal } from '@/hooks/use-modal';

import Avatar from '../avatar-group/avatar';
import { ArrowUpRightFromSquareSVG } from '../svg';
import { EngagementCounterModalItemProps } from './engagement-counter.types';

const EngagementCounterModalItem: FC<EngagementCounterModalItemProps> = ({
  id,
  bio,
  avatar,
  username,
}) => {
  const { handleClose } = useModal();
  const hasAvatar = avatar === '' ? DEFAULT_IMAGE : avatar;
  const hasUsername = username === '' ? 'Unknown' : username;

  const onSelect = () => {
    const selectedUser = [
      {
        id,
        bio,
        avatar,
        username,
      },
    ];
    console.log('Selected user _>', selectedUser);
    handleClose();
    return selectedUser;
  };
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
        <Avatar
          imgSrc={hasAvatar}
          title={hasUsername}
          size="large"
          isVerified
        />
        <Span color="#E4E7EB" fontSize="1rem">
          {hasUsername}
        </Span>
      </Div>
      <Div cursor="pointer" onClick={onSelect}>
        <ArrowUpRightFromSquareSVG
          width="1rem"
          maxWidth="1rem"
          maxHeight="1rem"
        />
      </Div>
    </Div>
  );
};

export default EngagementCounterModalItem;
