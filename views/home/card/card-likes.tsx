import { not } from 'ramda';
import { FC, useState } from 'react';

import LikeComponent from '../components/like';

const CardLikes: FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCounter, setLikeCounter] = useState<number>(5);

  const handleLike = () => {
    setIsLiked(not);
    setLikeCounter((likeCounter) => likeCounter + 1);
  };
  return (
    <LikeComponent
      likeCounter={likeCounter}
      handleLikes={handleLike}
      disabled={isLiked}
    />
  );
};

export default CardLikes;
