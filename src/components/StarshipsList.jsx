import React, { useContext, useState } from 'react';
import {AppContext} from '../application/provider';
import StartshipsInfo from '../components/StartshipsInfo';
import axios from 'axios';

const StarshipsList = () => {

    const {starships, setStarships} = useContext(AppContext);
    const [selectedStarship, setSelectedStarship] = useState(null);

    const handleStarshipClick = (starship) => {
        if (selectedStarship && selectedStarship.name === starship.name) {
          setSelectedStarship(null);
        } else {
          setSelectedStarship(starship);
        }
      };

  const nextPage = () => {
    axios.get('https://swapi.dev/api/starships/?page=2')
      .then(res => {
          console.log(res.data);
          setStarships(res.data.results);
      })
  }


    return (
        <>
            {starships.map((starship) => (
            <div key={starship.name} onClick={() => handleStarshipClick(starship)}>
                <p>{starship.name}</p>
                <p>{starship.model}</p>
                {selectedStarship && selectedStarship.name === starship.name && <StartshipsInfo selectedStarship={selectedStarship} />}
                <hr />
            </div>
            ))}
            <button onClick={() => nextPage()}>View More</button>
        </>
    )
}

export default StarshipsList;