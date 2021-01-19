import React from "react"
import Main from '../.././images/19198999.jpg'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <div>
      <div className='container'>
        <img className='col-lg-7 img' src={Main} />
        <div className='col-lg-5 text-center mg-5'>
          <h1>Welcome, to <br/><span className='span'>Sell It!</span></h1>
          <button className='btn btn-primary'>Login</button>
          <p>No Account!<a href='/register'> Create an account here!</a></p>
        </div>
      </div>
      <div className='circle'></div>

      
    </div>
  );
};
export default LandingPage;
