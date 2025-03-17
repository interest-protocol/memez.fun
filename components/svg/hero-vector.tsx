import { FC } from 'react';

import { SVGProps } from './svg.types';

const HeroVector: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 1440 443"
    fill="none"
    {...props}
  >
    <path
      d="M-24.5 478.002C67.6667 352.168 467.838 -91.7028 661 -189C896.5 -307.622 883 -284 758 -166.5C592.667 -22.9998 124 552.902 316 512.502C425.706 489.418 814.443 622.046 861 450.001C936.5 171.001 1262.32 264.57 1388 308.001C1429 322.17 1516.5 370.001 1436.5 450.001C1336.5 550.001 953 106.501 1100 58.0011C1217.6 19.2011 1390.67 138.835 1462.5 203.501"
      stroke="url(#paint0_linear_1035_6392)"
      strokeWidth="80"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1035_6392"
        x1="1514.5"
        y1="119.5"
        x2="-200.5"
        y2="574.501"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F8D375" />
        <stop offset="0.31" stopColor="#F6C853" />
        <stop offset="1" stopColor="#FF562C" />
      </linearGradient>
    </defs>
  </svg>
);

export default HeroVector;
