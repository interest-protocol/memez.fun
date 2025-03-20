import { Button, Div } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

import { FireSVG } from '@/components/svg';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardBurButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleOnMouseEnter = () => {
    setIsButtonHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsButtonHover(false);
  };

  const fireIcons = [
    { top: '-2rem', left: '0.5rem', size: '1.688rem' },
    { top: '-1.6rem', left: '2.6rem', size: '1.313rem' },
    { top: '-2rem', left: '3.8rem', size: '1.688rem' },
    { top: '-2.5rem', left: '5.7rem', size: '2.25rem' },
    { top: '-2.5rem', right: '0.8rem', size: '2.25rem' },
  ];

  return (
    <Div
      zIndex="2"
      height="2rem"
      cursor="pointer"
      width="11.063rem"
      onClick={onClick}
      position="relative"
      maxWidth="11.063rem"
      borderRadius="1.5rem"
      background="#F6BDC1"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <AnimatePresence>
        {isButtonHover &&
          fireIcons.map(({ top, left, right, size }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -5 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{
                position: 'absolute',
                top,
                left,
                right,
              }}
            >
              <FireSVG maxHeight={size} maxWidth={size} width={size} />
            </motion.div>
          ))}
      </AnimatePresence>
      <Button
        px="1rem"
        width="100%"
        gap="0.5rem"
        border="none"
        height="2rem"
        color="#fff"
        display="flex"
        cursor="pointer"
        transition="0.3s"
        alignItems="center"
        position="relative"
        background="#E85965"
        borderRadius="1.5rem"
        justifyContent="center"
        nHover={{ marginTop: '-0.5rem' }}
      >
        Burn
      </Button>
    </Div>
  );
};

export default ActionCardBurButton;
