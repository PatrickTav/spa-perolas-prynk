import { CardServices, CardCarousel } from "../../components";
import { ContainerHome } from "./styled";
import { Link } from "react-router-dom";

//Images services
import Bronze from "../../assets/image/bronze.jpeg";
import Sobrancelha from "../../assets/image/sobrancelha.jpg";
import Massagem from "../../assets/image/massagem.jpg";
import Unha from "../../assets/image/unhas.jpeg";
import Cilios from "../../assets/image/cilios.jpg";
import Bronze1 from "../../assets/image/bronze2.jpeg";

// Icons
import {
  BsFillArrowRightCircleFill,
  BsWhatsapp,
  BsInstagram,
} from "react-icons/bs";

const Home = () => {
  return (
    <ContainerHome>
      <div className="container_banner">
        <section >
          <div className="banner">
            <div className="text">
              <h1>
                Pérolas <span>Prynk</span> Spa Bronze Estética
              </h1>
              <p>
                O espaço Pérolas <span>Prynk</span> tem todo o cuidado com você,
                sua autoestima e seu empoderamento. Um espaço receptivo,
                aconchegante e moderno para aproveitar o melhor dos nossos
                serviços.
              </p>
              <Link to="/services">
                Agende já o seu horário{" "}
                <span>
                  <BsFillArrowRightCircleFill />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="container_cardservices">
        <CardServices service="Bronzes" image={Bronze} />
        <CardServices service="Unhas" image={Unha} />
        <CardServices service="Massagem" image={Massagem} />
        <CardServices service="Cílios" image={Cilios} />
        <CardServices service="Sobrancelhas" image={Sobrancelha} />
      </section>

      <section className="container_lema">
        <div className="text_lema">
          <p>"Nosso Objetivo é que você se sinta bem com você mesmo."</p>
        </div>
        <div className="image">
          <img src={Bronze1} alt="amostra.png" />
        </div>
      </section>

      <section className="container_space">
        <div className="text_space">
          <h2>Conheça nosso espaço</h2>
          <p>Passagem Boca do Acre, 722, Telégrado sem Fio </p>
          <div className="sociais">
            <a href="https://www.instagram.com/perolas_prynk/" target="_blank">
              <span>
                <BsInstagram />
              </span>
              @perolas_prynk
            </a>

            <a href="/">
              <span>
                <BsWhatsapp />
              </span>
                91 984526552
            </a>
          </div>
        </div>
        <div className="maps"></div>
      </section>
    </ContainerHome>
  );
};

export default Home;
