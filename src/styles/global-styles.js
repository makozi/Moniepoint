import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    text-decoration:none;
    box-sizing: border-box;

  }

  html {
    scroll-behavior: smooth;
    -webkit-transform: translate3d(0, 0, 0);
  }

  html,
  body {
    overflow-x: hidden;
  }

  body {
    background: #fff;
    color: #000;
    font-family: 'Outfit', sans-serif;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    min-width: 320px;
    padding: 0;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.textAnchor};

    &:hover {
      color: ${(p) => p.theme.textAnchorHover};
    }
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 0;
    color: ${(p) => p.theme.textPrimary};
    font-family: 'Outfit', sans-serif;
    font-size: 100%;
    font-style: normal;
    font-weight: 400;
    padding: 0;
    margin: 0;
    vertical-align: baseline;
  }

  input{
    outline:none;

    ::placeholder{
      color: ${(p) => p.theme.grey1};
      font-family: 'Outfit', sans-serif;
    }

  }

  select{
    font-family: 'Outfit', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
  }

  .section-title{
    font-size:20px;
    font-weight:500;
    color: ${(p) => p.theme.dark1};
  }

  .sub-section-title{
    font-size:16px;
    font-weight:500;
    margin-bottom:15px;
    color: ${(p) => p.theme.dark1};
  }
`;

export default GlobalStyle;
