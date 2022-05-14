import { Checkbox as MuiCheckbox } from "@material-ui/core";
import { StyledFormControl } from "./style";
import React from "react";

const Checkbox: React.FC<any> = ({
  label,
  disabled,
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledFormControl
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      control={<MuiCheckbox />}
      {...props}
    />
  );
};

export default Checkbox;
