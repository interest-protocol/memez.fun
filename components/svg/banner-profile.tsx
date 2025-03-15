import { FC } from 'react';

import { SVGProps } from './svg.types';

const BannerProfile: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 291 76"
    fill="none"
    {...props}
  >
    <path
      d="M82.5532 125.043C63.7086 128.415 54.5073 113.146 52.521 102.044C51.1026 94.1153 51.0329 86.7051 51.9226 79.7797C57.9453 32.9015 107.931 8.2334 81.19 -4.57239"
      stroke="url(#paint0_linear_1036_4969)"
      strokeWidth="37.4888"
      strokeLinecap="round"
    />
    <path
      d="M1.13416 98.6874C28.6993 73.8405 98.1645 55.4747 105.437 96.1234C107.376 106.962 100.488 121.835 84.8909 124.625"
      stroke="url(#paint1_linear_1036_4969)"
      strokeWidth="37.4888"
      strokeLinecap="round"
    />
    <path
      d="M81.5451 -3.87109C55.3875 -16.3976 49.1038 38.1981 22.3928 26.8996C0.395229 17.5949 19.9836 -21.1422 -2.59851 -28.9215C-17.6704 -34.1136 -42.7804 -21.7329 -42.7804 -21.7329"
      stroke="url(#paint2_linear_1036_4969)"
      strokeWidth="37.4888"
      strokeLinecap="round"
    />
    <circle
      cx="7.78799"
      cy="7.78799"
      r="7.78799"
      transform="matrix(0.984371 -0.176105 -0.176105 -0.984371 108.735 50.5186)"
      fill="url(#paint3_radial_1036_4969)"
    />
    <circle
      cx="7.78799"
      cy="7.78799"
      r="7.78799"
      transform="matrix(0.984371 -0.176105 -0.176105 -0.984371 260.735 10.5166)"
      fill="url(#paint4_radial_1036_4969)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1036_4969"
        x1="64.9806"
        y1="72.8057"
        x2="90.8702"
        y2="14.7023"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FEC21F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1036_4969"
        x1="70.6404"
        y1="113.273"
        x2="3.63337"
        y2="89.7827"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8341" />
        <stop offset="1" stopColor="#FCC169" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1036_4969"
        x1="34.0336"
        y1="24.8701"
        x2="15.2985"
        y2="-35.6293"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEC21F" />
        <stop offset="1" stopColor="#FE9417" />
      </linearGradient>
      <radialGradient
        id="paint3_radial_1036_4969"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.17668 12.8905) rotate(-82.3332) scale(14.0906)"
      >
        <stop stopColor="#FDC11F" />
        <stop offset="1" stopColor="#FE8241" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_1036_4969"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.17668 12.8905) rotate(-82.3332) scale(14.0906)"
      >
        <stop stopColor="#FDC11F" />
        <stop offset="1" stopColor="#FE8241" />
      </radialGradient>
    </defs>
  </svg>
);

export default BannerProfile;
