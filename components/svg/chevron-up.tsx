import { FC } from 'react';

import { SVGProps } from './svg.types';

const ChevronUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 12 7"
    fill="none"
    {...props}
  >
    <path
      d="M5.60156 1.10156C5.8125 0.890625 6.16406 0.890625 6.375 1.10156L10.8984 5.60156C11.1094 5.83594 11.1094 6.1875 10.8984 6.39844C10.6641 6.63281 10.3125 6.63281 10.1016 6.39844L6 2.29688L1.89844 6.39844C1.66406 6.63281 1.3125 6.63281 1.10156 6.39844C0.867188 6.1875 0.867188 5.83594 1.10156 5.625L5.60156 1.10156Z"
      fill="#90939D"
    />
  </svg>
);

export default ChevronUp;
