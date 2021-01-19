import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <body className="text-center">
                <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </body>
        </div>
    )
}

export default Login