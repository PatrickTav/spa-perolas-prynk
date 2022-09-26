import React from "react";
import{GiHamburgerMenu} from 'react-icons/gi'

import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerNav } from "./styled";

import{Sidebar} from '../../components'

const Navbar = () => {
const [sidebar, setSidebar]= useState(false)

  const handleNavbarChange = () => {
    return sidebar? setSidebar(false):setSidebar(true)
  }

console.log(sidebar)
  return (
    
    <ContainerNav>
      <div className="menu" onClick={handleNavbarChange}>
        <GiHamburgerMenu/>
      {sidebar&& <Sidebar/>}
      </div >
      
      <div className="pages">
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
      </div>
    </ContainerNav>
  );
};

export default Navbar;
