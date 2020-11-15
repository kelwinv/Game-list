import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;