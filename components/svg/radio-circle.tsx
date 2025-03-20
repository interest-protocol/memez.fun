import { FC } from 'react';

import { SVGProps } from './svg.types';

const RadioCircle: FC<SVGProps & { isChecked?: boolean }> = ({
  maxWidth,
  maxHeight,
  isChecked,
  ...props
}) => {
  if (!isChecked)
    return (
      <svg style={{ maxHeight, maxWidth }} viewBox="0 0 22 25" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          fill="#7C7C7C"
        />
      </svg>
    );
  return (
    <svg style={{ maxHeight, maxWidth }} viewBox="0 0 22 25" {...props}>
      <circle cx="11" cy="10" r="10" fill="#F5B722" />
      <g filter="url(#filter0_dd_786_5379)">
        <circle cx="11" cy="10" r="5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_dd_786_5379"
          x="0"
          y="3"
          width="22"
          height="22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_786_5379"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0627451 0 0 0 0 0.0901961 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_786_5379"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_786_5379"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0627451 0 0 0 0 0.0901961 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_786_5379"
            result="effect2_dropShadow_786_5379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_786_5379"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RadioCircle;
