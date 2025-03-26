import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import EngagementCounterModal from '@/components/engagement-counter';
import { useModal } from '@/hooks/use-modal';

import { MetricProps } from './metric.types';

const Metric: FC<MetricProps> = ({
  following,
  followers,
  coinsOwned,
  totalValueCoin,
}) => {
  const { setContent, onClose } = useModal();

  const handleClick = () =>
    setContent(<EngagementCounterModal title="Followers" />, { onClose });
  return (
    <Div
      pb="2rem"
      mt="8.75rem"
      mx="0.688rem"
      display="flex"
      color="#FFFFFF"
      justifyContent="space-between"
      borderBottom="1px solid #24282D"
    >
      <Div
        display="flex"
        cursor="pointer"
        transition="0.3s"
        alignItems="center"
        onClick={handleClick}
        flexDirection="column"
        nHover={{
          opacity: '0.8',
        }}
        fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      >
        <Span lineHeight="1.75rem">{followers}</Span>
        <Span
          lineHeight="1.375rem"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
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
};

export default Metric;
