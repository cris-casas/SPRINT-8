import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

const navigate = useNavigate();

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
      <a onClick={() => navigate('/starships')}>Starships</a>
        <a href="#">Servicios</a>
      </nav>
    </div>

  </header>
  )
}

export default Header