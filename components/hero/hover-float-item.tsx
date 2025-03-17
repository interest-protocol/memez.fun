import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { CircleDollarSignSVG } from '../svg';
import { HoverFloatItemProps } from './hero-carousel.types';

const LABELS = {
  marketCap: 'Mkt. Cap',
  volume24h: '24 hour volume',
  allTimeVolume: 'All-time vol',
};

const HoverFloatItem: FC<HoverFloatItemProps> = ({ value, labelKey }) => {
  return (
    <Div
      py="1rem"
      pl="1rem"
      pr="1.5rem"
      bg="#303238"
      height="4rem"
      alignItems="center"
      borderRadius="2rem"
      display="inline-flex"
    >
      <Div mr="0.5rem" height="2rem" width="2rem">
        <CircleDollarSignSVG maxWidth="100%" maxHeight="100%" width="100%" />
      </Div>
      <Div>
        <P mb="0.1rem" color="white" fontSize="0.75rem" fontWeight="300">
          {LABELS[labelKey]}
        </P>
        <P color="white" fontSize="1.25rrem">
          {value ?? '000.0'}
        </P>
      </Div>
    </Div>
  );
};

export default HoverFloatItem;
