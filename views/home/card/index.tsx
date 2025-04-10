import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({
  name,
  likes,
  imgSrc,
  poolId,
  cardNumber,
  isVerified,
  quoteBalance,
  lastPurchase,
  bondingCurve,
  creatorAddress,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const { push } = useRouter();

  const handleOnCardClick = () => {
    push(`/details/${poolId}`);
  };

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
      onClick={handleOnCardClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      border="1px solid #24282D"
      nHover={{
        borderColor: isCardHovered ? '#F8D375' : 'none',
      }}
    >
      <CardIcon
        imgSrc={imgSrc}
        isVerified={isVerified}
        cardNumber={cardNumber}
        isCardHovered={isCardHovered}
        creatorAddress={creatorAddress}
      />
      <CardBody
        name={name}
        quoteBalance={quoteBalance}
        bondingCurve={bondingCurve}
        lastPurchase={lastPurchase}
      />
      <CardFooter data={likes?.data ?? []} total={likes?.total ?? 0} />
    </Div>
  );
};

export default Card;
