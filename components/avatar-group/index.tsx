import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useModal } from '@/hooks/use-modal';

import EngagementCounterModal from '../engagement-counter';
import Avatar from './avatar';
import { DATA } from './avatar-group.data';

const AvatarGroup: FC = () => {
  const MAX_ITEMS = 5;
  const { setContent, onClose } = useModal();

  const handleClick = (e: Event) => {
    e.stopPropagation();
    setContent(<EngagementCounterModal title="Likes" />, { onClose });
  };

  const handleAvatarClick = (e: Event) => {
    e.stopPropagation();
  };

  return (
    <Div gap="0.5rem" display="flex" cursor="pointer" color="#F6C853">
      {DATA.slice(0, MAX_ITEMS).map(({ userName, userAvatar }) => (
        <Avatar
          title={userName}
          imgSrc={userAvatar}
          onClick={(e: Event) => handleAvatarClick(e)}
          isVerified
          key={v4()}
        />
      ))}
      {DATA.length > MAX_ITEMS && (
        <Div
          color="#fff"
          display="flex"
          width="1.6rem"
          height="1.6rem"
          fontSize="0.7rem"
          borderRadius="50%"
          alignItems="center"
          onClick={(e) => handleClick(e as unknown as MouseEvent)}
          justifyContent="center"
          border="1px solid #494C54"
        >
          +{DATA.length - MAX_ITEMS}
        </Div>
      )}
    </Div>
  );
};

export default AvatarGroup;
