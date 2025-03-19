import { FC } from 'react';

import { SVGProps } from './svg.types';

const Ball1: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 47 47"
    fill="none"
    {...props}
  >
    <circle
      cx="22.8516"
      cy="22.8516"
      r="22.8516"
      transform="matrix(-0.939915 -0.341408 -0.341408 0.939915 53.0645 10.1104)"
      fill="url(#paint0_radial_1035_6421)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_1035_6421"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.1237 37.8233) rotate(-82.3332) scale(41.3449)"
      >
        <stop stopColor="#FDC11F" />
        <stop offset="1" stopColor="#FE8241" />
      </radialGradient>
    </defs>
  </svg>
);

export default Ball1;
