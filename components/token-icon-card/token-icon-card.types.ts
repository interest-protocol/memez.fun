export interface TokenCardIconProps {
  imgSrc: string;
  isCardHovered?: boolean;
  showCardDetails?: boolean;
  isMiniDetailsCard?: boolean;
}

export type MiniTokenCardIconProps = Pick<TokenCardIconProps, 'imgSrc'>;
