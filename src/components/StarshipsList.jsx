import React, { useContext } from 'react';
import {AppContext} from '../application/provider'


const StarshipsList = () => {

    const {starships} = useContext(AppContext);

    return (
        <div>
        {starships.map((starship) => (
        <div key={starship.name}>
            <p>{starship.name}</p>
            <p>{starship.model}</p>
            <hr />
        </div>
        ))}
    </div>
    )
}

export default StarshipsList