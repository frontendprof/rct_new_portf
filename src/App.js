import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import Home from "./components/Home";
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts"

import "./App.css"





function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
