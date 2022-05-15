import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardsWrraper = styled.main`
  min-height: 90vh;
  margin: -8px;
  padding: 10vh 5vw;
  background-color: ${({ theme }) => theme?.palette?.primary.light};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
