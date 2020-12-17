import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import api from "../../services/api";

import { Container, Content, CardsContainer, BottomBar } from "./styles";

interface Image {
  id: string;
  url: string;
}

interface Games {
  id: string;
  name: string;
  about: string;
  image: Image;
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    api.get<Games[]>("games").then(({ data }) => setGames(data));
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>GAME LIST</h1>
        <CardsContainer>
          {games.map((game) => (
            <Card
              key={game.id}
              id={game.id}
              title={game.name}
              image={game.image}
              description={game.about}
            />
          ))}
        </CardsContainer>
      </Content>
      <BottomBar>
        <p>
          feito com 💜 por{" "}
          <a
            href="https://www.linkedin.com/in/kelwin-vieira-ab95801a4/"
            target="_blank"
            rel="noreferrer"
          >
            Kelwin vieira
          </a>
        </p>
      </BottomBar>
    </Container>
  );
};

export default Home;
