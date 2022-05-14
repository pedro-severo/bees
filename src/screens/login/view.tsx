import React from "react";
import beesLogo from "../../assets/beesLogo.png";
import { interfaceTexts } from "../../constants/interfaceTexts";
import {
  LoginScreen,
  BeesImage,
  MainContent,
  StyledText,
  FullNameInput,
} from "./style";

export const LoginView: React.FC<any> = () => {
  return (
    <LoginScreen>
      <MainContent>
        <StyledText>{interfaceTexts.screens.login.firstSubtitle}</StyledText>
        <StyledText>{interfaceTexts.screens.login.secondSubtitle}</StyledText>
        <FullNameInput label="Full name" variant="outlined" />
      </MainContent>
      <BeesImage src={beesLogo} alt="Logo of Bees Company"></BeesImage>
    </LoginScreen>
  );
};
