import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import "./styles/main.min.css"


const App = () => {
  const routes = useRoutes()
  return (
    <BrowserRouter>
        <div id="site-border-left"/>
        <div id="site-border-right" />
        <div id="site-border-top" />
        <div id="site-border-bottom" />
        {routes}
    </BrowserRouter>
  );
}

export default App;
