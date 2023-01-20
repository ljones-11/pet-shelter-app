import React, { useState, useEffect } from 'react'

const Homepage = () => {

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
        <>
            <h1>Welcome to Pet Shelter Tinder</h1>
            <h2>This is the homepage</h2>
        </>
    )
}

export default Homepage;