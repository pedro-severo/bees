import React from "react";
import { Button } from "@material-ui/core";

const ButtonView: React.FC<any> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonView;
