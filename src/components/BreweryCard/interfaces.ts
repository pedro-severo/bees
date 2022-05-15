import { Brewery } from "../../global/entities/brewery/interfaces";

export interface IBreweryCard {
  brewery: Brewery;
}

export interface IBreweryCardView extends IBreweryCard {
  handleDeleteButtonClick: (breweryId: string) => void;
}
