import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { Range } from 'react-range';

const RangeBar: FC = () => {
  const [value, setValue] = useState([50]);

  const rangeWidth = `${((value[0] - 0) / (100 - 0)) * 100}%`;

  return (
    <Range
      min={0}
      max={100}
      values={value}
      disabled
      onChange={(values) => setValue(values)}
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
