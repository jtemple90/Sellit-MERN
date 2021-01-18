import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/navBar/Navbar'
import LandingPage from "../pages/landing-page/LandingPage";

export default (
  <Router>
    <NavBar />
      <Route path="/" exact component={LandingPage} />
  
    {/* <Footer /> */}
  </Router>
);