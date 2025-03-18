import { Div } from '@stylin.js/elements';
import { color, motion } from 'framer-motion';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { HeartSVG } from '@/components/svg';

import { LikeComponentProps } from '../create-coin.types';

export const LikeComponent: FC<LikeComponentProps> = ({ disabled }) => {
  const [like, setLike] = useState(false);

  const Motion = motion.create(Div);

  const variants = {
    hover: {
      boxShadow: `${disabled ? 'disabled' : `${color}14`} 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

  const handleChange = () => {
    if (disabled) return;
    setLike(not);
  };

  return (
    <Motion
      p="0.6rem"
      bg="#303238"
      display="flex"
      width="2.5rem"
      height="2.5rem"
      onClick={handleChange}
      whileHover="hover"
      borderRadius="50%"
      alignItems="center"
      variants={variants}
      initial="withoutHover"
      justifyContent="center"
      nHover={{
        background: '#131419',
      }}
      aria-label="likeComponent"
      transition={{ duration: 0.5 }}
      opacity={disabled ? '0.32' : '1'}
      color={disabled ? '#24282D' : '#F6C853'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <HeartSVG
        width="100%"
        maxWidth="100%"
        maxHeight="100%"
        isChecked={like}
      />
    </Motion>
  );
};

export default LikeComponent;
