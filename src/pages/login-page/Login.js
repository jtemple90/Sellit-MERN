import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
const Login = () => {
    return (
      <div>
        <div className="login-block">
          <h2>Login</h2>

          <form action="/">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope ti-email"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock ti-unlock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <hr className="hr-xs" />

            <button className="btn btn-primary btn-block" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="login-links">
          <p className="text-center">
            No Account?{" "}
            <Link className="txt-brand" href="/register">
              Create new account!
            </Link>
          </p>
        </div>
      </div>
    );
}

export default Login