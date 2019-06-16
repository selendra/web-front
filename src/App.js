import React from "react";
import About from "./components/aboutPage";
import Raisefund from "./components/raiseFund";
import Blog from "./components/blog";
import State from "./components/state/member";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <switch>
          <Route path="/" component={About} exact />
          <Route path="/rais" component={Raisefund} />
          <Route path="/blog" component={Blog} />
          <Route path="/state" component={State} />
        </switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
