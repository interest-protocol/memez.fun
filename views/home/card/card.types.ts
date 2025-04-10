export interface CardIconProps {
  imgSrc: string;
  cardNumber?: number;
  isVerified?: boolean;
  creatorAddress: string;
  isCardHovered?: boolean;
}

export interface CardBodyProps {
  name: string;
  quoteBalance: string;
  bondingCurve: number;
  lastPurchase: number | string;
}

export interface UserLike {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

export interface Likes {
  total: number;
  data: UserLike[];
}

export interface CardLikesProps {
  totalLikes: number;
}

export interface CardFooterProps extends Likes {}

export interface CardProps extends CardIconProps, CardBodyProps {
  likes?: Likes;
  poolId: string;
  onClick?: () => void;
}
