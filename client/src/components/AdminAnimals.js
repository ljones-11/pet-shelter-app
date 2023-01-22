import {useState, useEffect} from 'react'
import AdminCat from './AdminCat'
import AdminDog from './AdminDog'

const AdminAnimals = ({dogs, cats, updateDog, updateCat, handleDogDelete, handleCatDelete}) => {

  // states for dropdown menu
  const [chosenCategory, setChosenCategory] = useState('pick category')
  const [allDogs, setAllDogsVisible] = useState(false)
  const [allCats, setAllCatsVisible] = useState(false)

  // mapping through dog api result
  const dogNodes = dogs.map(dog => {
    return <AdminDog 
    key= {dog._id} 
    dog={dog}  
    updateDog={updateDog}
    handleDogDelete={handleDogDelete}
    
    />    
  })
  // mapping through cat api result
  const catNodes = cats.map(cat => {
    return <AdminCat 
    key= {cat._id} 
    cat={cat}  
    updateCat={updateCat}
    handleCatDelete={handleCatDelete}
    />    
  })
  // when option is selected the states go to true so they can be rendered
  useEffect(() => {
    chosenCategory ==="allDogs"
    ? setAllDogsVisible(true)
    : setAllDogsVisible(false);
    chosenCategory ==="allCats"
    ? setAllCatsVisible(true)
    : setAllCatsVisible(false)
  },[chosenCategory])
  // handle change for dropdown menu
  const handleChange = (e) => {
    setChosenCategory(e.target.value)
  }

  return (
    <div>
        <h2>Pick animal category</h2>
      <select value={chosenCategory} onChange={handleChange}>
        <option value="selectCategory" >Select what you want to see</option>
        <option value='allDogs'>All Dogs</option>
        {/* <option value={chosenCategory}>Unadopted dogs</option> */}
        {/* <option value={chosenCategory}>Adopted Dogs</option> */}
        <option value='allCats'>All Cats</option>
        {/* <option value={chosenCategory}>Unadopted cats</option> */}
        {/* <option value={chosenCategory}>Adopted Cats</option> */}

      </select>
        <div>
          {allDogs && [dogNodes]}
          {allCats && [catNodes]}
        </div>
    </div>
  )
}

export default AdminAnimals
