import { Div, P } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, MouseEvent } from 'react';

import { HeartSVG } from '@/components/svg';

import { LikeComponentProps } from './like.types';

export const LikeComponent: FC<LikeComponentProps> = ({
  isLiked,
  likeCounter,
  handleLikes,
  revertOrder,
}) => {
  return (
    <Div
      p="0.5rem"
      gap=".5rem"
      display="flex"
      color="#F6C853"
      borderRadius="1rem"
      alignItems="center"
      justifyItems="center"
      flexDirection={revertOrder ? 'row-reverse' : 'row'}
    >
      <P fontSize="0.8rem" minWidth="1.5rem" textAlign="center">
        {likeCounter}
      </P>
      <motion.div
        style={{
          width: '2rem',
          height: '2rem',
          display: 'flex',
          padding: '0.5rem',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          background: '#24282D',
          justifyContent: 'center',
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileTap={{ scale: 2.2 }}
        whileHover={{
          background: '#131419',
        }}
        onClick={(e: MouseEvent<HTMLDivElement>) => handleLikes(e)}
      >
        <HeartSVG
          width="100%"
          maxWidth="100%"
          maxHeight="100%"
          isChecked={isLiked}
        />
      </motion.div>
    </Div>
  );
};

export default LikeComponent;
