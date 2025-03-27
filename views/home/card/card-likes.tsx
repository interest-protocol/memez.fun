import { not } from 'ramda';
import { FC, MouseEvent, useState } from 'react';

import LikeComponent from '../components/like';

const CardLikes: FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCounter, setLikeCounter] = useState<number>(5);

  const handleLike = (e: MouseEvent<HTMLDivElement>) => {
    setIsLiked(not);
    e.stopPropagation();
    setLikeCounter((likeCounter) =>
      isLiked ? likeCounter - 1 : likeCounter + 1
    );
  };
  return (
    <LikeComponent
      likeCounter={likeCounter}
      handleLikes={handleLike}
      isLiked={isLiked}
    />
  );
};

export default CardLikes;
