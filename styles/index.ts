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

  @font-face {
    font-family: 'GoodGame';
    src: url('/fonts/good-game/Good-Game.ttf') format('opentype');
    font-weight: 500;
    font-display: swap;
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

  .tooltip .tooltiptext {
    visibility: hidden;
    min-width: 4.75rem;
    z-index: 1;
    left: 4.8rem;
    bottom: 80%;
    color: #90939d;
    padding: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    background-color: #131419;
    border-radius: 6.188rem;
    position: absolute;
    margin-left: -3.75rem;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: '';
    top: 100%;
    left: 50%;
    position: absolute;
    margin-left: -0.313rem;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
