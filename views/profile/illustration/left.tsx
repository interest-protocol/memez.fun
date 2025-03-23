import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const IllustrationCreateCoinLeft: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    width="366"
    height="618"
    viewBox="0 0 366 618"
    {...props}
  >
    <path
      d="M215.945 562.349C159.816 560.155 143.052 510.607 144.345 477.537C145.268 453.922 149.731 432.641 156.638 413.353C203.394 282.792 362.171 243.544 293.59 190.018"
      stroke="url(#paint0_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <path
      d="M-0.815747 435.586C93.8182 381.72 304.458 372.791 299.724 493.864C298.461 526.147 269.363 564.438 222.908 562.622"
      stroke="url(#paint1_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <path
      d="M294.168 192.253C227.083 139.895 174.723 292.41 105.279 243.223C48.0898 202.716 128.602 104.022 68.7773 67.518C28.8488 43.1547 -50.9051 62.8383 -50.9051 62.8383"
      stroke="url(#paint2_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_647_2937"
        x1="198.45"
        y1="401.582"
        x2="309.206"
        y2="251.349"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FEC21F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_647_2937"
        x1="189.209"
        y1="521.119"
        x2="11.9496"
        y2="411.638"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FCC169" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_647_2937"
        x1="139.918"
        y1="244.731"
        x2="124.29"
        y2="59.5543"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEC21F" />
        <stop offset="1" stopColor="#FE9417" />
      </linearGradient>
    </defs>
  </svg>
);

export default IllustrationCreateCoinLeft;
