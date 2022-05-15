import React from "react";
import { useProptectedRoutes } from "../../hooks/useProtectedRoutes";
import { DashboardView } from "./view";
import { useDashboard } from "./useDashboard";

export const Dashboard: React.FC<any> = () => {
  useProptectedRoutes(true);
  const breweries = useDashboard();

  return <DashboardView breweries={breweries} />;
};
