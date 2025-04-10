import { MouseEvent } from 'react';
export interface LikeComponentProps {
  poolId: string;
  isLiked?: boolean;
  likeCounter: number;
  handleLikes: (e: MouseEvent<HTMLDivElement>) => void;
  revertOrder?: boolean;
}
