import React from "react";
import ButtonView from "./view";

const Button: React.FC<any> = ({ children, ...props }) => {
  return <ButtonView {...props}>{children}</ButtonView>;
};

export default Button;
