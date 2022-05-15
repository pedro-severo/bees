import React from "react";
import { BreweryCard } from "../../components/BreweryCard";
import { Header } from "../../components/Header";
import { IDashboardView } from "./interfaces";
import { CardsWrraper } from "./style";

export const DashboardView: React.FC<IDashboardView> = ({ breweries }) => {
  return (
    <div>
      <Header />
      <CardsWrraper>
        {breweries.map((brewery) => {
          return <BreweryCard brewery={brewery} />;
        })}
      </CardsWrraper>
    </div>
  );
};
