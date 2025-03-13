import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { Range } from 'react-range';

const CardRange: FC = () => {
  const [value, setValue] = useState([50]);

  const rangeWidth = `${((value[0] - 0) / (100 - 0)) * 100}%`;

  return (
    <Div py="1rem">
      <Range
        min={0}
        max={100}
        values={value}
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
              height: '10px',
              width: '100%',
              background: '#FFFFFF0D',
              borderRadius: '8px',
            }}
          >
            {children}
            <Div
              style={{
                height: '100%',
                background: '#F6C853',
                width: rangeWidth,
                borderRadius: '8px',
              }}
            />
          </Div>
        )}
      />
    </Div>
  );
};

export default CardRange;
