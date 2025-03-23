import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { CoinInfoProps } from './activity-card.types';

const CoinInfo: FC<CoinInfoProps> = ({ type, supportingText }) => {
  console.log(type); // TODO: Use this type to take de coin info dinamiclly
  return (
    <Div display="flex" gap="0.5rem">
      <Div width="2.375rem" height="2.375rem">
        <Img src="/default-coin.png" width="100%" height="100%" alt="coin" />
      </Div>
      <Div
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        justifyContent="center"
      >
        <Span fontSize="0.875rem" fontWeight="700" color="#fff">
          Token Coin
        </Span>
        {supportingText && (
          <Span fontSize="0.875rem" fontWeight="400" color="#90939D">
            {supportingText}
          </Span>
        )}
      </Div>
    </Div>
  );
};

export default CoinInfo;
