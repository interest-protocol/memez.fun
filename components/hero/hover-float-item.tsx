import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { CircleDollarSignSVG, FilledBarChartSVG } from '../svg';
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
      whiteSpace="nowrap"
      display="inline-flex"
    >
      <Div mr="0.5rem" height="1.5rem" width="1.5rem">
        {labelKey === 'marketCap' ? (
          <CircleDollarSignSVG maxWidth="100%" maxHeight="100%" width="100%" />
        ) : (
          <FilledBarChartSVG maxWidth="100%" maxHeight="100%" width="100%" />
        )}
      </Div>
      <Div>
        <P
          mb="0.1rem"
          color="white"
          fontWeight="300"
          fontSize="0.75rem"
          whiteSpace="nowrap"
        >
          {LABELS[labelKey]}
        </P>
        <P color="white" fontSize="1.25rrem" whiteSpace="nowrap">
          {value ?? '000.0'}
        </P>
      </Div>
    </Div>
  );
};

export default HoverFloatItem;
