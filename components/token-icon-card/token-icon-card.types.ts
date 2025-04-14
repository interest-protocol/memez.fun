export interface TokenCardIconProps {
  imgSrc: string;
  userAddress: string;
  isCardHovered?: boolean;
  showCardDetails?: boolean;
  isMiniDetailsCard?: boolean;
}

export type MiniTokenCardIconProps = Pick<TokenCardIconProps, 'imgSrc'>;
