import { FC } from 'react';

import { SVGProps } from './svg.types';

const Ball2: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 23 24"
    fill="none"
    {...props}
  >
    <circle
      cx="11.0318"
      cy="11.0318"
      r="11.0318"
      transform="matrix(-0.939915 -0.341408 -0.341408 0.939915 25.6035 5.3916)"
      fill="url(#paint0_radial_1035_6425)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_1035_6425"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.6078 14.9717) rotate(-96.009) scale(15.0545)"
      >
        <stop stopColor="#FED154" />
        <stop offset="1" stopColor="#FD9E18" />
      </radialGradient>
    </defs>
  </svg>
);

export default Ball2;
