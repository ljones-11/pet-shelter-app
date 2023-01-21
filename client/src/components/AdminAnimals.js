import React from 'react'
import Singeldog from './Singeldog'

const AdminAnimals = ({dogs, cats, updateDog, updateCat}) => {

  const dogNodes = dogs.map(dog => {
    return <Singeldog 
    key= {dog._id} 
    dog={dog}  
    updateDog={updateDog}
    />    
      })
      
  return (
    <div>
        <h2>All the animals</h2>
        <ul>
            <h2> all the dogs</h2>
            {dogNodes}
         
            <h2>all the cats</h2>
            {cats.map(cat =>{
                return(
                    <li key={cat.id}> {cat.name} {cat.breed} {cat.age} {cat.about} </li>
                )
            })}
        </ul>
    </div>
  )
}

export default AdminAnimals
