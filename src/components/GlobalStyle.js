import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  header: '#fff',
  fontColor: 'rgb(32,35,41)',
  h1: 'rgb(32,35,41)',
};

export const darkTheme = {
  body: '#000',
  header: '#000',
  fontColor: '#dddfe2',
  h1: '#ff7627',
};

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.body};
  }
  header{
    background-color: ${(props) => props.theme.header};
  }
  footer{
    color: ${(props) => props.theme.fontColor}
  }
  h1{
    color: ${(props) => props.theme.h1}
  }
  a, button{
    color: ${(props) => props.theme.fontColor}
  }
`;
