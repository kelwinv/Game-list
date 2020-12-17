import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  gap: 75px;
`;

export const Main = styled.main`
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: max(60vw, 320px);
  min-height: 70vh;

  background: var(--create-game-card);
  box-shadow: -10px 10px 4px 0px rgba(0, 0, 0, 0.4);

  margin-bottom: 4rem;
  border-radius: 12px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10vh;
  width: 80%;
  margin: auto 3rem;
  padding: 2rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;

  border: 4px dashed var(--create-card-purple);
  min-height: 90px;
  width: 100%;

  > label {
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
  }

  > input {
    display: none;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;

  > img {
    max-width: 300px;
    object-fit: cover;
    width: 100%;
    margin-top: 20px;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > input {
    width: 70%;
    height: 2rem;
    color: var(--primary);
    font-size: 1rem;
    padding: 0.2rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  > textarea {
    max-width: max(50vw,240px);
    min-height: 2rem;
    color: var(--primary);
    font-size: 1rem;
    padding: 0.2rem;
  }
`;

export const Button = styled.button`
  width: 152px;
  height: 2.5rem;
  background: var(--primary);
  margin: auto;
  margin-right: 0;

  border-radius: 12px;

  font-size: 1.7rem;
  font-weight: bold;
  color: var(--create-card-purple);

  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`;
