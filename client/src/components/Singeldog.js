import {useState} from 'react'

const Singeldog = ({dog, updateDog}) => {

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

    const updateDog = () => {
        // open form
        editMode = false

        // on submit updateDog()

    }
    
  return (
    <div>
      <li key={dog.id}> {dog.name} {dog.breed} {dog.age} {dog.about} {dog.adoptionTime}
       <button onClick={updateDog}> Dog update</button>
        <button onClick={adoptDog}> Dog adopted</button></li>
    </div>
  )
}

export default Singeldog
