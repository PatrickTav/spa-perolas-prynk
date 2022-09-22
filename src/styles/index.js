import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }
  html, body{
    font-family: ${(props)=>props.theme.fontFamily.montserrat};
    background-color:${(props)=>props.theme.colors.rose} ;
  }
`