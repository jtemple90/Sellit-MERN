import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar";
import './Registration.css'
const Registration = () => {
  return (
    <div>
      <Navbar />
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body mt-2">
            <h3 className="card-title text-center">Register for an account!</h3>
            <div className="card-text">
              {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
              <form className="login">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="form-group mt-3">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="exampleInputPassword1"
                  />
                </div>
                <button
                  type="submit"
                  className="btn1 btn btn-primary btn-block"
                >
                  Create Account
                </button>

                <div className="sign-up">
                  Already have an account?
                  <Route>
                    <a href="/login">Login!</a>
                  </Route>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
