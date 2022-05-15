import React from "react";
import { IBreweryCard } from "./interfaces";
import { BreweryCardView } from "./view";

export const BreweryCard: React.FC<IBreweryCard> = ({ brewery }) => {
  return <BreweryCardView brewery={brewery} />;
};
