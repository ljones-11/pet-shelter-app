import React, { useState } from "react";
import DogElement from "./DogElement";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`
const NextPrev = styled.button`
    background-color: transparent;
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;

`

const ChevFix = styled.img`
    min-height:40px;
    min-width: 40px;
`

const ULFix = styled.ul`
    list-style: none;
    display: grid;
    justify-content:center;
    padding-left:0;
`

const DogsList = ({ dogs, handleAdoptMeClick}) => {
    const [count, setCount] = useState(0);

    const left = require('../leftchevron.png');
    const right = require('../rightchevron.png');

    const oneDog = dogs.slice(count, count+1);
    const dogData = oneDog.map((dog) => {
        return <li>
                    <DogElement dog={ dog } key={ dog._id } handleAdoptMeClick={handleAdoptMeClick}/>
                </li>
    })


    const updatedDogs = dogs.filter(dog => !dog.adopted);

    const handleNext = () => {
        if (updatedDogs.length+1 > count){
            setCount(count+1)
        } if (updatedDogs.length-1 <= count) {
            setCount(0);
        }

    }

    const handlePrevious = () => {
        if (count > 0){
            setCount(count-1)
        } else {
            setCount(updatedDogs.length-1);
        }
    }

    return (
        <Section>
            <NextPrev onClick={handlePrevious}><ChevFix src={left}></ChevFix></NextPrev>
                <ULFix>
                    {dogData}
                </ULFix>
                <NextPrev onClick={handleNext}><ChevFix src={right}></ChevFix></NextPrev>
        </Section>
    )
}

export default DogsList;