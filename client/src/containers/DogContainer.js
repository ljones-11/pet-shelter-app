import React, { useEffect, useState } from "react";
import DogsList from "../components/DogsList";
import AdoptForm from '../components/AdoptForm';


const DogContainer = () => {

    const [dogs, setDogs] = useState([])
    const [adoptions, setAdoptions] = useState([])

    useEffect(() => {
        fetchDogs();
    }, [])

    const fetchDogs = () => {
        fetch('http://localhost:9000/api/dogs')
        .then(response => response.json())
        .then(dogs => setDogs(dogs))
    }

    const fetchAdoptions = () => {
        fetch('http://localhost:9000/api/adoptions')
        .then(response => response.json())
        .then(adoptions => setAdoptions(adoptions))
    }

    const handleAdoption = newAdoption => {
        fetch('http://localhost:9000/api/adoptions', {
          method: 'POST',
          body: JSON.stringify(newAdoption),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => fetchAdoptions())
      }
    return (
        <div>
        <DogsList dogs={dogs} />
        <AdoptForm handleAdoption={handleAdoption}/>
        </div>
    )
}



export default DogContainer;