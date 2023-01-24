import React from "react";
import { Link } from 'react-router-dom'


const NavBar = () => {

const petLogo = require('../petlogo_nocolour.png')
const logoText = require('../logo_text.png')
const logoText2 = require('../logo_text_shadow.png')

    return(
        <>
            <header className="header-container">
                {/* <h1 className='title-h1'>furFinder</h1> */}
                <div className="logo-nav-container">
                    <div className="logo-container">
                        <img className="logo-text-img" src={logoText2}/>
                        <em><h4 className="tagline">Swipe for a pawfect match!</h4></em>
                    </div>
                    <img className="logo-img" src={petLogo}/>
                </div>
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