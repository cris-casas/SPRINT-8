import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(res => {
        console.log(res.data);
        setStarships(res.data.results);
      })
  }, []);

  return (
    <>
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
            <a href="#">Home</a>
            <a href="#">Servicios</a>
          </nav>
        </div>

      </header>
      <div>
        {starships.map(starship => (
          <div key={starship.name}>
            <p>{starship.name}</p>
            <p>{starship.model}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

/*
function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/5')
      .then(res => {
        console.log(res.data)
        setName(res.data.name);
      })
  }, []);

  return (
    <p>{name}</p>
  )
}
*/


/*
function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/12')
      .then(res => res.json())
      .then(res => setName(res.name));
  }, []);

  return (
    <p>{name}</p>
  )
}
*/

export default App

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/