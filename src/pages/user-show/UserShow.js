import React from "react";
import NavBar from '../../components/navBar/Navbar'
import "./UserShow.css";

const UserShow = () => {
  return (
    <div>
      <NavBar />
      <div className="card center">
        <div className="row">
          <div className="column">
            <div className="container">
              <div className="photo">
                <img className="img" src="https://picsum.photos/200" />
              </div>  
            </div>
          
          <div className="content">
          <div className="header">User.Name</div>
            <div className="inner-content">
              <h6>Email:</h6>
              <p>user.email</p>
            </div>
            <div className="inner-content">
              <h6>Location:</h6>
              <p>user.location</p>
            </div>
            <div className="inner-content">
              <h6>User Since:</h6>
              <p>user.date</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShow;
