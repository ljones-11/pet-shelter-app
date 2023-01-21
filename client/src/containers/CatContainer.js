import React, { useState, useEffect } from 'react';
import CatsList from '../components/CatsList';
import AdoptForm from '../components/AdoptForm';


const CatContainer = () => {

const [cats, setCats] = useState([])
const [adoptions, setAdoptions] = useState([])

useEffect(() => {
    fetchCats();
}, [])


const fetchCats = () => {
    fetch('http://localhost:9000/api/cats')
    .then(response => response.json())
    .then(cats => setCats(cats))
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
        <CatsList cats={cats}/>
        <AdoptForm handleAdoption={handleAdoption}/>
    </div>
)

}
export default CatContainer;