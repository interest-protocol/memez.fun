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
      px="0.5rem"
      bg="#24282D"
      display="flex"
      color="#F6C853"
      alignItems="center"
      borderRadius="1rem"
      justifyItems="center"
      nHover={{
        background: 'none',
      }}
    >
      <P fontSize="0.8rem">{likeCounter}</P>
      <Motion
        p="0.6rem"
        width="2.5rem"
        height="2.5rem"
        onClick={handleLikes}
        borderRadius="50%"
        variants={variants}
        initial="withoutHover"
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
