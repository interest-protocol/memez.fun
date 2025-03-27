import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useModal } from '@/hooks/use-modal';

import { TimesSVG } from '../svg';
import { DATA } from './engagement-counter.data';
import { EngagementCounterModalProps } from './engagement-counter.types';
import UserLikeItem from './engagement-counter-item';

const EngagementCounterModal: FC<EngagementCounterModalProps> = ({ title }) => {
  const { handleClose } = useModal();

  return (
    <Div display="flex" flexDirection="column">
      <Div
        p="1.5rem"
        bg="#0A090D"
        display="flex"
        height="26.375rem"
        borderRadius="1rem"
        flexDirection="column"
        border="1px solid #24282D"
        className="users-like-modal"
        onClick={(e) => e.stopPropagation()}
        width={['23rem', '28rem', '28rem', '28rem', '28rem']}
      >
        <Div
          pb="0.5rem"
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid #24282D"
        >
          <Div gap="0.1rem" display="flex" flexDirection="column">
            <Span fontSize="1.25rem" color="#E4E7EB">
              {title}
            </Span>
            <Span fontSize="0.875rem" fontWeight="300" color="#90939D">
              All(14)
            </Span>
          </Div>
          <Div
            p="0.5rem"
            width="2rem"
            height="2rem"
            display="flex"
            cursor="pointer"
            transition="0.3s"
            color="#E4E7EB"
            alignItems="center"
            borderRadius="0.7rem"
            onClick={handleClose}
            justifyContent="center"
            nHover={{
              background: '#e4e7eb35',
            }}
          >
            <TimesSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
          </Div>
        </Div>
        <Div
          gap="1rem"
          pt="1rem"
          display="flex"
          overflowY="scroll"
          flexDirection="column"
          className="engagement-scroll"
        >
          {DATA.map(({ userName, userAvatar }) => (
            <UserLikeItem
              key={v4()}
              userName={userName}
              userAvatar={userAvatar}
            />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default EngagementCounterModal;
