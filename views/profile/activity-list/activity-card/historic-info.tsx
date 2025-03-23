import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { HistoricInfoProps } from './activity-card.types';

const HistoricInfo: FC<HistoricInfoProps> = ({
  isSold,
  coinName,
  amount,
  amountInUSD,
}) => {
  return (
    <Div
      gap="2.5rem"
      color="#E4E7EB"
      alignItems="center"
      display={['none', 'none', 'none', 'flex']}
    >
      <Div
        borderRadius="100px"
        display="flex"
        alignItems="center"
        bg="#303238"
        px="0.5rem"
        height="1.5rem"
      >
        <Span fontWeight="400" fontSize="0.875rem">
          {isSold ? 'Sold' : 'Bought'}
        </Span>
      </Div>
      <Div
        display="flex"
        flexDirection="column"
        textAlign="left"
        alignItems="end"
      >
        <Span fontSize="0.75rem">{`${amount} ${coinName}`}</Span>
        <Span fontSize="0.75rem">{`${amountInUSD} USD`}</Span>
      </Div>
    </Div>
  );
};

export default HistoricInfo;
