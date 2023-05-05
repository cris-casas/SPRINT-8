import React, { useContext, useState } from 'react';
import {AppContext} from '../application/provider'


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
                {selectedStarship && selectedStarship.name === starship.name && (
                <div>
                    <div>
                    <p><b>Model:</b> {selectedStarship.model}</p>
                    <p><b>Starship Class:</b> {selectedStarship.starship_class}</p>
                    <p><b>Manufacturer:</b> {selectedStarship.manufacturer}</p>
                    <p><b>Cost:</b> {selectedStarship.cost_in_credits} credits</p>
                    </div>
                    <div>
                        <div>
                            <p><b>Crew:</b> {selectedStarship.crew} </p>
                            <p><b>Passengers Capacity:</b> {selectedStarship.passengers} </p>
                            <p><b>Cargo Capacity:</b> {selectedStarship.cargo_capacity} </p>
                            <p><b>consumables:</b> {selectedStarship.consumables} </p>
                            <p><b>Length:</b> {selectedStarship.length} meters</p>
                        </div>
                        <div>
                            <p><b>Maximum atmosphering speed:</b> {selectedStarship.max_atmosphering_speed} km/h</p>
                            <p><b>Hyperdrive rating:</b> {selectedStarship.hyperdrive_rating} </p>
                            <p><b>Maximum Speed in Real Space:</b> {selectedStarship.MGLT} MGLT </p>
                        </div>
                    </div>
                </div> 
                )}
                <hr />
            </div>
            ))}
        </>
    )
}

export default StarshipsList