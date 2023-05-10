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
    <div>
        <div>
        <img src={imageSource} alt="No hay imagen"></img>
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
)
};

export default StartshipsInfo;