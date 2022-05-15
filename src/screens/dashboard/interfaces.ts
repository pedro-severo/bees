import { Brewery } from "../../global/entities/brewery/interfaces";

export interface IDashboardView {
  breweries: Brewery[];
  isLoading: boolean;
}

export interface IUseDashboard {
  breweries: Brewery[];
  isLoading: boolean;
}
