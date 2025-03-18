import { FC } from 'react';

import { SVGProps } from './svg.types';

const FilledBarChart: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      d="M9 2.875C9 1.45313 10.1484 0.25 11.625 0.25H13.375C14.7969 0.25 16 1.45313 16 2.875L16 22.125C16 23.6016 14.7969 24.75 13.375 24.75H11.625C10.1484 24.75 9 23.6016 9 22.125L9 2.875ZM0.25 13.375C0.25 11.9531 1.39844 10.75 2.875 10.75H4.625C6.04688 10.75 7.25 11.9531 7.25 13.375L7.25 22.125C7.25 23.6016 6.04687 24.75 4.625 24.75H2.875C1.39844 24.75 0.25 23.6016 0.25 22.125V13.375ZM20.375 3.75H22.125C23.5469 3.75 24.75 4.95313 24.75 6.375V22.125C24.75 23.6016 23.5469 24.75 22.125 24.75H20.375C18.8984 24.75 17.75 23.6016 17.75 22.125L17.75 6.375C17.75 4.95312 18.8984 3.75 20.375 3.75Z"
      fill="#E4E7EB"
    />
  </svg>
);

export default FilledBarChart;
