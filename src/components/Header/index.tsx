import React from "react";
import { useGlobal } from "reactn";
import { HeaderView } from "./view";

export const Header: React.FC<any> = () => {
  const [userName] = useGlobal("userName");

  return <HeaderView userName={userName} />;
};
