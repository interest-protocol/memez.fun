import { FC } from 'react';

import { SVGProps } from './svg.types';

const Wallet: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 13"
    fill="none"
    {...props}
  >
    <path
      d="M2.40625 0.625H12.4688C12.8242 0.625 13.125 0.925781 13.125 1.28125C13.125 1.66406 12.8242 1.9375 12.4688 1.9375H2.40625C1.77734 1.9375 1.3125 2.42969 1.3125 3.03125V10.4688C1.3125 11.0977 1.77734 11.5625 2.40625 11.5625H11.5938C12.1953 11.5625 12.6875 11.0977 12.6875 10.4688V5.65625C12.6875 5.05469 12.1953 4.5625 11.5938 4.5625H3.28125C2.89844 4.5625 2.625 4.28906 2.625 3.90625C2.625 3.55078 2.89844 3.25 3.28125 3.25H11.5938C12.9062 3.25 14 4.34375 14 5.65625V10.4688C14 11.8086 12.9062 12.875 11.5938 12.875H2.40625C1.06641 12.875 0 11.8086 0 10.4688V3.03125C0 1.71875 1.06641 0.625 2.40625 0.625ZM10.5 8.9375C10.0078 8.9375 9.625 8.55469 9.625 8.0625C9.625 7.59766 10.0078 7.1875 10.5 7.1875C10.9648 7.1875 11.375 7.59766 11.375 8.0625C11.375 8.55469 10.9648 8.9375 10.5 8.9375Z"
      fill="currentColor"
    />
  </svg>
);

export default Wallet;
