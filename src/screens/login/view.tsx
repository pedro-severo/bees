import React from "react";
import beesLogo from "../../assets/beesLogo.png";
import { interfaceTexts } from "../../constants/interfaceTexts";
import { LoginScreen, BeesImage, MainContent, StyledText } from "./style";

export const LoginView: React.FC<any> = () => {
  return (
    <LoginScreen>
      <MainContent>
        <StyledText>{interfaceTexts.screens.login.firstSubtitle}</StyledText>
        <StyledText>{interfaceTexts.screens.login.secondSubtitle}</StyledText>
      </MainContent>
      <BeesImage src={beesLogo} alt="Logo of Bees Company"></BeesImage>
    </LoginScreen>
  );
};
