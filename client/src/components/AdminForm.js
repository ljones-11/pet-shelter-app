import {useState} from 'react'



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
            name,
            breed,
            age,
            about
        }
        if (type === Types.DOG) onDogSubmit(payload)
        if (type === Types.CAT) onCatSubmit(payload)
        resetForm()
    }

  return (
   <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' value={name} onChange={handleNameChange}/>

        <label htmlFor='breed'>Breed:</label>
        <input type='text' name='breed' value={breed} onChange={handleBreedChange}/>

        <label htmlFor='age'>Age:</label>
        <input type='number' name='age' value={age} onChange={handleAgeChange}/>

        <label htmlFor='about'>About:</label>
        <input type='text' name='about' value={about} onChange={handleAboutChange}/>
        
        <label htmlFor='image'>Image:</label>
        <input type='text' name='image' value={image} onChange={handleImageChange}/>
        
        <label htmlFor='type'>Type</label>
        <select name='type' value={type} onChange={handleTypeChange}>
            <option value='' disabled>Cat or Dog</option>
            <option value={Types.CAT}>Cat</option>
            <option value={Types.DOG}>Dog</option>

        </select>
        <input type='submit' value='Save' />
   </form>
  )
}

export default AdminForm
