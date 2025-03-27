import { Div, P } from '@stylin.js/elements';
import { color, motion } from 'framer-motion';
import { FC, MouseEvent } from 'react';

import { HeartSVG } from '@/components/svg';

import { LikeComponentProps } from './like.types';

export const LikeComponent: FC<LikeComponentProps> = ({
  disabled,
  likeCounter,
  handleLikes,
  revertOrder,
}) => {
  const Motion = motion.create(Div);

  const variants = {
    hover: {
      boxShadow: `${disabled ? 'disabled' : `${color}14`} 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

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
      <P fontSize="0.8rem">{likeCounter}</P>
      <Motion
        p="0.5rem"
        width="2rem"
        display="flex"
        bg="#24282D"
        height="2rem"
        alignItems="center"
        borderRadius="50%"
        variants={variants}
        justifyContent="center"
        onClick={(e: MouseEvent<HTMLDivElement>) => handleLikes(e)}
        initial="withoutHover"
        aria-label="likeComponent"
        transition={{ duration: 0.5 }}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        nHover={{
          background: '#131419',
        }}
      >
        <HeartSVG
          width="100%"
          maxWidth="100%"
          maxHeight="100%"
          isChecked={disabled}
        />
      </Motion>
    </Div>
  );
};

export default LikeComponent;
