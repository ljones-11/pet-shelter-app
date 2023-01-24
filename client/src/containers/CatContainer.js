import React, { useState, useEffect } from 'react';
import CatsList from '../components/CatsList';
import AdoptForm from '../components/AdoptForm';


const CatContainer = () => {

const [cats, setCats] = useState([])
const [adoptions, setAdoptions] = useState([])
const [showAdoptForm, setShowAdoptForm] = useState(false)
const [catToAdopt, setCatToAdopt] = useState(null)

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

  const handleAdoptMeClick = (pet) => {
        setCatToAdopt(pet)
        setShowAdoptForm(!showAdoptForm)
} 

return (

    <div>
        <CatsList 
            cats={cats} 
            handleAdoptMeClick={handleAdoptMeClick}
        />
        {catToAdopt ? 
        <AdoptForm 
            handleAdoption={handleAdoption} 
            showAdoptForm={showAdoptForm} 
            handleAdoptMeClick={handleAdoptMeClick} 
            pet={catToAdopt}
        />
        : null}
    </div>
)

}
export default CatContainer;