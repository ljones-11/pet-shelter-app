import React from "react";

const DogElement = ({dog, handleAdoptMeClick}) => {



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
            <button onClick={handleAdoptMeClick}>Adopt Me!</button>

        </div>

    )
}

export default DogElement;