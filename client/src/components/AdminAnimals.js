import React from 'react'

const AdminAnimals = ({dogs, cats}) => {


  return (
    <div>
        <h2>All the animals</h2>
        <ul>
          {dogs.map(dog => {
              return (
                  <li key={dog.id}> {dog.name} {dog.breed} {dog.age} {dog.about}</li>
                  )
                })}
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
