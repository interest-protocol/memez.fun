import { not } from 'ramda';
import { FC, MouseEvent, useState } from 'react';

import LikeComponent from '../components/like';
import { CardLikesProps } from './card.types';

const CardLikes: FC<CardLikesProps> = ({ poolId, totalLikes }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCounter, setLikeCounter] = useState<number>(totalLikes);

  const handleLike = (e: MouseEvent<HTMLDivElement>) => {
    setIsLiked(not);
    e.stopPropagation();
    setLikeCounter((likeCounter) =>
      isLiked ? likeCounter - 1 : likeCounter + 1
    );
  };

  return (
    <LikeComponent
      poolId={poolId}
      isLiked={isLiked}
      handleLikes={handleLike}
      likeCounter={likeCounter}
    />
  );
};

export default CardLikes;
