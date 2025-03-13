import { FC } from 'react';

import { SVGProps } from './svg.types';

const Stars: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <path
      d="M14.7511 -0.920769L13.9628 7.60392L19.921 13.7514L11.3964 12.9631L5.2489 18.9213L6.0372 10.3966L0.0789723 4.24916L8.60366 5.03746L14.7511 -0.920769Z"
      fill="white"
    />
  </svg>
);

export default Stars;
