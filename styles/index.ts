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

  @keyframes react-loading-skeleton {
    100% {
      transform: translateX(100%);
    }
  }

  .react-loading-skeleton {
    --base-color: #f0f0f0; /* Cor base mais suave */
    --highlight-color: #e0e0e0; /* Cor de destaque mais suave */
    --animation-duration: 2s; /* Animação mais lenta */
    --animation-direction: normal;
    --pseudo-element-display: block; /* Habilita a animação */

    background-color: var(--base-color);
    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;
    position: relative;
    user-select: none;
    overflow: hidden;
  }

  .react-loading-skeleton::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--base-color) 0%,
      var(--highlight-color) 50%,
      var(--base-color) 100%
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out; /* Curva de animação suave */
    animation-iteration-count: infinite;
  }

  @media (prefers-reduced-motion) {
    .react-loading-skeleton {
      --pseudo-element-display: none; /* Desabilita a animação */
    }
  }
`;
