import React, { useState, useEffect } from 'react';
import CatsList from '../components/CatsList';


const CatContainer = () => {

const [cats, setCats] = useState([])

useEffect(() => {
    fetchDogs();
    fetchCats();
}, [])


const fetchCats = () => {
    fetch('http://localhost:9000/api/cats')
    .then(response => response.json())
    .then(cats => setCats(cats))
}


return (

    <div>
        <CatsList cats={cats}/>
    </div>
)


export default CatContainer;