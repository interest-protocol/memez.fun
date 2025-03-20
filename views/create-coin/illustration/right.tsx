import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const IllustrationCreateCoinRight: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    width="330"
    height="675"
    viewBox="0 0 330 675"
    fill="none"
    {...props}
  >
    <path
      d="M252.213 62.473C305.009 81.6505 305.894 133.95 294.595 165.057C286.527 187.269 275.798 206.182 263.346 222.452C179.064 332.583 15.875 321.632 64.9059 393.495"
      stroke="url(#paint0_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <path
      d="M420.095 249.206C313.555 271.708 110.195 216.089 151.562 102.204C162.592 71.8373 201.965 44.2216 245.663 60.094"
      stroke="url(#paint1_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <path
      d="M65.0357 391.191C112.997 461.487 209.301 332.15 260.475 400.143C302.619 456.138 195.883 525.637 241.756 578.62C272.373 613.983 354.333 619.512 354.333 619.512"
      stroke="url(#paint2_linear_647_2937)"
      strokeWidth="110"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_647_2937"
        x1="219.936"
        y1="220.936"
        x2="68.7019"
        y2="330.321"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FEC21F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_647_2937"
        x1="265.128"
        y1="109.885"
        x2="400.646"
        y2="268.132"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FCC169" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_647_2937"
        x1="227.939"
        y1="388.162"
        x2="186.454"
        y2="569.307"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEC21F" />
        <stop offset="1" stopColor="#FE9417" />
      </linearGradient>
    </defs>
  </svg>
);

export default IllustrationCreateCoinRight;
