import React from 'react'
import './Login.css'
import Navbar from '../../components/navBar/Navbar'
import { BrowserRouter, Route, Link } from "react-router-dom";
const Login = () => {
    return (
      <div>
      <Navbar/>
        <div className="global-container">
	<div className="card login-form">
	<div className="card-body mt-2">
		<h3 className="card-title text-center">Log in to <span className='name'>Sell It!</span></h3>
		<div className="card-text">
			{/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
			<form className='login'>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					{/* <a href="#" style="float:right;font-size:12px;">Forgot password?</a> */}
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<button type="submit" className="btn1 btn btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account?
          <Route>
            <a href="/register">Create One</a>
          </Route> 
				</div>
			</form>
		</div>
	</div>
</div>
</div>
      </div>
    );
}

export default Login