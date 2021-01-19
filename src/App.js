import React from "react";
import Routes from './config/routes'
import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
     { Routes }
    </div>
  );
}

export default App;
