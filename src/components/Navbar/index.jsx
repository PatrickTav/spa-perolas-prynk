import React from "react";
import { Link } from "react-router-dom";
import { ContainerNav } from "./styled";

const Navbar = () => {
  return (
    <ContainerNav>
      <div className="menu">
        ----
      </div>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/services">Serviços</Link>
        </li>
        <li>
          <Link to="/tips">Dicas</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </ContainerNav>
  );
};

export default Navbar;
