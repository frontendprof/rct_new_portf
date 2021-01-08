import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import Home from "./components/Home";
import Resume from "./components/Resume"

import "./App.css"





function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/" component={Resume}/>
    </>
  );
}

export default App;
