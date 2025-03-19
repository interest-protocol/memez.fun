import { Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardBurButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleOnMouseEnter = () => {
    setIsButtonHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsButtonHover(false);
  };

  return (
    <Div
      height="2rem"
      cursor="pointer"
      width="11.063rem"
      onClick={onClick}
      position="relative"
      background="#F6BDC1"
      borderRadius="1.5rem"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Button
        all="unset"
        mb="2rem"
        px="1rem"
        width="100%"
        gap="0.5rem"
        color="#000"
        border="none"
        display="flex"
        height="2rem"
        cursor="pointer"
        transition="0.3s"
        alignItems="center"
        background="#E85965"
        borderRadius="1.5rem"
        justifyContent="center"
      >
        Burn
      </Button>
    </Div>
  );
};

export default ActionCardBurButton;
