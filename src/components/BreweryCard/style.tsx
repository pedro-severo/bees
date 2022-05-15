import styled from "styled-components";
import { designSystem } from "../../designSystem";

export const CardWrraper = styled.section`
  background-color: ${({ theme }) => theme?.palette?.secondary.light};
  width: 25vw;
  height: 282px;
  min-width: 340px;
  margin-bottom: 5vw;
  .MuiCard-root {
    height: 100%;
  }
`;
