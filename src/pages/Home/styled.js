import styled from "styled-components";

export const ContainerHome = styled.main`
  height: 100vh;
  max-width: 1240px;
  margin: auto;
  color: #ffe;
  padding: 0 20px;

  & {
    .banner {
      padding-top: 20px;
      height: 30rem;
      display: flex;
      gap: 100px;
    }
    & {
      .text {
        padding-top: 100px;
        width: 50rem;
      }
      .text span {
        color: #ff0088;
      }
      .text h1 {
        font-weight: 700;
        /* font-size: 2.5rem; */
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
    }

    .container_cardservices {
      display: flex;
      padding-top: 60px;
      gap: 50px;
      max-height: max-content;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .container_lema {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      & {
        .text_lema {
          border-radius: 10px 30px;
          background: #d5d5d5;
          width: 100%;
          display: flex;
          height: 100px;
          justify-content: center;
          align-items: center;
        }
        .text_lema p {
          font-size: 1.5rem;
          color: #ff0088;
        }
        .text_lema p {
          font-size: 1.5rem;
          color: #ff0088;
        }

        .image {
          width: 300px;
          height: max-content;
          border: 2px solid #fff;
          border-radius: 10px 50px;
          overflow: hidden;
          cursor: pointer;
        }

        .image img {
          width: 100%;
        }
      }
    }

    .container_space {
      padding: 200px 0 50px 0;
      display: flex;

      .text_space h2 {
        font-size: 2rem;
      }
      .sociais {
        padding-top: 50px;
        font-size: 1.3rem;
        display: flex;
        flex-wrap: wrap;
      }
      .sociais a {
        cursor: pointer;
        padding-right: 20px;
        text-decoration: none;
        color: #fff;
      }
      .sociais span {
        padding-right: 10px;
      }
    }
  }
`;
