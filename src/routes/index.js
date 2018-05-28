import React from "react";
import { Route } from "react-router-dom";
import Navigator from "../components/Navigator.react";

export default Routes => (
  <div>
    <Route path="/" component={Navigator} />
  </div>
);
