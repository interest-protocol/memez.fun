import { FC } from 'react';

import { SVGProps } from './svg.types';

const Checked: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxHeight, maxWidth }} viewBox="0 0 20 20" {...props}>
    <path
      d="M14.7656 6.98438C15.0703 7.26562 15.0703 7.75781 14.7656 8.03906L8.76562 14.0391C8.48438 14.3438 7.99219 14.3438 7.71094 14.0391L4.71094 11.0391C4.40625 10.7578 4.40625 10.2656 4.71094 9.98438C4.99219 9.67969 5.48438 9.67969 5.76562 9.98438L8.25 12.4453L13.7109 6.98438C13.9922 6.67969 14.4844 6.67969 14.7656 6.98438Z"
      fill="#F6C853"
    />
  </svg>
);

export default Checked;
