import { Div, P } from '@stylin.js/elements';
import { color, motion } from 'framer-motion';
import { FC } from 'react';

import { HeartSVG } from '@/components/svg';

import { LikeComponentProps } from './like.types';

export const LikeComponent: FC<LikeComponentProps> = ({
  disabled,
  likeCounter,
  handleLikes,
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
      alignItems="center"
      borderRadius="1rem"
      justifyItems="center"
      nHover={{
        background: '#24282D',
      }}
    >
      <P fontSize="0.8rem">{likeCounter}</P>
      <Motion
        width="1rem"
        display="flex"
        height="1rem"
        borderRadius="50%"
        alignItems="center"
        variants={variants}
        onClick={(e) => handleLikes(e as unknown as Event)}
        initial="withoutHover"
        justifyContent="center"
        aria-label="likeComponent"
        transition={{ duration: 0.5 }}
        cursor={disabled ? 'not-allowed' : 'pointer'}
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
