import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'


const PageHome = styled.div`
    font-family: 'proxima-nova';
    color: #434343;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
`
const Title = styled.h1`
    text-align: center;
    padding: 0.5em;
    font-family: 'proxima-nova';
    color: #434343;
`

const Description = styled.h4`
    text-align: center;
    padding: 1em;
    display:block;
    max-width:50%;
    justify-content: space-between;
`
const Highlight = styled.mark`
    background-color: #fd5564;
`
const Image = styled.img`
    min-width: 480px;
    height: 282.4755px;
    display:flex;
    justify-content: flex-start;
`

const Buttons = styled.button`
    padding:0px 10px;
    margin: 1em;
`
const Homepage = () => {
    const navigate = useNavigate();

    const goToCats = () => {
        navigate("/cats")
    }

    const goToDogs = () => {
        navigate("/dogs")
    }

    return (
        <>
        <Title>Welcome to our Shelter!</Title>
        <PageHome>
            <Image src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></Image>
            <Description>We are a charity run by volunteers that keep animals safe,
                healthy and happy before going to their furever home. We launched <Highlight>furFinder</Highlight> as an easy means for humans to find their purrfect
                companion from our shelter and we hope to add more animal shelters
                across the country!
                <br></br>
                <Buttons onClick={goToCats}>Adopt a Cat</Buttons>
                <Buttons onClick={goToDogs}>Adopt a Dog</Buttons>
                </Description>
            
        </PageHome>

        </>
    )
}

export default Homepage;