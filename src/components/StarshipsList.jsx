import React, { useContext, useState } from 'react';
import {AppContext} from '../application/provider';
import StartshipsInfo from '../components/StartshipsInfo';


const StarshipsList = () => {

    const {starships, } = useContext(AppContext);
    const [selectedStarship, setSelectedStarship] = useState(null);

    const handleStarshipClick = (starship) => {
        if (selectedStarship && selectedStarship.name === starship.name) {
          setSelectedStarship(null);
        } else {
          setSelectedStarship(starship);
        }
      };

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
        </>
    )
}

export default StarshipsList