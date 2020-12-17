import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import api from "../../services/api";

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
  const { push } = useHistory();

  const [name, setName] = useState<string>();
  const [about, setAbout] = useState<string>();
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImage = event.target.files;
    setImage(selectedImage[0]);
    setPreviewImage(URL.createObjectURL(selectedImage[0]));
  }

  async function handleSendGame() {
    if (!image || !name || !about) {
      return alert("preencha todos os valores");
    }

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("image", image);

    console.log(data);

    const response = await api.post("games", data);

    if (response.status === 201) {
      push("/");
    }
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
              <input
                type="text"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Name>
            <Description>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Description>
            <Button onClick={handleSendGame}>Salvar</Button>
          </Form>
        </CreationCard>
      </Main>
    </Container>
  );
};

export default AddGame;
