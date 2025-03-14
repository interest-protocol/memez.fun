import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Avatar from './avatar';

const AvatarGroup: FC = () => {
  const MAX_ITEMS = 5;
  const ITEMS = [1, 2, 3];

  return (
    <Div color="#F6C853" gap="0.1rem" display="flex">
      {ITEMS.map(() => (
        <Avatar key={v4()} />
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
