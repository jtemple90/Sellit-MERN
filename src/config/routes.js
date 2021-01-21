import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from '../components/navBar/Navbar';
import LandingPage from "../pages/landing-page/LandingPage";
// import ProductEdit from "../pages/products-page/ProductEdit";
import ProductPage from "../pages/products-page/ProductPage";
import ProductNew from "../pages/new-product/ProductNew";
import ProductShow from "../pages/show-product/ProductShow";
import Login from "../pages/login-page/Login";
import Registration from "../pages/signup-page/Registration";
import UserShow from "../pages/user-show/UserShow";
// import Registration from "../pages/signup-page/Registration";

export default (
  <Router>
    <Route path="/" exact component={LandingPage} />
    {/* <NavBar /> */}
    <Route path="/products" exact component={ProductPage} />
    <Route path="/products/new" exact component={ProductNew} />
    <Route path="/products/:id" exact component={ProductShow} />
    {/* <Route path="/products/update/:id" exact component={ProductEdit} /> */}
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Registration} />
    <Route path="/user/:id" exact component={UserShow} />
    {/* <Route path="/user/update/:id/" exact component={UserShow} /> */}
    {/* <Route path="/user/:id/delete" exact component={UserShow} /> */}
    {/* <Footer /> */}
  </Router>
);