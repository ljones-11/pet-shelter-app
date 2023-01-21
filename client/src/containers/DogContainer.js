import React, { useEffect, useState } from "react";
import DogsList from "../components/DogsList";

const DogContainer = () => {

    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetchDogs();
    }, [])

    const fetchDogs = () => {
        fetch('http://localhost:9000/api/dogs')
        .then(response => response.json())
        .then(dogs => setDogs(dogs))

    }
    return (

        <DogsList dogs={dogs} />
    )
}



export default DogContainer;