import { MouseEvent } from 'react';
export interface LikeComponentProps {
  disabled?: boolean;
  likeCounter: number;
  handleLikes: (e: MouseEvent<HTMLDivElement>) => void;
  revertOrder?: boolean;
}
