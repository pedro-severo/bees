import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "reactn";
import { PATH } from "../../routes/paths";
import { HeaderView } from "./view";

export const Header: React.FC<any> = () => {
  const [userName, setUserName] = useGlobal("userName");
  const navigate = useNavigate();

  const handleGoBackClick = (): void => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setUserName("");
    navigate(`${PATH.LOGIN}`);
  };

  return (
    <HeaderView userName={userName} handleGoBackClick={handleGoBackClick} />
  );
};
