import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarshipsList = () => {

    const [starships, setStarships] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
        .then(res => {
            console.log(res.data);
            setStarships(res.data.results);
        })
    }, []);


    return (
        <div>
        {starships.map(starship => (
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