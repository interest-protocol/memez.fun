import { MouseEvent } from 'react';
export interface AvatarProps {
  title: string;
  imgSrc?: string;
  isVerified?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
