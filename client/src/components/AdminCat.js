import {useState} from 'react'

const AdminCat = ({cat, updateCat, handleCatDelete}) => {
    const [name, setName] = useState(cat.name)
    const [age, setAge] = useState(cat.age)
    const [breed, setBreed] = useState(cat.breed)
    const [about, setAbout] = useState(cat.about)

    const [image, setImage] = useState(cat.image)



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
        adoptionTime: event.toLocaleDateString('en-UK', options)
        
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
       {/* if edit animal is set to false it will just render all the dogs info */}
      {!editAnimal ? (
      <li key={cat.id}> 
         <h4>{ cat.name }</h4>
            <p>Breed: { cat.breed }</p>
            <p>Age: { cat.age }</p>
            <p>About: { cat.about }</p>
            <p>cat was adopted on: {cat.adoptionTime}</p>
       <button onClick={editExistingCat}> Cat update</button>
        <button onClick={adoptCat}> Cat adopted</button>  
        <button onClick={deleteCat}>Delete</button>
         </li>
      )
      // if editanimal is set to true it will open this form 
      : (
        <form onSubmit={handleFormSubmit}>
          <h3>Update Form</h3>
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
        
        <input type='submit' name='submit' value='Save' />
   </form>
      )}

    </div>
  )
}

export default AdminCat
