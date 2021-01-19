import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Registration.css'
const Registration = () => {
  return (
    <div>
     <div className="login-block">
        <h2>Register</h2>
        <h1>Create a new account!</h1>

        <form action="/">

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user ti-user"></i></span>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
          </div>
          
          <hr className="hr-xs"/>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-envelope ti-email"></i></span>
              <input type="text" className="form-control" placeholder="Your email address" />
            </div>
          </div>
          
          <hr className="hr-xs"/>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock ti-unlock"></i></span>
              <input type="password" className="form-control" placeholder="Choose a password" />
            </div>
          </div>

          <button className="btn btn-primary btn-block" type="submit">Sign up</button>

        </form>
      </div>
      <div className="login-links">
        <p className="text-center">Already have an account? <Link className="txt-brand" href="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Registration;
