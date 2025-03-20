import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { Range } from 'react-range';

import { RangeBarProps } from './range.types';

const RangeBar: FC<RangeBarProps> = ({ value }) => {
  const values = [value];

  const rangeWidth = `${((values[0] - 0) / (100 - 0)) * 100}%`;

  return (
    <Range
      min={0}
      max={100}
      disabled
      values={values}
      onChange={() => {}}
      renderThumb={({ props }) => (
        <Div
          {...props}
          style={{
            ...props.style,
            display: 'none',
          }}
        />
      )}
      renderTrack={({ props, children }) => (
        <Div
          {...props}
          style={{
            ...props.style,
            width: '100%',
            height: '10px',
            borderRadius: '8px',
            background: '#FFFFFF0D',
          }}
        >
          {children}
          <Div
            style={{
              height: '100%',
              width: rangeWidth,
              borderRadius: '8px',
              background: '#F6C853',
            }}
          />
        </Div>
      )}
    />
  );
};

export default RangeBar;
