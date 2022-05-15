import React from "react";
import { interfaceTexts } from "../../constants/interfaceTexts";
import BackIcon from "../../designSystem/icons/BackIcon";
import { IHeaderView } from "./interfaces";
import { BackButton, HeaderWrapper } from "./style";

export const HeaderView: React.FC<IHeaderView> = ({ userName }) => {
  return (
    <HeaderWrapper>
      <BackButton>
        <BackIcon />
        <h2>{interfaceTexts.screens.dashboard.header.goBack}</h2>
      </BackButton>
      <h2>{userName}</h2>
    </HeaderWrapper>
  );
};
