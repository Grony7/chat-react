import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
