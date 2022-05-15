import React from "react";
import { IBreweryCard } from "./interfaces";
import { BreweryCardView } from "./view";
import { useGlobal } from "reactn";

export const BreweryCard: React.FC<IBreweryCard> = ({ brewery }) => {
  const [breweries, setBreweries] = useGlobal("breweries");

  const handleDeleteButtonClick = (breweryId: string) => {
    // here I chose to use the some method instead of the filter method,
    // because the some method stop the loop when happen the condition to return true
    // and the filter method run the loop until the end of array
    breweries.some((brewery, index, array) => {
      if (brewery.id === breweryId) {
        array.splice(index, 1);
        setBreweries(array);
        return true;
      }
      return false;
    });
  };
  return (
    <BreweryCardView
      brewery={brewery}
      handleDeleteButtonClick={handleDeleteButtonClick}
    />
  );
};
