import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import { Container, Content, CardsContainer, BottomBar } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h1>GAME LIST</h1>
        <CardsContainer>
          <Card
            title="Hollow knight"
            imgUrl="https://steamcdn-a.akamaihd.net/steam/apps/367520/capsule_616x353.jpg?t=1589274477"
            description="Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um
          vasto reino arruinado de insetos e heróis. Explore cavernas
          serpenteantes, lute contra criaturas malignas e alie-se a insetos
          bizarros num estilo clássico 2D desenhado à mão."
          />
          <Card
            title="Gris"
            imgUrl="https://upload.wikimedia.org/wikipedia/pt/8/8a/GrisCapa.jpg"
            description="Gris é um jogo independente de plataforma e aventura desenvolvido pela Nomada Studio e publicado pela Devolver Digital. Foi lançado no dia 13 de dezembro de 2018 para Microsoft Windows, MacOS e Nintendo Switch."
          />
          <Card
            title="Undertale"
            imgUrl="https://nintendoboy.com.br/wp-content/uploads/2018/03/undertale-destaque-e1497325617249.png"
            description="Undertale é um RPG eletrônico criado pelo desenvolvedor independente norte-americano Toby Fox. No jogo, o jogador pode controlar uma criança humana que caiu em uma caverna, uma região grande e isolada sob a superfície da Terra, separada por uma barreira mágica"
          />
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
