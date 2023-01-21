import {useState} from 'react'


const AdminDog = ({dog, updateDog, handleDogDelete}) => {


  const [name, setName] = useState(dog.name)
    const [age, setAge] = useState(dog.age)
    const [breed, setBreed] = useState(dog.breed)
    const [about, setAbout] = useState(dog.about)

    const [image, setImage] = useState(dog.image)



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


    const adoptDog = () => {
        console.log('button is clicked');
        updateDog({
        //   _id: dog._id,
          name: dog.name,
          breed: dog.breed,
          age: dog.age,
          about: dog.about,
        //   image: dog.image,
            adoptionTime: event.toLocaleDateString('en-UK', options)
        
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
         <h4>{ dog.name }</h4>
            <p>Breed: { dog.breed }</p>
            <p>Age: { dog.age }</p>
            <p>About: { dog.about }</p>
            <p>Dog was adopted on: {dog.adoptionTime}</p>
       <button onClick={editExistingDog}> Dog update</button>
        <button onClick={adoptDog}> Dog adopted</button> 
        <button onClick={deleteDog}>Delete</button>  
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

export default AdminDog
