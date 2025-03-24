import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useModal } from '@/hooks/use-modal';

import UserModal from '../user-modal';
import { DATA } from '../user-modal/user-modal.data';
import Avatar from './avatar';

const AvatarGroup: FC = () => {
  const MAX_ITEMS = 5;
  const ITEMS = [1, 2, 3];
  const { setContent, onClose } = useModal();

  const handleModalLike = () =>
    setContent(
      <UserModal title="Likes" allUser={DATA.length} userData={DATA} />,
      { onClose }
    );

  return (
    <Div
      gap="0.5rem"
      display="flex"
      cursor="pointer"
      color="#F6C853"
      onClick={handleModalLike}
    >
      {ITEMS.map(() => (
        <Avatar isVerified key={v4()} />
      ))}
      {ITEMS.length > MAX_ITEMS && (
        <Div
          color="#fff"
          display="flex"
          width="1.6rem"
          height="1.6rem"
          fontSize="0.7rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          border="1px solid #494C54"
        >
          +1
        </Div>
      )}
    </Div>
  );
};

export default AvatarGroup;
