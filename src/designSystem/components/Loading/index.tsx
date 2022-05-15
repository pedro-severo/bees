import { CircularProgress } from "@material-ui/core";
import * as React from "react";

export const Loading: React.FC<any> = (props: any) => {
  return <CircularProgress {...props} />;
};
