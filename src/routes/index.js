import React from "react";
import Router, { Route, Switch } from "react-router-dom";
import Home from "../views/Home.react";
import NotFound from "../views/NotFound.react";
import Navigator from "../components/Navigator.react";

export default Routes => (
  <div>
    <Route path="/" component={Navigator} />
  </div>
);
