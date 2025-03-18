import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({
  imgSrc,
  isCardHovered,
  user,
  cardNumber,
  isVerified,
  tokenName,
  marketCap,
  lastPurchase,
}) => {
  return (
    <Div
      width="100%"
      bg="#131419"
      cursor="pointer"
      transition="0.3s"
      borderRadius="1.5rem"
      border="1px solid #24282D"
      nHover={{
        borderColor: isCardHovered ? '#F8D375' : 'none',
      }}
    >
      <CardIcon
        user={user}
        imgSrc={imgSrc}
        isVerified={isVerified}
        cardNumber={cardNumber}
        isCardHovered={isCardHovered}
      />
      <CardBody
        tokenName={tokenName}
        marketCap={marketCap}
        lastPurchase={lastPurchase}
      />
      <CardFooter />
    </Div>
  );
};

export default Card;
