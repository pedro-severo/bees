import React from "react";
import { StyledTextField } from "./style";

export const TextFieldView: React.FC<any> = ({
  label,
  variant,
  name,
  value,
  onChange,
  type,
}) => {
  return (
    <StyledTextField
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};
