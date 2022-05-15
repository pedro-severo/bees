import React from "react";
import { BreweryCard } from "../../components/BreweryCard";
import { Header } from "../../components/Header";
import { Loading } from "../../designSystem/components/Loading";
import { IDashboardView } from "./interfaces";
import { CardsWrraper, LoadingWrapper } from "./style";

export const DashboardView: React.FC<IDashboardView> = ({
  breweries,
  isLoading,
}) => {
  return (
    <div>
      <Header />
      <CardsWrraper>
        {isLoading ? (
          <LoadingWrapper>
            <Loading size={80} />
          </LoadingWrapper>
        ) : (
          breweries.map((brewery) => {
            return <BreweryCard brewery={brewery} />;
          })
        )}
      </CardsWrraper>
    </div>
  );
};
