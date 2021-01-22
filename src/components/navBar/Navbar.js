import React, { Component } from 'react';
import './Navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <Route>
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <a className="navbar-brand brand" href="/">
              Sell It!
            </a>
            <button
              className=" navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/user/:id">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="sumbit1 form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  className="btn2 btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </Route>
      </div>
    );
  }
}

export default NavBar; 