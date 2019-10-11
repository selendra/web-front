import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Invest from "./components/invest";
import RaiseFund from "./components/raiseFund";
import About from "./components/aboutPage";
import Blog from "./components/blog";
import learnmore from "./components/learnmore";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/invest" component={Invest} />
        <Route exact path="/raiseFund" component={RaiseFund} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/learnmore" component={learnmore} />
        {/* <Redirect to="/" component={Home} /> */}  
      </Switch>
    </React.Fragment>
  );
}

export default App;
