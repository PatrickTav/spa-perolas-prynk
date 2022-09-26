import React from 'react'
import { Link } from "react-router-dom";
import { ContainerSide } from './styled';
const Sidebar = () => {
  return (
    
      <ContainerSide>
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
      </ContainerSide>
    
  )
}

export default Sidebar