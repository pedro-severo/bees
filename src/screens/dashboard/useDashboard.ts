import { getBreweries } from "./../../services/brewery/getBreweries";
import { useEffect } from "react";
import { useGlobal } from "reactn";
import { IUseDashboard } from "./interfaces";

export const useDashboard = (): IUseDashboard => {
  const [breweries] = useGlobal("breweries");
  const [isLoading] = useGlobal("isLoading");
  useEffect(() => {
    getBreweries();
  }, []);

  return { breweries, isLoading };
};
