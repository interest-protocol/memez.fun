import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({ imgSrc, onClick }) => {
  return (
    <Div
      width="100%"
      bg="#131419"
      cursor="pointer"
      onClick={onClick}
      transition="0.3s"
      borderRadius="1.5rem"
      border="1px solid #24282D"
      nHover={{
        borderColor: '#F8D375',
      }}
    >
      <CardIcon imgSrc={imgSrc} />
      <CardBody />
      <CardFooter />
    </Div>
  );
};

export default Card;
