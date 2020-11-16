import React from "react";

import { Container, TextContainer, Button, ExitButtonIcon } from "./styles";

interface CardProps {
  title: string;
  imgUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imgUrl, description }) => {
  return (
    <Container>
      <img src={imgUrl} alt={title} />
      <TextContainer>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextContainer>
      <Button>
        <ExitButtonIcon />
      </Button>
    </Container>
  );
};

export default Card;
