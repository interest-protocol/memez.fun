import { MouseEvent } from 'react';
export interface LikeComponentProps {
  isLiked?: boolean;
  likeCounter: number;
  handleLikes: (e: MouseEvent<HTMLDivElement>) => void;
  revertOrder?: boolean;
}
