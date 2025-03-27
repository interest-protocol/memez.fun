import { Button, P } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { ActionCardButtonProps } from './action-card-button.type';

const ActionCardBuyButton: FC<ActionCardButtonProps> = ({ onClick }) => {
  return (
    <div style={{ position: 'relative', width: '11.063rem', height: '2rem' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.875rem',
          backgroundColor: '#8BF3C5',
        }}
        animate={{
          width: ['11.063rem', '11.5rem', '11.5rem', '11.063rem'],
          height: ['2rem', '2.3rem', '2.3rem', '2rem'],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.3, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: 'easeInOut',
        }}
      >
        <Button
          all="unset"
          bg="inherit"
          height="100%"
          width="100%"
          cursor="pointer"
          transition="0.3s"
          onClick={onClick}
          textAlign="center"
          borderRadius="0.875rem"
        >
          <P fontSize="0.875rem">Pump</P>
        </Button>
      </motion.div>
    </div>
  );
};

export default ActionCardBuyButton;
