import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { MetricProps } from './metric.types';

const Metric: FC<MetricProps> = ({
  following,
  followers,
  coinsOwned,
  totalValueCoin,
}) => (
  <Div
    mt="8.75rem"
    color="#FFFFFF"
    display="flex"
    justifyContent="space-between"
    mx="0.688rem"
    pb="2rem"
    borderBottom="1px solid #24282D"
  >
    <Div
      fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Span lineHeight="1.75rem" fontWeight="700">
        {followers}
      </Span>
      <Span
        fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        lineHeight="1.375rem"
      >
        Followers
      </Span>
    </Div>
    <Div
      fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Span lineHeight="1.75rem" fontWeight="700">
        {following}
      </Span>
      <Span
        fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        lineHeight="1.375rem"
      >
        Following
      </Span>
    </Div>
    <Div
      fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Span lineHeight="1.75rem" fontWeight="700">
        {coinsOwned}
      </Span>
      <Span
        fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        lineHeight="1.375rem"
      >
        Coins Owned
      </Span>
    </Div>
    <Div
      fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Span lineHeight="1.75rem" fontWeight="700">
        {totalValueCoin}
      </Span>
      <Span
        fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        lineHeight="1.375rem"
      >
        Total Value Coin
      </Span>
    </Div>
  </Div>
);
export default Metric;
