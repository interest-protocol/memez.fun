import { Button } from '@stylin.js/elements';
import { FC } from 'react';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardDumpButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  return (
    <Button
      all="unset"
      height="2rem"
      bg="#8BF3C5"
      cursor="pointer"
      transition="0.3s"
      width="11.063rem"
      onClick={onClick}
      textAlign="center"
      fontSize="0.875rem"
      borderRadius="0.875rem"
      nHover={{
        background: '#D1FAE8',
      }}
    >
      Dump
    </Button>
  );
};

export default ActionCardDumpButton;
