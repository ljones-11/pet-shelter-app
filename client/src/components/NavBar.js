import React from "react";
import { Link } from 'react-router-dom'


const NavBar = () => {

const petLogo = require('../petlogo_nocolour.png')

    return(
        <>
            <header className="header-container">
                <h1 className='title-h1'>furFinder</h1>
                <img className="logo-img" src={petLogo}/>
                <nav className="nav-container">
                    <ul className="nav-ul">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dogs">Dogs</Link>
                        </li>
                        <li>
                            <Link to="/cats">Cats</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </header>
       
        </>
    )
}

export default NavBar;