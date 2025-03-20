import { Button } from '@stylin.js/elements';
import { FC } from 'react';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardDumpButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  return (
    <Button
      all="unset"
      zIndex="2"
      bg="#FF8341"
      color="#fff"
      height="2rem"
      cursor="pointer"
      transition="0.3s"
      width="11.063rem"
      onClick={onClick}
      textAlign="center"
      fontSize="0.875rem"
      borderRadius="0.875rem"
      nHover={{
        opacity: 0.8,
      }}
    >
      Dump
    </Button>
  );
};

export default ActionCardDumpButton;
