import {useState, useEffect} from 'react'
import styled from 'styled-components'

const Buttons = styled.button`
  padding:0px 5px;
  margin: 0.5em;
  background-color: #fd5564;
  color: #ffffff;
  border-color: transparent;
  border-radius: 6px;

`
const StInput = styled.input`
  padding:0px 5px;
  margin-top: 10px;
  background-color: #fd5564;
  color: #ffffff;
  border-color: transparent;
  border-radius: 6px;
  max-width: 127px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 373px;

`
const AdminCat = ({cat, updateCat, handleCatDelete}) => {
    const [name, setName] = useState(cat.name)
    const [age, setAge] = useState(cat.age)
    const [breed, setBreed] = useState(cat.breed)
    const [about, setAbout] = useState(cat.about)
    const [image, setImage] = useState(cat.image)
  // handle changes for form submissions
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleBreedChange = (event) => {
        setBreed(event.target.value)
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }
    const handleAboutChange = (event) => {
        setAbout(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }


        // adopt adn un-adopt
        const [adoptClass, setAdoptClass] = useState('')
        const [adoptButtonText, setAdoptButtonText] = useState('')
    
        useEffect(() => {
            if (cat.adopted){
              setAdoptClass('This cat has been adopted')
              setAdoptButtonText('Un-adopt')
            } else{
              setAdoptClass('This cat is still looking for a home')
              setAdoptButtonText('Adopted')
            }
        }, [cat.adopted])


    const [editAnimal, setEditAnimal] = useState(false)
// time declaration
    const event = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    const adoptCat = () => {
        updateCat({
          name: cat.name,
          breed: cat.breed,
          age: cat.age,
          about: cat.about,
          image: cat.image,
        adopted: !cat.adopted
        
        }, cat._id)
      }
  const handleFormSubmit = (event) => {
          event.preventDefault()
          const id = cat._id
          const payload ={
              name: name,
              breed: breed,
              age: age,
              about: about,
              image: image
          }
          
          updateCat(payload, id)
          .then(setEditAnimal(false)) 
        }
    const editExistingCat = () => {
        // open form
        setEditAnimal(true)
       
    }

    const deleteCat = () => {
        handleCatDelete(cat._id)
    }
  
    
  return (
    <div>
       {/* if edit animal is set to false it will just render all the cats info */}
      {!editAnimal ? (
      <li key={cat.id}> 
         <h3>{ cat.name }</h3>
            <p><strong>Breed:</strong> { cat.breed }</p>
            <p><strong>Age:</strong> { cat.age }</p>
            <p><strong>About:</strong> { cat.about }</p>
            <p><strong>Cat adopted on:</strong> {adoptClass}</p>
       <Buttons onClick={editExistingCat}> Cat update</Buttons>
        <Buttons onClick={adoptCat}> {adoptButtonText}</Buttons>  
        <Buttons onClick={deleteCat}>Delete</Buttons>
         </li>
      )
      // if edit animal is set to true it will open this form 
      : (
        <StyledForm onSubmit={handleFormSubmit}>
          <h3>Update Form</h3>
        <label htmlFor='name'><strong>Name:</strong></label>
        <input type='text' name='name' value={name} onChange={handleNameChange}/>

        <label htmlFor='breed'><strong>Breed:</strong></label>
        <input type='text' name='breed' value={breed} onChange={handleBreedChange}/>

        <label htmlFor='age'><strong>Age:</strong></label>
        <input type='number' name='age' value={age} onChange={handleAgeChange}/>

        <label htmlFor='about'><strong>About:</strong></label>
        <input type='text' name='about' value={about} onChange={handleAboutChange}/>
        
        <label htmlFor='image'><strong>Image:</strong></label>
        <input type='text' name='image' value={image} onChange={handleImageChange}/>
        
        <StInput type='submit' name='submit' value='Save' />
   </StyledForm>
      )}

    </div>
  )
}

export default AdminCat
