import React, { useState } from "react";
import DogElement from "./DogElement";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    

`
const NextPrev = styled.button`
    background-color: transparent;
    border:none;
    width: 50px;

`

const ULFix = styled.ul`
    list-style: none;
    display: grid;
    justify-content: center;
`

const DogsList = ({ dogs, handleAdoptMeClick}) => {
    const [count, setCount] = useState(0);

    const oneDog = dogs.slice(count, count+1);
    const dogData = oneDog.map((dog) => {
        return <li>
                    <DogElement dog={ dog } key={ dog._id } handleAdoptMeClick={handleAdoptMeClick}/>
                </li>
    })

    const handleNext = () => {
        setCount(count+1)
    }

    const handlePrevious = () => {
        setCount(count-1)
    }

    return (
        <Section>
            <NextPrev onClick={handlePrevious}><span>⬅️</span></NextPrev>
                <ULFix>
                    {dogData}
                </ULFix>
            <NextPrev onClick={handleNext}><span>➡️</span></NextPrev>
        </Section>
    )
}

export default DogsList;