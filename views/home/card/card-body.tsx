import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import CardRange from './card-range';

const CardBody: FC = () => {
  return (
    <Div px="1rem">
      <Div py="0.2rem" color="#fff">
        <Span fontSize="1rem" fontWeight="500" fontFamily="Satoshi">
          Ocean Token
        </Span>
      </Div>
      <Div
        py="0.5rem"
        display="flex"
        color="#90939D"
        justifyContent="space-between"
      >
        <Span fontSize="0.75rem" fontWeight="500">
          Market Cap
        </Span>
        <Span fontSize="0.75rem" fontWeight="500">
          Last purshase
        </Span>
      </Div>
      <Div display="flex" justifyContent="space-between" color="#fff">
        <Span fontSize="1rem" fontWeight="500">
          9,098,514
        </Span>
        <Span fontSize="1rem" fontWeight="500">
          143k
        </Span>
      </Div>
      <CardRange />
    </Div>
  );
};

export default CardBody;
