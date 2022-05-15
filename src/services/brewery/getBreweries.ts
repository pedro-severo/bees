import axios from "axios";
import { setGlobal } from "reactn";
import { baseUrl } from "../../constants/api";

export const getBreweries = async () => {
  try {
    const response = await axios.get(`${baseUrl}breweries`);
    const breweries = response?.data;
    if (breweries.length) setGlobal({ breweries });
  } catch (e) {
    // TODO: create a component to show erros to user
    console.log(e);
  }
};
