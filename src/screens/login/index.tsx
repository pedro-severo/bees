import React from "react";
import useForm from "../../hooks/useForm";
import { LoginView } from "./view";
import { useLogin } from "./useLogin";

export const Login: React.FC<any> = () => {
  const {
    form,
    handleTextOnlyInputChange,
    handleCheckboxChange,
    cleanFields,
    disabledForm,
  } = useForm({
    fullName: "",
    isOfLegalAge: false,
  });
  const handleSubmission = useLogin(disabledForm, form, cleanFields);

  return (
    <LoginView
      fullName={form.fullName}
      isOfLegalAge={form.isOfLegalAge}
      disabledForm={disabledForm}
      handleTextOnlyInputChange={handleTextOnlyInputChange}
      handleCheckboxChange={handleCheckboxChange}
      handleSubmission={handleSubmission}
    />
  );
};
