import { FC } from 'react';

import { SVGProps } from './svg.types';

const Filters: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 14 12"
    fill="none"
    {...props}
  >
    <path
      d="M0 0.75C0 0.34375 0.3125 0 0.75 0H13.25C13.6562 0 14 0.34375 14 0.75C14 1.1875 13.6562 1.5 13.25 1.5H0.75C0.3125 1.5 0 1.1875 0 0.75ZM2 5.75C2 5.34375 2.3125 5 2.75 5H11.25C11.6562 5 12 5.34375 12 5.75C12 6.1875 11.6562 6.5 11.25 6.5H2.75C2.3125 6.5 2 6.1875 2 5.75ZM9 10.75C9 11.1875 8.65625 11.5 8.25 11.5H5.75C5.3125 11.5 5 11.1875 5 10.75C5 10.3438 5.3125 10 5.75 10H8.25C8.65625 10 9 10.3438 9 10.75Z"
      fill="#E4E7EB"
    />
  </svg>
);

export default Filters;
