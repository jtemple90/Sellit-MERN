import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/navBar/Navbar';
import LandingPage from "../pages/landing-page/LandingPage";
import ProductPage from "../pages/products-page/ProductPage";
import Login from "../pages/login-page/Login";

export default (
  <Router>
    <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/products" exact component={ProductPage} />
      <Route path="/login" exact component={Login} />
  
    {/* <Footer /> */}
  </Router>
);