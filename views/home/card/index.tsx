import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardBody from './card-body';
import CardIcon from './card-icon';

const Card: FC<CardProps> = ({ imgSrc }) => {
  return (
    <Div
      p="0.5rem"
      width="100%"
      borderRadius="1.5rem"
      border="1px solid #24282D"
    >
      <CardIcon imgSrc={imgSrc} />
      <CardBody />
    </Div>
  );
};

export default Card;
