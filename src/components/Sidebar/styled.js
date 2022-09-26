import styled from "styled-components";

export const ContainerSide = styled.nav`
  background: #E671A8;
  z-index: 100;
  position: relative;
  display: flex;
  margin-top: 150px;
  flex-direction: column;
  transition: .5s;
  width: 100vw;
  text-align: center;
  
  ul li{
    padding-bottom: 20px;
    list-style: none;
    border-bottom: 2px solid #FFF;
    
  }
  li a{
    text-decoration: none;
    color: #FFF;
  }

  @media screen and (max-width:768px) {
    /* display: none; */
    
  }
`