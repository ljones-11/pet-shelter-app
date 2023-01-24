import {useState, useEffect} from 'react'
import AdminCat from './AdminCat'
import AdminDog from './AdminDog'
import styled from 'styled-components'

const AnimalDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 590px;
  margin-left: 50px;
  position: sticky;
`
const ListFix = styled.ul`
  list-style: none;
  line-height: 30px;
  padding: 0;
`

const NoStretchSelect = styled.select`
  max-width: 373px;
`
const AdminAnimals = ({dogs, cats, updateDog, updateCat, handleDogDelete, handleCatDelete}) => {

  // states for dropdown menu
  const [chosenCategory, setChosenCategory] = useState('pick category')
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
    <AnimalDiv>
        <h2>Pick animal category</h2>
      <NoStretchSelect value={chosenCategory} onChange={handleChange}>
        <option value="selectCategory" >Select what you want to see</option>
        <option value='allDogs'>All Dogs</option>
        <option value='allNotAdoptedDogs'>All Unadopted Dogs</option>
        <option value='allAdoptedDogs'>All Adopted Dogs</option>

        <option value='allCats'>All Cats</option>
        <option value='allAdoptedCats'>All Adopted Cats</option>
        <option value='allNotAdoptedCats'>All Unadopted Cats</option>

      </NoStretchSelect>
        <ListFix>
          {nodesToDisplay}
        </ListFix>
    </AnimalDiv>
  )
}

export default AdminAnimals
