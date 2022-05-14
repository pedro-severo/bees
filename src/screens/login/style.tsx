import styled from "styled-components";
import { Typography as MuiTypography } from "@material-ui/core";
import { designSystem } from "../../designSystem";

export const LoginScreen = styled.div`
  margin: -8px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme?.palette?.primary.main};
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledText = styled(MuiTypography)`
  &.MuiTypography-body1 {
    color: ${({ theme }) => theme?.palette?.primary.contrastText};
  }
  &.MuiTypography-root {
    margin: 0 0 16px 0;
  }
`;

export const FullNameInput = styled(designSystem.TextField)`
  .MuiInputLabel-outlined {
    color: ${({ theme }) => theme?.palette?.primary.contrastText};
  }
  .MuiOutlinedInput-root {
    background: #ffffff;
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    color: #000000;
  }
`;

export const BeesImage = styled.img`
  position: absolute;
  top: 68%;
  left: 29px;
  @media only screen and (max-width: 600px) {
    top: 90%;
    width: 58px;
    height: 58px;
  }
`;
