import styled from "styled-components";

export const CardsWrraper = styled.main`
  min-height: 90vh;
  margin: -8px;
  padding: 10vh;
  background-color: ${({ theme }) => theme?.palette?.primary.light};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
