import React from "react"
import Main from '../.././images/19198999.jpg'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <div>
    <div className="row"></div>
      <div className='container main'>
        <img className='col-lg-7 img' src={Main} />
        <div className='col-lg-5 text-center mg-5 right-side'>
          <h1 className='name text-left'>Sell It!</h1>
          <a href="/login">
            <button className='btn btn-primary'>Login</button>
          </a>
          <p>No Account!<a href='/register'> Create an account here!</a></p>
        </div>
      </div>
      <div className='circle'></div>

      
    </div>
  );
};
export default LandingPage;
