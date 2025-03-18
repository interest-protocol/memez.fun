export interface CardIconProps {
  user: string;
  cardNumber: number;
  imgSrc: string;
  isVerified: boolean;
  isCardHovered: boolean;
}

export interface CardBodyProps {
  tokenName: string;
  marketCap: number;
  lastPurchase: number;
}

export interface CardProps extends CardIconProps, CardBodyProps {
  onClick?: () => void;
}
