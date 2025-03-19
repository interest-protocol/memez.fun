import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const IllustrationCreateCoinBottom: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    width="330"
    height="675"
    viewBox="0 0 215 286"
    fill="none"
    {...props}
  >
    <path
      d="M126.971 356.354C90.8299 356.361 78.8013 324.93 78.7975 303.636C78.7948 288.431 81.1263 274.637 85.08 262.062C111.842 176.943 212.929 147.702 167.487 115.022"
      stroke="url(#paint0_linear_1115_2263)"
      strokeWidth="70.7736"
      strokeLinecap="round"
    />
    <path
      d="M-15.5858 280.332C43.8941 243.311 179.089 232.252 179.103 310.209C179.106 330.996 161.366 356.348 131.454 356.353"
      stroke="url(#paint1_linear_1115_2263)"
      strokeWidth="70.7736"
      strokeLinecap="round"
    />
    <path
      d="M167.915 116.444C123.464 84.4763 93.6528 183.851 47.7654 153.982C9.97524 129.384 59.2444 63.9002 19.8612 41.9428C-6.42412 27.2879 -57.2008 41.9565 -57.2008 41.9565"
      stroke="url(#paint2_linear_1115_2263)"
      strokeWidth="70.7736"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1115_2263"
        x1="111.663"
        y1="253.439"
        x2="179.075"
        y2="154.057"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FEC21F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1115_2263"
        x1="108.741"
        y1="330.522"
        x2="-7.9837"
        y2="264.613"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FCC169" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1115_2263"
        x1="70.0728"
        y1="154.076"
        x2="55.3491"
        y2="35.4211"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEC21F" />
        <stop offset="1" stopColor="#FE9417" />
      </linearGradient>
    </defs>
  </svg>
);

export default IllustrationCreateCoinBottom;
