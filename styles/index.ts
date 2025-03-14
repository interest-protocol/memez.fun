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
    font-family:
      -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
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

  /* star */
  .createCoinButton:hover .star1 {
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    position: absolute;
    z-index: 2;
    filter: drop-shadow(0 0 10px #fffdef);
  }

  .createCoinButton:hover .star2 {
    top: -25%;
    left: 10%;
    z-index: 2;
    width: 15px;
    height: auto;
    position: absolute;
    filter: drop-shadow(0 0 10px #fffdef);
  }

  .createCoinButton:hover .star3 {
    top: 55%;
    left: 25%;
    width: 5px;
    z-index: 2;
    height: auto;
    position: absolute;
    filter: drop-shadow(0 0 10px #fffdef);
  }

  .createCoinButton:hover .star4 {
    top: 30%;
    left: 80%;
    width: 8px;
    z-index: 2;
    height: auto;
    position: absolute;
    filter: drop-shadow(0 0 10px #fffdef);
  }

  .createCoinButton:hover .star5 {
    top: 25%;
    left: 115%;
    z-index: 2;
    width: 15px;
    height: auto;
    position: absolute;
    filter: drop-shadow(0 0 10px #fffdef);
  }

  .createCoinButton:hover .star6 {
    top: 5%;
    left: 60%;
    width: 5px;
    z-index: 2;
    height: auto;
    color: #fff;
    position: absolute;
    filter: drop-shadow(0 0 10px #fffdef);
  }
  .fil0 {
    fill: #fffdef;
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
