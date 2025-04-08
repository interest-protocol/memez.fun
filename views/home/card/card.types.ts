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

export interface CardProps extends CardIconProps, CardBodyProps {
  poolId: string;
  onClick?: () => void;
}
