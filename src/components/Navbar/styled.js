import styled from "styled-components";

export const ContainerNav = styled.nav`
 
 .menu{
  display: none;
 }
  
  .pages ul {
    display: flex;
    gap: 50px;
    list-style: none;
  }
  .pages li a{
    text-decoration:none;
    font-size: 1.2rem;
    color: #FFF;
    transition: .4s;
  }

 
  .pages li a:hover{
    color: #FF0088;
  }
  

  @media screen and (max-width:768px) {
    .pages{
      display: none;
    }
    .menu{
      display: block;
    }
    
  }
`