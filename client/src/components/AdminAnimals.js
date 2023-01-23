import {useState, useEffect} from 'react'
import AdminCat from './AdminCat'
import AdminDog from './AdminDog'

const AdminAnimals = ({dogs, cats, updateDog, updateCat, handleDogDelete, handleCatDelete}) => {

  // states for dropdown menu
  const [chosenCategory, setChosenCategory] = useState('pick category')
  // const [allDogs, setAllDogsVisible] = useState(false)
  // const [allCats, setAllCatsVisible] = useState(false)
  const [dataOfAnimalsToDisplay, setDataOfAnimalsToDisplay] = useState([]);
  const [animalTypeToDisplay, setAnimalTypeToDisplay] = useState('');

  // mapping through dog api result
  const dogNodes = dog => {
    return <AdminDog 
    key= {dog._id} 
    dog={dog}  
    updateDog={updateDog}
    handleDogDelete={handleDogDelete}
    
    />    
  }

  // mapping through cat api result
  const catNodes = cat => {
    return <AdminCat 
    key= {cat._id} 
    cat={cat}  
    updateCat={updateCat}
    handleCatDelete={handleCatDelete}
    />    
  }

  const mapDataToNode = (dataObject) => {
    return animalTypeToDisplay === 'cat' ? catNodes(dataObject) : dogNodes(dataObject);
  }

  const nodesToDisplay = dataOfAnimalsToDisplay.map(mapDataToNode);

  // when option is selected the states go to true so they can be rendered
  useEffect(() => {
    // chosenCategory ==="allDogs"
    // ? setAllDogsVisible(true)
    // : setAllDogsVisible(false);
    // chosenCategory ==="allCats"
    // ? setAllCatsVisible(true)
    // : setAllCatsVisible(false)
    
    // all dogs
    if (chosenCategory === 'allDogs') {
      setAnimalTypeToDisplay('dog');
      setDataOfAnimalsToDisplay(dogs);
      // all cats
    } else if (chosenCategory === 'allCats') {
      setAnimalTypeToDisplay('cat');
      setDataOfAnimalsToDisplay(cats);
      // all adopted dogs
    } else if (chosenCategory === 'allAdoptedDogs') {
      const filteredDogs = dogs.filter(dog => dog.adopted)
      setAnimalTypeToDisplay('dog');
      setDataOfAnimalsToDisplay(filteredDogs);
      // all adopted cats
    }else if (chosenCategory === 'allAdoptedCats') {
      const filteredCats = cats.filter(cat => cat.adopted)
      setAnimalTypeToDisplay('cat');
      setDataOfAnimalsToDisplay(filteredCats);
    }
    // all not adopted dogs
    else if (chosenCategory === 'allNotAdoptedDogs') {
      const filteredDogs = dogs.filter(dog => !dog.adopted)
      setAnimalTypeToDisplay('dog');
      setDataOfAnimalsToDisplay(filteredDogs);
    }
    // all not adopted cats
    else if (chosenCategory === 'allNotAdoptedCats') {
      const filteredCats = cats.filter(cat => !cat.adopted)
      setAnimalTypeToDisplay('cat');
      setDataOfAnimalsToDisplay(filteredCats);
    }
  },[chosenCategory, dogs, cats])
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
        <option value='allNotAdoptedDogs'>All Not adopted Dogs</option>
        <option value='allAdoptedDogs'>All Adopted Dogs</option>

        <option value='allCats'>All Cats</option>
        <option value='allAdoptedCats'>All Adopted Cats</option>
        <option value='allNotAdoptedCats'>All Not adopted Cats</option>

        {/* <option value={chosenCategory}>Unadopted cats</option> */}
        {/* <option value={chosenCategory}>Adopted Cats</option> */}

      </select>
        <div>
          {nodesToDisplay}
          {/* {allDogs && [dogNodes]}
          {allCats && [catNodes]} */}
        </div>
    </div>
  )
}

export default AdminAnimals
