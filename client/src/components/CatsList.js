import CatElement from "./CatElement";
import { useState } from "react";
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
    justify-content:center;
`

const CatsList = ({cats, handleAdoptMeClick}) => {
    const [count, setCount] = useState(0);

    const oneCat = cats.slice(count, count+1);

    const catData = oneCat.map((cat) => {
        return <li>
            <CatElement cat={cat} key={cat._id} handleAdoptMeClick={handleAdoptMeClick}/>
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
                    {catData}
                </ULFix>
            <NextPrev onClick={handleNext}><span>➡️</span></NextPrev>
        </Section>
    )

}

export default CatsList;