import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Starships from './pages/Starships';


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
    <BrowserRouter>
      <Header/>
        <Routes>   
          <Route index element={<Home/>} />
          <Route path="/starships" element={<Starships/>} />
        </Routes>
    </BrowserRouter>
  )
}

/*



      <BrowserRouter>
        <Routes>   
          <Route index element={<Home/>} />
          <Route path="./pages/Starships" element={<Starships/>} />
        </Routes>
      </BrowserRouter>

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