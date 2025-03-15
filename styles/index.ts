import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.woff2')
        format('woff2'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.woff')
        format('woff'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.woff2')
        format('woff2'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.woff')
        format('woff'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.ttf')
        format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'NDot';
    src: url('/fonts/ndot-47-inspired-by-nothing.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi';
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
    background: #0a090d;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    background: transparent;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #fff1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }

  .single-direction-range .range-slider__thumb {
    display: none;
  }

  .single-direction-range .range-slider__range {
    background-color: #f6c853;
  }

  .single-direction-range .range-slider {
    height: 4px;
    background-color: #ffffff0d !important;
  }
`;
