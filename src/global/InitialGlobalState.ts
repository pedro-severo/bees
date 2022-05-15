import { breweryState } from "./entities/brewery/breweryState";
import { userState } from "./entities/user/userState";

export const InitialGlobalState = {
  ...userState,
  ...breweryState,
};

export type GlobalState = typeof InitialGlobalState;
