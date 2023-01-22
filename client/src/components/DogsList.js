import React, { useState } from "react";
import DogElement from "./DogElement";

const DogsList = ({ dogs, handleAdoptMeClick }) => {
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
        <div>
            <ul>
                {dogData}
            </ul>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default DogsList;