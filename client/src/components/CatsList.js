import CatElement from "./CatElement";
import { useState } from "react";

const CatsList = ({cats}) => {
    const [count, setCount] = useState(0);

    const oneCat = cats.slice(count, count+1);

    const catData = oneCat.map((cat) => {
        return <li>
            <CatElement cat={cat} key={cat._id}/>
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
            {catData}
            </ul>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )

}

export default CatsList;