import React, { lazy } from "react";
// import { Redirect } from "react-router-dom";

let routesUsed = [
  {
    path: "/",
    exact: true,
    // component: () => <Redirect to="/presentation" />
    // component: () => <Redirect to="/home" />
    component: () => <div>HAHAHA</div>
  }
];

export default routesUsed;
