export interface CardIconProps {
  imgSrc: string;
  cardNumber: number;
  isVerified: boolean;
  creatorAddress: string;
  isCardHovered?: boolean;
}

export interface CardBodyProps {
  name: string;
  quoteBalance: number;
  lastPurchase: number;
  bondingCurve: number;
}

export interface CardProps extends CardIconProps, CardBodyProps {
  onClick?: () => void;
}
