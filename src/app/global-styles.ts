import { injectGlobal } from "@emotion/css";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  @import url('/fonts/Nunito/stylesheet.css');
  @import url('/fonts/Open_Sans/stylesheet.css');
  @import url('/fonts/Roboto/stylesheet.css');



  *,
  *::before,
  *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    width: 100vw;
    min-width: 320px;
    min-height: 100vh;
  }
  
/* 
  *::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 10px;

    background-clip: padding-box;
    background-color: #e0e0e0;
  } */
`;
