import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ActionButtonsProps } from './activity-card.types';

const ActionButtons: FC<ActionButtonsProps> = ({ onBuy, onSell }) => {
  return (
    <Div display="flex" gap="0.75rem" alignItems="center">
      <Button
        all="unset"
        bg="#F6C853"
        display="flex"
        height="2rem"
        width="3.75rem"
        cursor="pointer"
        alignItems="center"
        borderRadius="100px"
        transition="all .3s"
        justifyContent="center"
        border="1px solid #F6C853"
        nHover={{
          transform: 'scale(1.05)',
        }}
        onClick={onBuy}
      >
        <Span fontSize="0.875rem">Buy </Span>
      </Button>
      <Button
        all="unset"
        height="2rem"
        display="flex"
        color="#F6C853"
        width="3.75rem"
        cursor="pointer"
        alignItems="center"
        transition="all .3s"
        borderRadius="100px"
        justifyContent="center"
        border="1px solid #F6C853"
        nHover={{
          transform: 'scale(1.05)',
        }}
        onClick={onSell}
      >
        <Span fontSize="0.875rem">Sell</Span>
      </Button>
    </Div>
  );
};

export default ActionButtons;
