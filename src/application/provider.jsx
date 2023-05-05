import React, {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';


export const AppContext = createContext();
//export const useMyContext = () => useContext(AppContext);


const MyProvider = ({ children }) =>{
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
        .then(res => {
            console.log(res.data);
            setStarships(res.data.results);
        })
    }, []);


    return (            
            <AppContext.Provider value={{starships}}>
                {children}
            </AppContext.Provider>  
    );
}

export default MyProvider;