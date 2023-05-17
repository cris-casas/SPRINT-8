import React, { useContext, useState, useEffect, useRef } from 'react';
import {AppContext} from '../application/provider';
import StartshipsInfo from '../components/StartshipsInfo';
import axios from 'axios';

const StarshipsList = () => {

  const {starships, setStarships} = useContext(AppContext);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [numPage, setNumPage] = useState(1);

  const handleStarshipClick = (starship) => {
      if (selectedStarship && selectedStarship.name === starship.name) {
        setSelectedStarship(null);
      } else {
        setSelectedStarship(starship);
      }
    };

  const nextPage = () => {
    if (numPage < 4) {
      setNumPage(numPage + 1);
    } else {
      alert("No hay más páginas disponibles.");
    }
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/?page=${numPage}`)
      .then(res => {
          console.log(res.data);
          setStarships([...starships, ...res.data.results]);
      })
  }, [numPage]);

    return (
      <div className='starships-component'>
        {starships.map((starship) => (
        <div className="starships-container" key={starship.name} onClick={() => handleStarshipClick(starship)}>
          <h1>{starship.name}</h1>
          <p>{starship.model}</p>
          {selectedStarship && selectedStarship.name === starship.name && <StartshipsInfo selectedStarship={selectedStarship} />}
          
        </div>
        ))}
       <button onClick={() => nextPage()}>View More</button>
      </div>
    )
}

export default StarshipsList;