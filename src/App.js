import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import "./styles/main.min.css"
import {Helmet} from "react-helmet";


const App = () => {
  const routes = useRoutes()
  return (
      <>
          <Helmet>
              <title>My portfolio</title>
          </Helmet>
        <BrowserRouter>
            <div id="site-border-left"/>
            <div id="site-border-right" />
            <div id="site-border-top" />
            <div id="site-border-bottom" />
            {routes}
        </BrowserRouter>
      </>
  );
}

export default App;
