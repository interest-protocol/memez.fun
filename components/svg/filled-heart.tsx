import { FC } from 'react';

import { SVGProps } from './svg.types';

const FilledHeart: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 16 14"
    fill="none"
    {...props}
  >
    <path
      d="M1.46875 8.40625C0.53125 7.53125 0 6.28125 0 4.96875V4.8125C0 2.625 1.5625 0.75 3.71875 0.40625C5.15625 0.15625 6.59375 0.625 7.625 1.625L8 2L8.375 1.625C9.375 0.625 10.8438 0.15625 12.25 0.40625C14.4062 0.75 16 2.625 16 4.8125V4.96875C16 6.28125 15.4375 7.53125 14.5 8.40625L8.84375 13.6875C8.625 13.9062 8.3125 14 8 14C7.65625 14 7.34375 13.9062 7.125 13.6875L1.46875 8.40625Z"
      fill="#F6C853"
    />
  </svg>
);

export default FilledHeart;
