import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  width: 12rem;
  height: 10rem;
  color: #000;
  cursor: pointer;
  position: relative;
  border-radius: 10px 30px;
  text-align: center;
  transition: 0.4s;

  h3 {
    padding: 70px 10px 10px 10px;
  }

  a {
    text-decoration: none;
    color: #000;
    transition: .4s;
  }
  a:hover{
    color: #A8A8A8;
  }
  span {
    padding-left: 10px;
  }

  & {
    .image_service {
      position: absolute;
      width: 6rem;
      height: 6rem;
      border: 2px solid #fff;
      border-radius: 50%;
      background-color: #000;
      top: -30px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
      left: 25%;
      transition:.4s;
    }
    .image_service img {
      position: absolute;
      width: 140px;
      transition:.4s;
    }

    .image_service:hover{
      width: 7rem;
      height: 7rem;
    }
    .image_service img:hover{
      width:160px;
    }
  }

  :hover {
    background: #FA0CB7;
    color: #fff;
  }


  
`;
