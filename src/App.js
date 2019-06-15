import React from "react";
import About from "./components/aboutPage";
import Raisefund from "./components/raiseFund";
import Blog from "./components/blog";
import State from "./components/state/member";
// import Example from "./components/example";
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
          {/* <Route path="/exa" component={Example} /> */}
        </switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
