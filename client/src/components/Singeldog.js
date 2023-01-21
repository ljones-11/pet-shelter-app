import React from 'react'

const Singeldog = ({dog, updateDog}) => {

    const adoptDog = () => {
        console.log('button is clicked');
        updateDog({
          _id: dog._id,
        //   "adoptionTime": 'Today'
        "name": "Willy"
        })
      }
    
  return (
    <div>
      <li key={dog.id}> {dog.name} {dog.breed} {dog.age} {dog.about} {dog.adoptionTime} <button onClick={adoptDog}> Dog adopted</button></li>
    </div>
  )
}

export default Singeldog
