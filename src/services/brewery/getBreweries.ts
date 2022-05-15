import axios from "axios";
import { setGlobal } from "reactn";
import { baseUrl } from "../../constants/api";

export const getBreweries = async () => {
  try {
    setGlobal({ isLoading: true });
    const response = await axios.get(`${baseUrl}breweries`);
    const breweries = response?.data;
    setGlobal({ isLoading: false });
    if (breweries.length) setGlobal({ breweries });
  } catch (e) {
    setGlobal({ isLoading: false });
    // TODO: create a component to show erros to user
    console.log(e);
  }
};
