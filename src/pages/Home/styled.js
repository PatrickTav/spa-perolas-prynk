import styled from "styled-components";

export const ContainerHome = styled.main`
  position: relative;
  .bg_components {
    background: #cdc0a7;
  }

  .bg_components,
  .container_cardservices {
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    color: #000;
    transition: 0.4s;
  }
  span {
    color: #ff0088;
  }

  h2 a {
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
  }
  h2 a:hover {
    color: #c4c4c4;
  }

  h2 {
    color: #fff;
    font-size: 1.9rem;
  }
  & {
    .banner {
      display: flex;
      gap: 100px;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
      .text {
        width: 40rem;
      }

      .text h1 {
        font-weight: 700;
        font-size: 2rem;
      }
      .text p {
        padding: 20px 0;
        max-width: 30rem;
        font-weight: 400;
      }
      .text a {
        text-decoration: none;
        color: #000;
        transition: 0.4s;
      }
      .text a:hover {
        color: #c4c4c4;
      }

      .image {
        max-width: 300px;
        padding: 50px 0 20px 0;
      }
      .image img {
        width: 100%;
        border: 2px solid #fff;
        border-radius: 10px 40px;
        box-shadow: 1px 1px 5px #000;
      }
    }

    & {
      .container_cardservices {
        display: flex;
        gap: 50px;
        margin-top: 60px;
        max-height: max-content;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
    }

    & {
      .container_motto {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        font-size: 2rem;
      }
    }

    & {
      .container_space {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        padding-bottom: 50px;

        .text_space h2 {
          font-size: 2rem;
          padding-bottom: 10px;
        }
        .text_space p,
        .sociais a {
          color: #fff;
          font-size: 1.4rem;
        }
        .text_space .sociais {
          padding-top: 50px;
          display: flex;
          flex-wrap: wrap;
        }
        .sociais a {
          cursor: pointer;
          padding-right: 20px;
          text-decoration: none;
        }
        .sociais span {
          padding-right: 10px;
        }
        .maps {
          width: 500px;
          position: relative;
        }
        .maps p {
          font-size: 1.5rem;
          position: absolute;
          
          
          font-weight: 500;
          z-index: 10;
        }
        .image_map img {
          transition: 0.4s;
          width: 100%;
          cursor: pointer;
          border: 2px solid #fff;
          border-radius: 10px 40px;
        }
        .image_map img:hover {
          background-color: #000;
          filter: blur(0.2rem);
        }
      }
    }
  }
`;
