import React from "react";
import { IBreweryCardView } from "./interfaces";

export const BreweryCardView: React.FC<IBreweryCardView> = ({ brewery }) => {
  // TODO: link to create tag: https://mui.com/pt/material-ui/react-chip/
  console.log(brewery);
  return <div>Card</div>;
};
