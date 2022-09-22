import styled from "styled-components";

export const ContainerNav = styled.nav`
 .menu{
  display: none;
 }
  
  ul {
    display: flex;
    gap: 50px;
    list-style: none;
  }
  li a{
    text-decoration:none;
    font-size: 1.2rem;
    color: #FFF;
    transition: .4s;
  }

 
  li a:hover{
    color: #FF0088;
  }
  

  @media screen and (max-width:768px) {
    ul{
      display: none;
    }
    .menu{
      display: block;
    }
  }
`