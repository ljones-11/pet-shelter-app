import {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 373px;
    margin-left: 50px;

`

const Selecc = styled.select`
    max-width: 190px;
    background-color: #fd5564;
    color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
`
const StInput = styled.input`
    max-width: 190px;
    background-color: #fd5564;
    color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
`

const BottomForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 373px;
`
const Buttons = styled.button`
    /* padding:0px 10px;
    margin: 1em; */


`
const AdminForm = ({onCatSubmit, onDogSubmit}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')
    const [about, setAbout] = useState('')
    const [type, setType] =useState('')
    const [image, setImage] = useState('')

    const Types ={
        DOG: 'dogs',
        CAT: 'cats'
    }

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
    const handleTypeChange = (event) => {
        setType(event.target.value)
    }
    const resetForm = () => {
        setName('')
        setBreed('')
        setAge('')
        setAbout('')
        setType('')
        setImage('')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload ={
            name: name,
            breed: breed,
            age: age,
            about: about,
            image: image,
            adopted: false
        }
        if (type === Types.DOG) onDogSubmit(payload)
        if (type === Types.CAT) onCatSubmit(payload)
        resetForm()
    }

  return (
   <StyledForm onSubmit={handleFormSubmit}>
    <h2>Add a new animal for adoption</h2>
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
        
        <label htmlFor='type'><strong>Type</strong></label>
        <BottomForm>
            <Selecc name='type' value={type} onChange={handleTypeChange}>
                <option value='' disabled>Cat or Dog</option>
                <option value={Types.CAT}>Cat</option>
                <option value={Types.DOG}>Dog</option>
            </Selecc>
            <StInput type='submit' name='submit' value='Save' />
        </BottomForm>
   </StyledForm>
  )
}

export default AdminForm
