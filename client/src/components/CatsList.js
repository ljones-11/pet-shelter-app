import CatElement from "./CatElement";
import { useState } from "react";
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


const CatsList = ({cats, handleAdoptMeClick}) => {
    const [count, setCount] = useState(0);

    const left = require('../leftchevron.png');
    const right = require('../rightchevron.png');

    const oneCat = cats.slice(count, count+1);

    const catData = oneCat.map((cat) => {
        return <li>
            <CatElement cat={cat} key={cat._id} handleAdoptMeClick={handleAdoptMeClick}/>
            </li>
    })

    const handleNext = () => {
        if (cats.length+1 > count){
            setCount(count+1)
        } if (cats.length-1 <= count) {
            setCount(0);
        }

    }

    const handlePrevious = () => {
        if (count > 0){
            setCount(count-1)
        } else {
            setCount(cats.length-1);
        }
    }

    return (
        <Section>
            <NextPrev onClick={handlePrevious}><ChevFix src={left}></ChevFix></NextPrev>
                <ULFix>
                    {catData}
                </ULFix>
            <NextPrev onClick={handleNext}><ChevFix src={right}></ChevFix></NextPrev>
        </Section>
    )

}

export default CatsList;