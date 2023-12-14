import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul id="NavBar">
          <li>
            <img src={logo} alt="Logo" style={{ height: '50px', width: '50px', marginTop: '10px', borderRadius:'1rem'}} />
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/data">Dataset</Link></li>
          <li><Link to="/roc" >ROC</Link></li>
          <li><Link to="/pre_rec" >Precision Recall</Link></li>
          <li><Link to="/algo" >Algorithms</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
