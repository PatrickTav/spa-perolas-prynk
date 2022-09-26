import styled from "styled-components";

export const ContainerHeader = styled.header`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 6rem;
  padding: 0 10px;
  align-items: center;
  

  .image_logo {
    width: 6rem;
    cursor: pointer;
    text-align: center;
  }
  .image_logo img {
    width: 70%;
    transition: ease-in-out 0.5s;
  }
  .image_logo img:hover {
    width: 100%;
  }
`;
