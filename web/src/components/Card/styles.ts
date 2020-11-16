import styled from "styled-components";

import { exitButton } from "../../assets/icons";

export const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;

  box-shadow: -9px 8px 4px 0px rgba(0, 0, 0, 0.4);

  border-radius: 12px;
  background: var(--cards);

  > img {
    width: 80%;
    object-fit: cover;
    margin: 2rem auto;
    border-radius: 12px;
  }

  @media (min-width: 900px) {
    max-height: 172px;
    align-items: center;
    flex-direction: row;

    > img {
      max-height: 142px;
      width: auto;
      margin: 2rem auto;
      margin-left: 1rem;
      margin-right: 0.5rem;
      border-radius: 12px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-bottom: 20px;

  h1 {
    margin-bottom: 5px;
  }

  p {
    color: var(--white);
  }

  @media (min-width: 900px) {
    width: 50%;
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 5px;
  right: 5px;
  background: none;

  @media (min-width: 900px) {
    height: 35px;
    width: 35px;
    top: 10px;
    right: 10px;
  }
`;

export const ExitButtonIcon = styled(exitButton)`
  height: 100%;
  width: 100%;
`;
