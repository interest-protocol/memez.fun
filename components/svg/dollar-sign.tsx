import { FC } from 'react';

import { SVGProps } from './svg.types';

const DollarSign: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 8 13"
    fill="none"
    {...props}
  >
    <path
      opacity="0.9"
      d="M4.5625 1.0625V2.23438C5.19531 2.30469 5.78125 2.42188 6.22656 2.51562C6.53125 2.58594 6.71875 2.89062 6.64844 3.19531C6.57812 3.5 6.27344 3.6875 5.96875 3.61719C5.24219 3.45312 4.1875 3.24219 3.29688 3.33594C2.85156 3.35938 2.5 3.45312 2.24219 3.61719C2.00781 3.78125 1.84375 3.99219 1.77344 4.34375C1.70312 4.60156 1.75 4.78906 1.82031 4.90625C1.86719 5.04688 2.00781 5.16406 2.21875 5.30469C2.66406 5.58594 3.34375 5.75 4.11719 5.96094L4.1875 5.98438C4.91406 6.17188 5.73438 6.38281 6.36719 6.75781C6.69531 6.94531 6.97656 7.22656 7.16406 7.60156C7.375 7.97656 7.39844 8.42188 7.32812 8.89062C7.16406 9.73438 6.55469 10.2734 5.80469 10.5547C5.42969 10.6953 5.00781 10.7891 4.5625 10.8125V11.9375C4.5625 12.2656 4.30469 12.5 4 12.5C3.67188 12.5 3.4375 12.2656 3.4375 11.9375V10.7891C3.34375 10.7656 3.27344 10.7656 3.20312 10.7422C2.61719 10.6719 1.58594 10.4375 0.953125 10.1562C0.671875 10.0156 0.53125 9.6875 0.671875 9.40625C0.789062 9.125 1.11719 9.00781 1.39844 9.125C1.91406 9.33594 2.82812 9.57031 3.34375 9.64062C4.1875 9.75781 4.89062 9.6875 5.40625 9.5C5.89844 9.3125 6.15625 9.03125 6.20312 8.67969C6.27344 8.42188 6.22656 8.23438 6.15625 8.11719C6.10938 7.97656 5.96875 7.83594 5.75781 7.71875C5.3125 7.4375 4.65625 7.25 3.85938 7.0625L3.78906 7.03906C3.0625 6.85156 2.24219 6.64062 1.60938 6.26562C1.30469 6.05469 1 5.79688 0.8125 5.42188C0.625 5.02344 0.578125 4.60156 0.671875 4.13281C0.789062 3.45312 1.14062 2.98438 1.63281 2.67969C2.10156 2.375 2.66406 2.25781 3.20312 2.21094C3.27344 2.1875 3.34375 2.1875 3.4375 2.1875V1.0625C3.4375 0.757812 3.67188 0.5 4 0.5C4.30469 0.5 4.5625 0.757812 4.5625 1.0625Z"
      fill="#90939D"
    />
  </svg>
);

export default DollarSign;
