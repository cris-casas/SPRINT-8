import React, { useEffect, useState } from 'react'

const StartshipsInfo = ({ selectedStarship }) => {

{/*
    const imageid = selectedStarship.url.slice(32, -1);
    console.log(imageid);
    const imageSource = `https://starwars-visualguide.com/assets/img/starships/${imageid}.jpg`;
*/}

    const [imageSource, setImageSource] = useState("");

    useEffect(() => {
        const imageId = selectedStarship.url.slice(32, -1);
        setImageSource(`https://starwars-visualguide.com/assets/img/starships/${imageId}.jpg`);
    }, [selectedStarship.url]);

    //console.log(selectedStarship.url);

  return (
    <div className="starships-info-container">
        <div>
            <img src={imageSource} alt="No hay imagen"></img>
        </div>
        <div>
            <ul>
                <li><span><b>Model: </b></span><span>{selectedStarship.model}</span></li>
                <li><b>Starship Class: </b>{selectedStarship.starship_class}</li>
                <li><b>Manufacturer: </b>{selectedStarship.manufacturer}</li>
                <li><b>Cost: </b>{selectedStarship.cost_in_credits} credits</li>
                <li><b>Crew: </b>{selectedStarship.crew} </li>
                <li><b>Passengers Capacity: </b>{selectedStarship.passengers}</li>
                <li><b>Cargo Capacity: </b>{selectedStarship.cargo_capacity}</li>
                <li><b>consumables: </b>{selectedStarship.consumables}</li>
                <li><b>Length: </b>{selectedStarship.length} meters</li>
                <li><b>Hyperdrive rating: </b>{selectedStarship.hyperdrive_rating}</li>
                <li><b>Maximum Speed in Real Space: </b>{selectedStarship.MGLT} MGLT</li>
            </ul>
        </div>
    </div>
    )
};

export default StartshipsInfo;

{/*
<div>
        <img src={imageSource} alt="No hay imagen"></img>
            <div className="starships-details-container">
                <div>
                    <ul>
                        <li><b>Model:</b></li>
                        <li><b>Starship Class:</b></li>
                        <li><b>Manufacturer:</b></li>
                        <li><b>Crew:</b></li>
                        <li><b>Passengers Capacity:</b></li>
                        <li><b>Cargo Capacity:</b></li>
                        <li><b>consumables:</b></li>
                        <li><b>Length:</b></li>
                        <li><b>Hyperdrive rating:</b></li>
                        <li><b>Maximum Speed in Real Space:</b></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>{selectedStarship.model}</li>
                        <li>{selectedStarship.starship_class}</li>
                        <li>{selectedStarship.manufacturer}</li>
                        <li>{selectedStarship.crew} </li>
                        <li>{selectedStarship.passengers}</li>
                        <li>{selectedStarship.cargo_capacity}</li>
                        <li>{selectedStarship.consumables}</li>
                        <li>{selectedStarship.length} meters</li>
                        <li>{selectedStarship.hyperdrive_rating}</li>
                        <li>{selectedStarship.MGLT} MGLT</li>
                    </ul>
                </div>
            </div>
    </div>
*/}