import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
     &::-webkit-scrollbar{
       width: 0.5rem;
     }
     &::-webkit-scrollbar-thumb{
       background-color: #27d997;
       border-radius: 30px;
     }
  }
  body{
    overflow-x: hidden;
    background-color:#fff;
    color: #000;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 120%;
    font-family: "Montserrat",sans-serif;
  }
  .container{
    max-width: 1480px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  h2{
    font-family: "Abril Fatface",cursive;
    font-size: 3rem;
    font-weight: lighter;
    color: #27d997;
  }
  h3{
    font-size: 1.3rem;
    color: #333;
  }
  p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  img{
    display: block;
  }
`

export default GlobalStyle;