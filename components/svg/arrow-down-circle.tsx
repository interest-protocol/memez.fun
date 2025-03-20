import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowDownCircle: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxHeight, maxWidth }} viewBox="0 0 14 13" {...props}>
    <path
      d="M7 0.5C9.13281 0.5 11.1016 1.64844 12.1797 3.5C13.2578 5.375 13.2578 7.64844 12.1797 9.5C11.1016 11.375 9.13281 12.5 7 12.5C4.84375 12.5 2.875 11.375 1.79688 9.5C0.71875 7.64844 0.71875 5.375 1.79688 3.5C2.875 1.64844 4.84375 0.5 7 0.5ZM4.16406 6.14844L6.60156 8.58594C6.8125 8.82031 7.16406 8.82031 7.39844 8.58594L9.8125 6.14844C10.0469 5.9375 10.0469 5.58594 9.8125 5.375C9.60156 5.14062 9.25 5.14062 9.01562 5.375L6.97656 7.41406L4.9375 5.375C4.72656 5.14062 4.375 5.14062 4.16406 5.375C3.92969 5.58594 3.92969 5.9375 4.16406 6.14844Z"
      fill="#E4E7EB"
    />
  </svg>
);

export default ArrowDownCircle;
