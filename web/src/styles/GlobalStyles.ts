import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, :root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, input, button, textarea{
    border: none;
    color: var(--ice);
    font-family: 'Roboto', sans-serif;
  }

  :root{
    --primary: #0C111F;
    --cards: linear-gradient(90deg, #0C111F -4%, #161F38 103%);
    --create-game-card: linear-gradient(254.43deg, #141D35 -5.48%, #0C111F 99.85%);
    --header: #141C33;
    --create-card-purple: #6B33CE;
    --purple: #56197C;
    --ice: #EFEFEF;
    --white: #F6F5FB;
  }


`

export default GlobalStyle;