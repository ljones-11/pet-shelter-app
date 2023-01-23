import { useState, useEffect } from "react";
import styled from 'styled-components';

const HeartButton = styled.button`
background-color: transparent;
border:none;
`
const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(40deg, rgba(253,85,100,1) 50%, rgba(252,176,69,1) 100%);
    width: 320px;
    height: 400px;
    border-radius: 5%;
    font-size: 18px;
    font-family: 'Gotham Rounded';
`

const Name = styled.h4`
    font-size: 30px;
    font-weight: 800;
`
const Image = styled.img`
    max-width: 80%;
    max-height: 50%;
`

const CatElement = ({cat, handleAdoptMeClick}) => {
    const [favourites, setFavourites] = useState([])
    
    useEffect(()=> {
        handleFavourites();
    },[])

    const handleFavourites = (event) => {
        console.log('Favourited!')
    }



    if (cat.adopted) {
        return null
    }
    
    return (
        <div>
            <Card>
                <Image src={cat.image} alt="no image"/>
                <Name>{cat.name}</Name>
                <p>{cat.breed}</p>
                <p>{cat.age}</p>
                <p>{cat.about}</p>
                <HeartButton onClick={handleFavourites}><span>❤️</span></HeartButton>
                <button onClick={handleAdoptMeClick}>Adopt Me!</button>
            </Card>
        </div>
    )
}

export default CatElement;