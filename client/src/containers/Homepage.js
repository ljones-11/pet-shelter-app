import React, { useState, useEffect } from 'react'

const MainContainer = () => {

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])

    useEffect(() => {
        fetchDogs();
        fetchCats();
    }, [])

    const fetchDogs = () => {
        fetch('http://localhost:9000/api/dogs')
        .then(response => response.json())
        .then(dogs => setDogs(dogs))
    }

    const fetchCats = () => {
        fetch('http://localhost:9000/api/cats')
        .then(response => response.json())
        .then(cats => setCats(cats))
    }

    








    return (
        <h1>I am the main container :)</h1>
    )
}

export default MainContainer;