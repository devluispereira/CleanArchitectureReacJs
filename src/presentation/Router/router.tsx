import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "@/presentation/pages/Login/login";

import "@/presentation/styles/global.scss";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
