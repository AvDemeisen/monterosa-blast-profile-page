import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    max-width: 460px;
    weight: 100%;
    min-height: 100vh;
    margin: 0px auto;
    text-align: center;
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const Loader = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    color: var(--header-text);
    font-size: 24px;
`

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    overflow-x: hidden;

    touch-action: manipulation;

    &.loaded {
      #loader {
        display: none;
      }

      #root {
        display: block;
      }
    }

    &.block-scroll {
      overflow: hidden;
    }
  }

  #modal {
    position: fixed;
    z-index: 103;
  }


`;
