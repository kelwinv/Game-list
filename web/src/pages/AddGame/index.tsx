import React, { ChangeEvent, useState } from "react";
import Header from "../../components/Header";

import {
  Container,
  Main,
  CreationCard,
  Form,
  ImageContainer,
  ImagePreview,
  Name,
  Description,
  Button,
} from "./styles";

const AddGame: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [image, setImage] = useState<File>();

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImage = Array.from(event.target.files);
    setImage(selectedImage[0]);
    setPreviewImage(URL.createObjectURL(selectedImage[0]));
  }

  return (
    <Container>
      <Header />
      <Main>
        <CreationCard>
          <Form>
            <ImageContainer>
              <label htmlFor="img"> Adicione a imagem</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={handleSelectImage}
              />
              <ImagePreview>
                {previewImage && <img src={previewImage} alt="Preview" />}
              </ImagePreview>
            </ImageContainer>
            <Name>
              <label htmlFor="Name">Nome do jogo</label>
              <input type="text" id="Name" />
            </Name>
            <Description>
              <label htmlFor="description">Descrição</label>
              <textarea id="description" />
            </Description>
            <Button>Salvar</Button>
          </Form>
        </CreationCard>
      </Main>
    </Container>
  );
};

export default AddGame;
