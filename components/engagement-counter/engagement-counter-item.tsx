import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Avatar from '../avatar-group/avatar';
import { ArrowUpRightFromSquareSVG } from '../svg';
import { EngagementCounterModalItemProps } from './engagement-counter.types';

const EngagementCounterModalItem: FC<EngagementCounterModalItemProps> = ({
  username,
  avatar,
}) => {
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
        <Avatar imgSrc={avatar} title={username} size="large" isVerified />
        <Span color="#E4E7EB" fontSize="1rem">
          {username}
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

export default EngagementCounterModalItem;
