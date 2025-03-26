export interface AvatarProps {
  title: string;
  imgSrc?: string;
  onClick?: (e: Event) => void;
  isVerified?: boolean;
  size?: 'small' | 'medium';
}
