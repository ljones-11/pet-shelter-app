import React from "react";
import DogElement from "./DogElement";

const DogsList = ({ dogs, handleAdoptMeClick }) => {

    const dogData = dogs.map((dog) => {
        return <li>
                    <DogElement dog={ dog } key={ dog._id } handleAdoptMeClick={handleAdoptMeClick}/>
                </li>
    })


    return (
        <ul>
            {dogData}
        </ul>
    )
}

export default DogsList;