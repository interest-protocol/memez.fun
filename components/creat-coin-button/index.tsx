import { Button, Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { OctagonPlusSVG, StarSVG } from '../svg';
import { CreateCoinButtonProps } from './create-coin-button.types';

const CreateCoinButton: FC<CreateCoinButtonProps> = ({ onClick }) => {
  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleOnMouseEnter = () => {
    setIsButtonHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsButtonHover(false);
  };

  return (
    <Div
      cursor="pointer"
      height="2.75rem"
      onClick={onClick}
      position="relative"
      borderRadius="1.5rem"
      background="#FEE5A6"
    >
      {isButtonHover && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: [1, 1.3, 1], y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ position: 'absolute', top: '-1.4rem', left: '-0.6rem' }}
          >
            <StarSVG maxHeight="1.3rem" maxWidth="1.3rem" width="1.3rem" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1], y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ position: 'absolute', top: '-1.6rem', left: '3rem' }}
          >
            <StarSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: [1, 1.4, 1], y: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ position: 'absolute', top: '-1.6rem', left: '8rem' }}
          >
            <StarSVG maxHeight="1.1rem" maxWidth="1.1rem" width="1.1rem" />
          </motion.div>
        </>
      )}

      <Button
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        nHover={{
          marginTop: '-0.5rem',
        }}
        px="1rem"
        gap="0.5rem"
        display="flex"
        color="#000"
        cursor="pointer"
        height="2.75rem"
        transition="0.3s"
        alignItems="center"
        borderRadius="1.5rem"
        justifyContent="center"
        border="1px solid #FEE5A6"
        background="linear-gradient(90deg, #F7D06D 0%, #FC6F34 100%)"
      >
        <OctagonPlusSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
        Create coin
        <OctagonPlusSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
      </Button>
    </Div>
  );
};

export default CreateCoinButton;
