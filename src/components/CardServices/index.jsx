import { Link } from "react-router-dom";

import { Card } from "./styled";

import{BsFillArrowRightCircleFill} from "react-icons/bs"

const CardServices = ({ service, image }) => {
  return (
    <Card>
      <div className="image_service">
        <img src={image} alt={`image ${service}`} />
      </div>
      <h3>{service}</h3>
      <Link to='/services'>Detalhes<span><BsFillArrowRightCircleFill/></span></Link>
    </Card>
  );
};

export default CardServices;
