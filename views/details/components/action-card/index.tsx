import { Div, Img } from '@stylin.js/elements';
import { useEffect, useState } from 'react';

import {
  CircleCompletedSVG,
  CircleHalfSVG,
  CircleQuarterSVG,
} from '@/components/svg';
import { getImageColor } from '@/utils';

import TokenField from '../token-field';
import ActionCardBuyButton from './action-card-buttons/action-card-buy-button';
import ActionCardDumpButton from './action-card-buttons/action-card-sell-button';
import ActionTabsCard from './action-card-tabs';

const ActionCard = () => {
  const [cardType, setCardType] = useState<string>('buy');

  const [dominantColor, setDominantColor] = useState<string>('#000000');

  useEffect(() => {
    const fetchImageColor = async () => {
      const color = await getImageColor('/sell-background.png');
      setDominantColor(color);
    };

    fetchImageColor();
  }, []);

  return (
    <Div
      bg="#131419"
      overflow="hidden"
      height="39.563rem"
      position="relative"
      borderRadius="1.5rem"
      border="1px solid #24282D"
      background={`linear-gradient(180deg, #131419 80%, ${dominantColor} 200%)`}
    >
      <Div zIndex="1" position="absolute">
        <Img src="/sell-background.png" />
      </Div>
      <Div
        height="100%"
        px="4rem"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Div
          py="3rem"
          zIndex="2"
          display="flex"
          position="relative"
          justifyContent="center"
        >
          <ActionTabsCard activeColor={dominantColor} />
        </Div>
        <Div
          zIndex="2"
          display="flex"
          position="relative"
          flexDirection="column"
        >
          <Div
            py="1rem"
            zIndex="2"
            gap="0.5rem"
            display="flex"
            position="relative"
            justifyContent="flex-end"
          >
            <Div cursor="pointer">
              <CircleQuarterSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
            <Div cursor="pointer">
              <CircleHalfSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
            <Div cursor="pointer">
              <CircleCompletedSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
          </Div>
          <Div
            gap="3rem"
            display="flex"
            position="relative"
            flexDirection="column"
          >
            <TokenField type="slippage" />
            <TokenField type="slippage" />
          </Div>
        </Div>
        <Div py="3rem" display="flex" justifyContent="center" width="100%">
          <ActionCardBuyButton onClick={() => {}} />
          <ActionCardDumpButton onClick={() => {}} />
        </Div>
      </Div>
    </Div>
  );
};

export default ActionCard;
