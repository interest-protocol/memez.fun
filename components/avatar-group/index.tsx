import { Div } from '@stylin.js/elements';
import { FC, MouseEvent } from 'react';
import { v4 } from 'uuid';

import { useModal } from '@/hooks/use-modal';

import EngagementCounterModal from '../engagement-counter';
import { TooltipWrapper } from '../tooltip';
import Avatar from './avatar';
import { AvatarGroupProps } from './avatar-group.types';

const AvatarGroup: FC<AvatarGroupProps> = ({ items }) => {
  const MAX_ITEMS = 5;
  const { setContent, onClose } = useModal();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setContent(<EngagementCounterModal title="Likes" />, { onClose });
  };

  const handleAvatarClick = (e: MouseEvent<HTMLDivElement>) => {
    if (items.length > MAX_ITEMS) return;
    e.stopPropagation();
  };

  return (
    <Div gap="0.5rem" display="flex" cursor="pointer" color="#F6C853">
      {items.slice(0, MAX_ITEMS).map(({ title, imgSrc }) => (
        <TooltipWrapper key={v4()} tooltipContent={title}>
          <Avatar
            isVerified
            title={title}
            imgSrc={imgSrc}
            onClick={handleAvatarClick}
          />
        </TooltipWrapper>
      ))}
      {items.length > MAX_ITEMS && (
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
          onClick={(e) => handleClick(e)}
        >
          +{items.length - MAX_ITEMS}
        </Div>
      )}
    </Div>
  );
};

export default AvatarGroup;
