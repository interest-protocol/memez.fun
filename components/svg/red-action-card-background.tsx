import { FC } from 'react';

import { SVGProps } from './svg.types';

const RedActionCardBackground: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 179 323"
    fill="none"
    {...props}
  >
    <path
      d="M77.5785 -31C41.9358 -31 30.0784 -0.000244141 30.0784 20.9998C30.0784 35.9953 32.3802 49.5992 36.2816 62C62.6899 145.941 162.389 174.762 117.578 206.999"
      stroke="url(#paint0_linear_1499_1099)"
      strokeWidth="73"
      strokeLinecap="round"
    />
    <path
      d="M-63.0001 43.9994C-4.33341 80.4994 129 91.383 129 14.5C129 -6.00027 111.5 -31 82 -31"
      stroke="url(#paint1_linear_1499_1099)"
      strokeWidth="73"
      strokeLinecap="round"
    />
    <path
      d="M118 205.597C74.1671 237.132 44.7498 139.132 -0.500023 168.597C-37.765 192.863 10.8366 257.435 -28 279.097C-53.9205 293.555 -104 279.097 -104 279.097"
      stroke="url(#paint2_linear_1499_1099)"
      strokeWidth="73"
      strokeLinecap="round"
    />
    <circle
      cx="164.5"
      cy="111.5"
      r="14.5"
      fill="url(#paint3_radial_1499_1099)"
    />
    <circle cx="21" cy="312" r="7" fill="url(#paint4_radial_1499_1099)" />
    <defs>
      <linearGradient
        id="paint0_linear_1499_1099"
        x1="62.5"
        y1="70.5"
        x2="129"
        y2="168.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F81946" />
        <stop offset="1" stopColor="#E85965" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1499_1099"
        x1="113"
        y1="-5"
        x2="-55.5"
        y2="59.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F81946" />
        <stop offset="1" stopColor="#F28C94" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1499_1099"
        x1="21.5"
        y1="168.5"
        x2="6.99997"
        y2="285.523"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E85965" />
        <stop offset="1" stopColor="#F38E97" />
      </linearGradient>
      <radialGradient
        id="paint3_radial_1499_1099"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(161.5 121) rotate(-82.3332) scale(26.2345)"
      >
        <stop stopColor="#EF7C85" />
        <stop offset="1" stopColor="#F71945" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_1499_1099"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(22 314.5) rotate(-96.009) scale(9.55249)"
      >
        <stop stopColor="#FCCFAC" />
        <stop offset="1" stopColor="#F28A92" />
      </radialGradient>
    </defs>
  </svg>
);

export default RedActionCardBackground;
