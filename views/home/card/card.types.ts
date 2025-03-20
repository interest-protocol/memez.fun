export interface CardIconProps {
  user: string;
  imgSrc: string;
  cardNumber: number;
  isVerified: boolean;
  isCardHovered?: boolean;
}

export interface CardBodyProps {
  tokenName: string;
  marketCap: number;
  lastPurchase: number;
}

export interface CardProps extends CardIconProps, CardBodyProps {
  onClick?: () => void;
}
