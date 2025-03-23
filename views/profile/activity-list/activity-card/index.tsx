import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { useIsMobile } from '@/hooks/use-is-mobile';

import ActionButtons from './action-buttons';
import { ActivityCardProps } from './activity-card.types';
import CoinInfo from './coin-info';
import HistoricInfo from './historic-info';

const ActivityCard: FC<ActivityCardProps> = ({
  type,
  isSold,
  amount,
  coinName,
  amountInUSD,
  supportingText,
  onBuy,
  onSell,
}) => {
  const { isMobile } = useIsMobile();
  return (
    <Div display="flex" flexDirection="column" gap="0.25rem">
      <Div
        p="0.75rem"
        bg="#24282D"
        display="flex"
        borderRadius="0.5rem"
        justifyContent="space-between"
      >
        <CoinInfo
          type={type}
          supportingText={
            isMobile
              ? coinName
                ? `${amount} • ${amountInUSD} USD`
                : amount
              : supportingText
          }
        />
        {coinName ? (
          <HistoricInfo
            isSold={isSold}
            amount={amount}
            coinName={coinName}
            amountInUSD={amountInUSD}
          />
        ) : (
          <Div
            color="#E4E7EB"
            alignItems="end"
            textAlign="left"
            flexDirection="column"
            justifyContent="center"
            display={['none', 'none', 'none', 'flex']}
          >
            <Span fontSize="0.875rem" fontWeight="400">
              {amount}
            </Span>
          </Div>
        )}
        <ActionButtons onBuy={onBuy} onSell={onSell} />
      </Div>
    </Div>
  );
};

export default ActivityCard;
