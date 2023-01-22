import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const HeartButton = styled.button`
background-color: transparent;
border:none;

`

const DogElement = ({dog, handleAdoptMeClick}) => {

    const [favourites, setFavourites] = useState([])
    
    useEffect(()=> {
        handleFavourites();
    },[])

    const handleFavourites = (event) => {
        console.log('Favourited!')
    }


    if (dog.adopted) {
        return null
    }

    return (
        <div>
            <img src={dog.image} alt="no image"/>
            <h4>{ dog.name }</h4>
            <p>{ dog.breed }</p>
            <p>{ dog.age }</p>
            <p>{ dog.about }</p>
            <HeartButton onClick={handleFavourites}><span>❤️</span></HeartButton>
            <button onClick={handleAdoptMeClick}>Adopt Me!</button>

        </div>

    )
}

export default DogElement;