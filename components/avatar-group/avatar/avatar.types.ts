import { MouseEvent } from 'react';
export interface AvatarProps {
  id: string;
  name: string;
  avatar?: string;
  username: string;
  isVerified?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
