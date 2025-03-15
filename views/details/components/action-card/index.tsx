import { Div, Img } from '@stylin.js/elements';
import { useEffect, useState } from 'react';

import {
  CircleCompletedSVG,
  CircleHalfSVG,
  CircleQuarterSVG,
} from '@/components/svg';
import { getImageColor } from '@/utils';

import TokenField from '../token-field';
import ActionTabsCard from './action-card-tabs';

const ActionCard = () => {
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
      <Div px="4rem">
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

        <Div display="flex" zIndex="2" position="relative">
          <TokenField />
        </Div>
      </Div>
    </Div>
  );
};

export default ActionCard;
