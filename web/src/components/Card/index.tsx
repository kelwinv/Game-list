import React from "react";
import api from "../../services/api";

import { Container, TextContainer, Button, ExitButtonIcon } from "./styles";

interface CardProps {
  id: string;
  title: string;
  image: {
    id: string;
    url: string;
  };
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, description }) => {
  async function handleDeletGame() {
    console.log(await api.delete(`games/${id}`));
    alert("jogo removido");
  }

  return (
    <Container>
      <img src={image.url} alt={title} />
      <TextContainer>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextContainer>
      <Button onClick={handleDeletGame}>
        <ExitButtonIcon />
      </Button>
    </Container>
  );
};

export default Card;
