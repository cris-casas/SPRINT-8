import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>

      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="Logo de la página"></img>
        </div>
        <nav className="nav-user">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </nav>
      </div>

      <div className="nav-main-container">
        <nav className="nav-main">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/starships'>Starships</Link></li>
          </ul>
        </nav>
      </div>

  </header>
  )
}

export default Header