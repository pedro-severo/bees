import { Brewery } from "./../../global/entities/brewery/interfaces";
import { getBreweries } from "./../../services/brewery/getBreweries";
import { useEffect } from "react";
import { useGlobal } from "reactn";

export const useDashboard = (): Brewery[] => {
  const [breweries] = useGlobal("breweries");
  useEffect(() => {
    getBreweries();
  }, []);

  return breweries;
};
