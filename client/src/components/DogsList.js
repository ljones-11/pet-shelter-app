import React from "react";
import DogElement from "./DogElement";

const DogsList = ({ dogs }) => {

    const dogData = dogs.map((dog) => {
        return <li>
                    <DogElement dog={ dog } key={ dog._id } />
                </li>
    })


    return (
        <ul>
            {dogData}
        </ul>
    )
}

export default DogsList;