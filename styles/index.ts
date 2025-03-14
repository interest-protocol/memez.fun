import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
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
  }
`;
