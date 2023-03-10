import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import AdminAdoptionRequests from '../components/AdminAdoptionRequests'
import AdminAnimals from '../components/AdminAnimals'
import AdminForm from '../components/AdminForm';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #434343;
  font-family: 'proxima-nova';
`

const AdminStyledLeft = styled.div`
  display: flex;
  flex-direction: column;

`
const AdminStyledRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  
`

const AdminContainer = ({isLoggedIn}) => {


  // navigate
  const navigate = useNavigate()
// url used for id PUT
  const dogURL = 'http://localhost:9000/api/dogs/'
  const catURL ='http://localhost:9000/api/cats/'
  const adoptionURL = 'http://localhost:9000/api/adoptions/'

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [adoptionRequests, setAdoptionRequests] = useState([])

    useEffect(() => {
        if (!isLoggedIn){
          navigate('/login')
        }
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
    <Div>
      <AdminStyledLeft>
        <AdminForm onCatSubmit={handleCatSubmit} onDogSubmit={handleDogSubmit}/>
        <AdminAnimals dogs={dogs} cats={cats} updateDog= {handleDogUpdate} updateCat={handleCatUpdate} handleDogDelete={handleDogDelete} handleCatDelete={handleCatDelete}/>
      </AdminStyledLeft>
      <AdminStyledRight>
        <AdminAdoptionRequests adoptionRequests={adoptionRequests} handleArchive = {handleAdoptionArchive}/>
      </AdminStyledRight>
    </Div>
  )
}

export default AdminContainer
