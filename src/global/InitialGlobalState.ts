import { breweryState } from "./entities/brewery/breweryState";
import { userState } from "./entities/user/userState";
import { layoutState } from "./layoutState/layoutState";

export const InitialGlobalState = {
  ...userState,
  ...breweryState,
  ...layoutState,
};

export type GlobalState = typeof InitialGlobalState;
