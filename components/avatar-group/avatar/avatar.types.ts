import { MouseEvent } from 'react';
export interface AvatarProps {
  title: string;
  imgSrc?: string;
  isVerified?: boolean;
  size?: 'small' | 'medium';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
