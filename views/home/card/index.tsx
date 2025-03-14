import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({ imgSrc }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const { push } = useRouter();

  const handleOnCardClick = () => {
    push('/details');
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
      border="1px solid #24282D"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      nHover={{
        borderColor: '#F8D375',
      }}
    >
      <CardIcon isCardHovered={isCardHovered} imgSrc={imgSrc} />
      <CardBody />
      <CardFooter />
    </Div>
  );
};

export default Card;
