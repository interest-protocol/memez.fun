import { Div, P } from '@stylin.js/elements';
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
    <Div gap="0.4rem" display="flex" alignItems="center" color="#F6C853">
      <P fontSize="0.8rem">{likeCounter}</P>
      <Div onClick={handleLike}>
        <LikeComponent disabled={isLiked} />
      </Div>
    </Div>
  );
};

export default CardLikes;
