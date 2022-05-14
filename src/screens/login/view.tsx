import React from "react";
import beesLogo from "../../assets/beesLogo.png";
import { interfaceTexts } from "../../constants/interfaceTexts";
import { ILoginView } from "./interfaces";
import {
  LoginScreen,
  BeesImage,
  MainContent,
  StyledText,
  FullNameInput,
  StyledCheckbox,
  StyledButton,
  Form,
} from "./style";

export const LoginView: React.FC<ILoginView> = ({
  fullName,
  isOfLegalAge,
  disabledForm,
  handleTextOnlyInputChange,
  handleCheckboxChange,
  handleSubmission,
}) => {
  return (
    <LoginScreen>
      <MainContent>
        <StyledText>{interfaceTexts.screens.login.firstSubtitle}</StyledText>
        <StyledText>{interfaceTexts.screens.login.secondSubtitle}</StyledText>
        <Form onSubmit={handleSubmission}>
          <FullNameInput
            label={interfaceTexts.screens.login.fullNameInputLabel}
            variant="outlined"
            name="fullName"
            value={fullName}
            onChange={handleTextOnlyInputChange}
            type="text"
          />
          <StyledCheckbox
            label={interfaceTexts.screens.login.checkboxLabel}
            name="isOfLegalAge"
            value={isOfLegalAge}
            onChange={handleCheckboxChange}
          />
          <StyledButton
            variant="contained"
            color="secondary"
            type="submit"
            disabled={disabledForm}
          >
            {interfaceTexts.screens.login.submitButtonText}
          </StyledButton>
        </Form>
      </MainContent>
      <BeesImage
        src={beesLogo}
        alt={interfaceTexts.screens.login.beesImageAltText}
      ></BeesImage>
    </LoginScreen>
  );
};
