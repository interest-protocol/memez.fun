import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { RadioCircleSVG } from '@/components/svg';

import { DexCardProps } from '../../create-coin.types';

const DexCard: FC<Omit<DexCardProps, 'dexId'>> = ({
  dexName,
  onClick,
  imageUrl,
  isReview,
  isSelected,
}) => (
  <Div
    pr="1rem"
    py="0.5rem"
    pl="0.5rem"
    bg="#24282D"
    display="flex"
    cursor="pointer"
    onClick={() => {
      if (isReview) return;
      onClick?.();
    }}
    border="1px solid"
    alignItems="center"
    borderRadius="1rem"
    justifyContent="space-between"
    borderColor={isSelected ? ' #494C54' : 'transparent'}
  >
    <Div display="flex" alignItems="center" gap="0.5rem">
      <Div
        width="2rem"
        height="2rem"
        borderRadius="0.5rem"
        bg="#000"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Div width="1.5rem" height="1.5rem">
          <img src={imageUrl} alt="cetus-dex" width="100%" height="100%" />
        </Div>
      </Div>
      <Span fontSize="0.875rem" fontWeight="500">
        {dexName}
      </Span>
    </Div>
    {!isReview && (
      <Div width="1.25rem" height="1.25rem">
        <RadioCircleSVG
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
          isChecked={isSelected}
        />
      </Div>
    )}
  </Div>
);

export default DexCard;
