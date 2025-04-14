import { Div, P } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, MouseEvent, useState } from 'react';

import { HeartSVG } from '@/components/svg';
import { useLikePools } from '@/hooks/use-pool-like';

import { LikeComponentProps } from './like.types';

export const LikeComponent: FC<LikeComponentProps> = ({
  poolId,
  revertOrder,
  isLiked: isLikedProp = false,
  likeCounter: initialCounter,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(isLikedProp);
  const [likeCounter, setLikeCounter] = useState<number>(initialCounter);

  const { toggleLike, isLiking } = useLikePools(poolId);

  const handleLike = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isLiking) return;

    const nextIsLiked = !isLiked;
    setIsLiked(nextIsLiked);
    setLikeCounter((prev) => prev + (nextIsLiked ? 1 : -1));

    try {
      await toggleLike();
    } catch (err) {
      setIsLiked(!nextIsLiked);
      setLikeCounter((prev) => prev + (nextIsLiked ? -1 : 1));
    }
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
          opacity: isLiking ? 0.6 : 1,
        }}
        onClick={handleLike}
        whileTap={{ scale: 2.2 }}
        whileHover={{ background: '#131419' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
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
