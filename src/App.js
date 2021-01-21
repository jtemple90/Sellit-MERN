import React from "react";
import Routes from './config/routes'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Background from "./images/3398605.jpg";

import './App.css';

function App() {
  return (
    <div className="App">
    <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
     { Routes }
    </div>
    </div>
  );
}

export default App;
