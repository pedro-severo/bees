import { Brewery } from "../../global/entities/brewery/interfaces";

export interface IBreweryCard extends IBreweryCardView {}

export interface IBreweryCardView {
  brewery: Brewery;
}
