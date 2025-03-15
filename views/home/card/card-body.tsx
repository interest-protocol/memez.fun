import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import RangeBar from '@/components/range';

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
      <RangeBar />
      <Div display="flex" justifyContent="space-between">
        Bonding
      </Div>
    </Div>
  );
};

export default CardBody;
