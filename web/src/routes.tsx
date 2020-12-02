import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddGame from "./pages/AddGame";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={AddGame} path="/add-game" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
