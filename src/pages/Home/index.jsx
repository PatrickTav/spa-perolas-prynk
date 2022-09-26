import { CardServices, CardCarousel, Section } from "../../components";
import { ContainerHome } from "./styled";
import { Link } from "react-router-dom";

//Images services
import Bronze from "../../assets/image/bronze.jpeg";
import Sobrancelha from "../../assets/image/sobrancelha.jpg";
import Massagem from "../../assets/image/massagem.jpg";
import Unha from "../../assets/image/unhas.jpeg";
import Cilios from "../../assets/image/cilios.jpg";
import Bronze1 from "../../assets/image/bronze2.jpeg";
import Map from "../../assets/image/map.jpeg";

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
        <div className="bg_components">
          <Section>
            <div className="banner">
              <div className="text">
                <h1>
                  Pérolas <span>Prynk</span> Spa Bronze Estética
                </h1>
                <p>
                  O espaço Pérolas <span>Prynk</span> tem todo o cuidado com
                  você, sua autoestima e seu empoderamento. Um espaço receptivo,
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
              <div className="image">
                <img src={Bronze1} alt="" />
              </div>
            </div>
          </Section>
        </div>
      </div>

      <Section>
        <h2>
          Nossos Serviços{" "}
          <a href="/">
            Ver mais
            <span>
              {" "}
              <BsFillArrowRightCircleFill />
            </span>{" "}
          </a>
        </h2>
        <div className="container_cardservices">
          <CardServices service="Bronzes" image={Bronze} />
          <CardServices service="Unhas" image={Unha} />
          <CardServices service="Massagem" image={Massagem} />
          <CardServices service="Cílios" image={Cilios} />
          <CardServices service="Sobrancelhas" image={Sobrancelha} />
        </div>
      </Section>

      <div className="bg_components">
        <Section>
          <div className="container_motto">
            <p>"Nosso Objetivo é que você se sinta bem com você mesmo."</p>

            <div className="image"></div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="container_space">
          <div className="text_space">
            <h2>Conheça nosso espaço</h2>
            <p>Passagem Boca do Acre, 722, Telégrado sem Fio </p>
            <div className="sociais">
              <a
                href="https://www.instagram.com/perolas_prynk/"
                target="_blank"
              >
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
          <div className="maps">
            <p>Clique e veja a localização!</p>
            <div className="image_map">
              <a href="https://www.google.com/maps/place/Passagem+Boca+do+Acre,+722+-+Tel%C3%A9grafo+Sem+Fio,+Bel%C3%A9m+-+PA,+66115-091/@-1.4198104,-48.4888121,17z/data=!3m1!4b1!4m5!3m4!1s0x92a4895b7a6a3d81:0xe654099b3ad36590!8m2!3d-1.4198158!4d-48.4866234" target="_blank">
                <img src={Map} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </ContainerHome>
  );
};

export default Home;
