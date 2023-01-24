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

const AdminDog = ({dog, updateDog, handleDogDelete}) => {

    const [name, setName] = useState(dog.name)
    const [age, setAge] = useState(dog.age)
    const [breed, setBreed] = useState(dog.breed)
    const [about, setAbout] = useState(dog.about)
    const [image, setImage] = useState(dog.image)

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

    const [editAnimal, setEditAnimal] = useState(false)

    // adopt adn un-adopt
    const [adoptClass, setAdoptClass] = useState('')
    const [adoptButtonText, setAdoptButtonText] = useState('')

    useEffect(() => {
      console.log('dog adopted:', dog.adopted);
        if (dog.adopted){
          setAdoptClass('This dog has been adopted')
          setAdoptButtonText('Un-adopt')
        } else{
          setAdoptClass('This dog is still looking for a home')
          setAdoptButtonText('Adopted')
        }
    }, [dog.adopted])
    
// time declaration
    const event = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const adoptDog = () => {
        console.log('button is clicked with adopted: ', !dog.adopted  );
        updateDog({
        //   _id: dog._id,
          name: dog.name,
          breed: dog.breed,
          age: dog.age,
          about: dog.about,
        //   image: dog.image,
            adopted: !dog.adopted  
        }, dog._id)
      }
  const handleFormSubmit = (event) => {
          event.preventDefault()
          const id = dog._id
          const payload ={
              name: name,
              breed: breed,
              age: age,
              about: about,
              image: image
          }
          
          updateDog(payload, id)
          .then(setEditAnimal(false)) 
        }
    const editExistingDog = () => {
        // open form
        setEditAnimal(true)     
    }
    const deleteDog = () => {
      handleDogDelete(dog._id)
    }
  
  return (
    <div>
       {/* if edit animal is set to false it will just render all the dogs info */}
      {!editAnimal ? (
      <li key={dog.id}> 
         <h3>{ dog.name }</h3>
            <p><strong>Breed:</strong> { dog.breed }</p>
            <p><strong>Age:</strong> { dog.age }</p>
            <p><strong>About:</strong> { dog.about }</p>
            <p><strong>Dog adopted on:</strong> {adoptClass}</p>
       <Buttons onClick={editExistingDog}> Dog update</Buttons>
        <Buttons onClick={adoptDog}> {adoptButtonText}</Buttons> 
        <Buttons onClick={deleteDog}>Delete</Buttons>  
        </li>
      )
      // if editanimal is set to true it will open this form 
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

export default AdminDog
