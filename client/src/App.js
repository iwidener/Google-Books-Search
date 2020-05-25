import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "../src/components/Navbar";
import "./index.css";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
