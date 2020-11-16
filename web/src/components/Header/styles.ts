import styled, { css } from "styled-components";

import { ControllerSvg, plusSvg } from "../../assets/icons";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0 0 12px 12px;
  min-height: 64px;
  background: var(--header);
  box-shadow: 0px 4px 4px 0px rgba(12, 17, 31, 0.6);

  a {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`;

const iconsCss = css`
  height: 26px;
  transition: 0.2s;
`;

export const PlusIcon = styled(plusSvg)`
  ${iconsCss}
`;
export const ControllerIcon = styled(ControllerSvg)`
  ${iconsCss}
`;
