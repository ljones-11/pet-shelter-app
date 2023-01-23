
import {useEffect, useState} from 'react'
import AdminAdoptionRequests from '../components/AdminAdoptionRequests'
import AdminAnimals from '../components/AdminAnimals'
import AdminForm from '../components/AdminForm'

const AdminContainer = () => {
// url used for id PUT
  const dogURL = 'http://localhost:9000/api/dogs/'
  const catURL ='http://localhost:9000/api/cats/'
  const adoptionURL = 'http://localhost:9000/api/adoptions/'

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [adoptionRequests, setAdoptionRequests] = useState([])

    useEffect(() => {
        fetchDogs();
        fetchCats();
        fetchAdoptionRequests();
    }, [])

    // FETCH DOG
    const fetchDogs = () => {
        fetch('http://localhost:9000/api/dogs')
        .then(response => response.json())
        .then(dogs => setDogs(dogs))
    }
    // FETCH CAT
    const fetchCats = () => {
        fetch('http://localhost:9000/api/cats')
        .then(response => response.json())
        .then(cats => setCats(cats))
    }
  //FETCH ADOPTION REQUEST 
    const fetchAdoptionRequests = () => {
      fetch('http://localhost:9000/api/adoptions')
      .then(respone => respone.json())
      .then(adoptions => setAdoptionRequests(adoptions))
    }
    // POST NEW CAT
    const handleCatSubmit = newCat => {
        fetch('http://localhost:9000/api/cats', {
          method: 'POST',
          body: JSON.stringify(newCat),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => fetchCats())
      }
    
      // POST NEW DOG
      const handleDogSubmit = newDog => {
        fetch('http://localhost:9000/api/dogs', {
          method: 'POST',
          body: JSON.stringify(newDog),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => fetchDogs())
      }

      // PUT UPDATED DOG
     const handleDogUpdate = (dogData, dogId) => {
      return fetch(dogURL + dogId, {
          method: 'PUT',
          body: JSON.stringify(dogData),
          headers: { 'Content-Type': 'application/json' }
      })
      // .then(res => res.json());
      .then(() => fetchDogs()) 
    }

    // PUT UPDATED CAT
    const handleCatUpdate = (catData, catId) => {
      return fetch(catURL + catId, {
        method: 'PUT',
        body: JSON.stringify(catData),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => fetchCats())
    }

    // DELETE Cat
    const handleCatDelete = (catId) => {
      return fetch(catURL + catId,{
        method: 'DELETE'
      })
      .then(() => fetchCats())
    }
    
    const handleDogDelete = (dogId) => {
      return fetch ( dogURL + dogId,{
        method: 'DELETE'

      })
      .then(() => fetchDogs())
    }

    const handleAdoptionArchive = (adoptionRequestData, adoptionRequestID) => {
      return fetch( adoptionURL + adoptionRequestID,{
        method: 'PUT',
        body: JSON.stringify(adoptionRequestData),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => fetchAdoptionRequests())
    }

  return (
    <div>
      <AdminForm onCatSubmit={handleCatSubmit} onDogSubmit={handleDogSubmit}/>
      <AdminAdoptionRequests adoptionRequests={adoptionRequests} handleArchive = {handleAdoptionArchive}/>
      <AdminAnimals dogs={dogs} cats={cats} updateDog= {handleDogUpdate} updateCat={handleCatUpdate} handleDogDelete={handleDogDelete} handleCatDelete={handleCatDelete}/>
    </div>
  )
}

export default AdminContainer
