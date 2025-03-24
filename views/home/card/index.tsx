import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({
  imgSrc,
  user,
  cardNumber,
  isVerified,
  tokenName,
  marketCap,
  lastPurchase,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsCardHovered(false);
  };
  return (
    <Div
      width="100%"
      bg="#131419"
      cursor="pointer"
      transition="0.3s"
      borderRadius="1.5rem"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
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
