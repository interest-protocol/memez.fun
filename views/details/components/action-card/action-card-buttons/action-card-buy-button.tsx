import { Button, P } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardBuyButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: ['#8BF3C5', '#D1FAE8', '#8BF3C5'],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      style={{
        borderRadius: '0.875rem',
        backgroundColor: '#8BF3C5',
        display: 'inline-block',
      }}
    >
      <Button
        all="unset"
        height="2rem"
        bg="inherit"
        cursor="pointer"
        transition="0.3s"
        width="11.063rem"
        onClick={onClick}
        textAlign="center"
        borderRadius="0.875rem"
      >
        <P fontSize="0.875rem">Dump</P>
      </Button>
    </motion.div>
  );
};

export default ActionCardBuyButton;
