import React from "react";
import { TextFieldView } from "./view";

export const TextField: React.FC<any> = ({ ...props }) => {
  return <TextFieldView {...props} />;
};

export default TextField;
