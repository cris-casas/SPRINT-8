import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MyProvider from './application/provider';
import Header from './components/Header';
import Starships from './pages/starships';
import Home from './pages/home';
import './App.css'

function App() {

  return (
    <MyProvider>
      <BrowserRouter>
        <Header/>
        <Routes>   
          <Route index element={<Home/>} />
          <Route path="/starships" element={<Starships/>} />
        </Routes>
      </BrowserRouter> 
    </MyProvider>

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