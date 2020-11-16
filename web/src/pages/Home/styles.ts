import styled from "styled-components";

import BackgroundSvg from "../../assets/background.svg";

export const Container = styled.div`
  min-height: 100vh;
  background: url(${BackgroundSvg}) top center no-repeat;
  background-color: var(--primary);
  background-size: 100vw auto;
  background-position-y: 58px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 40px;
`;

export const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--purple);
  border-radius: 12px 12px 0 0;
  height: 32px;
`;
