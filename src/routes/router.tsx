import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./paths";
import { Login } from "../screens/login";
import { Dashboard } from "../screens/dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Dashboard />} />
        <Route path={PATH.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
