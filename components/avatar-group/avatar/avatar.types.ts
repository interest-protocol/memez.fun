export interface AvatarProps {
  title: string;
  imgSrc?: string;
  onClick?: () => void;
  isVerified?: boolean;
  size?: 'small' | 'medium';
}
