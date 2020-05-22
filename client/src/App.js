// import { BrowserRoter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "../src/pages/Search";
import Navbar from "../src/components/Navbar";
// import React, { Component } from "react";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/Google-Books-Search/saved" component={Saved} /> */}
      </div>
    </Router>
  );
}

export default App;
