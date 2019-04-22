import React from "react";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import CarryOn from "./projects/project/carryon";
export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/projects/carryon" component={CarryOn} />
  </Switch>
);
