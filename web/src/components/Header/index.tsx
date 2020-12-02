import React from "react";
import { Link } from "react-router-dom";

import { Container, ControllerIcon, PlusIcon } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/"> 
        <p> Ver lista </p>
        <ControllerIcon />
      </Link>
      <Link to="/add-game">
        <p>adicionar jogo</p>
        <PlusIcon />
      </Link>
    </Container>
  );
};

export default Header;