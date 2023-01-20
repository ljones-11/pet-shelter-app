import React from "react";

const DogElement = ({dog}) => {


    return (
        <div>
            <h4>{ dog.name }</h4>
            <p>{ dog.breed }</p>
            <p>{ dog.age }</p>
            <p>{ dog.about }</p>
        </div>

    )
}

export default DogElement;