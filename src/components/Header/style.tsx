import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  margin: -8px;
  padding: 0 32px;
  background-color: ${({ theme }) => theme?.palette?.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10vw;
  @media only screen and (max-width: 1200px) {
    width: 16vw;
  }
  @media only screen and (max-width: 800px) {
    width: 24vw;
  }
  @media only screen and (max-width: 600px) {
    width: 32vw;
  }
`;
