import React from 'react';
import home from '../assets/home.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
        <div>
        <img src={home} alt="No hay imagen" className='home-imagen'/>
        </div>
        <div className='text-overlay'>
            <h1>Welcome to our Star Wars Spaceships website! </h1>
            <p>
              Explore a galaxy of information about iconic vessels like Star Destroyers, 
              X-Wings, Millennium Falcon, and more. Discover their histories, technical details, 
              and notable encounters. Immerse yourself in the world of Star Wars spacecraft 
              and embark on an intergalactic journey through the stars. May the Force guide you 
              on your exploration!
            </p>
              <button><Link to='/starships'>Starships</Link></button>

        </div>
    </div>
  )
}

export default Home;