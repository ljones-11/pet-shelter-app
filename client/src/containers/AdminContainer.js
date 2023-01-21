
import {useEffect, useState} from 'react'
import AdminAdoptionRequests from '../components/AdminAdoptionRequests'
import AdminAnimals from '../components/AdminAnimals'
import AdminForm from '../components/AdminForm'

const AdminContainer = () => {

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [adoptionRequests, setAdoptionRequests] = useState([])

    useEffect(() => {
        fetchDogs();
        fetchCats();
        fetchAdoptionRequests();
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

    const fetchAdoptionRequests = () => {
      fetch('http://localhost:9000/api/adoptionRequests')
      .then(respone => respone.json())
      .then(adoptionRequests => setAdoptionRequests(adoptionRequests))
    }

    const handleCatSubmit = newCat => {
        fetch('http://localhost:9000/api/cats', {
          method: 'POST',
          body: JSON.stringify(newCat),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => fetchCats())
      }
    
      const handleDogSubmit = newDog => {
        fetch('http://localhost:9000/api/dogs', {
          method: 'POST',
          body: JSON.stringify(newDog),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => fetchDogs())
      }

  return (
    <div>
      <AdminAnimals dogs={dogs} cats={cats}/>
      <AdminForm onCatSubmit={handleCatSubmit} onDogSubmit={handleDogSubmit}/>
      <AdminAdoptionRequests adoptionRequests={adoptionRequests}/>
    </div>
  )
}

export default AdminContainer
