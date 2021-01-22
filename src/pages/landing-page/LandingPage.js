import React from "react"
import './LandingPage.css'
import Background from "../.././images/3398605.jpg";


const LandingPage = () => {
  return (
    <div>
      <div className="container"></div>
    <div className='background-img' style={{ backgroundImage: `url(${Background})`}} å>
      <header className="col-12 col-md-12 text-right right-side mg-4 justify-content-center pt-3">
        <a className="link" href="/products">
          Products
        </a>
      </header>
        <div className="content col-12 text-center align-content-center justify-content-center">
          <h1 className='logo'>Sell It!</h1>
          <form className="form-inline my-2 my-lg-0 mb-lg-4 justify-content-center">
            <input
              className="form-control input"
              type="search"
              placeholder="Search..."
            />
            <button
              className="btn2 btn btn-outline-primary ml-1 my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <a href="/login">
            <button className="btn2 btn btn-primary b-outline-none">Login</button>
          </a>
          <p>
            No Account!<a className='register-link' href="/register"> Create an account here!</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
