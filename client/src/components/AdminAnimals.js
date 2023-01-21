import React from 'react'
import AdminCat from './AdminCat'
import AdminDog from './AdminDog'

const AdminAnimals = ({dogs, cats, updateDog, updateCat}) => {

  const dogNodes = dogs.map(dog => {
    return <AdminDog 
    key= {dog._id} 
    dog={dog}  
    updateDog={updateDog}
    />    
      })
      
    const catNodes = cats.map(cat => {
        return <AdminCat 
        key= {cat._id} 
        cat={cat}  
        updateCat={updateCat}
        />    
          })
          
  return (
    <div>
        <h2>All the animals</h2>
        <ul>
            <h2> all the dogs</h2>
            {dogNodes}
         
            <h2>all the cats</h2>
            {catNodes}
        </ul>
    </div>
  )
}

export default AdminAnimals
