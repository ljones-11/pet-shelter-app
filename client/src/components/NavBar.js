import React from "react";
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const NavBar = () => {

const petLogo = require('../petlogo_nocolour.png')
const logoText = require('../logo_text.png')
const logoText2 = require('../logo_text_shadow.png')

    return(
        <>
            <header className="header-container">
                {/* <h1 className='title-h1'>furFinder</h1> */}
                <NavLink to="/" activeClassName="active">
                <div className="logo-nav-container">
                    <div className="logo-container">
                        <img className="logo-text-img" src={logoText2}/>
                        <em><h4 className="tagline">Swipe for a pawfect match!</h4></em>
                    </div>
                    <img className="logo-img" src={petLogo}/>
                </div>
                </NavLink>
                <nav className="nav-container">
                    <ul className="nav-ul">
                        <li>
                            <NavLink to="/" activeClassName="active">Home</NavLink><br/>
                        </li>
                        <li>
                            <NavLink to="/dogs" activeClassName="active">Dogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cats" activeClassName="active">Cats</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active">Admin</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
       
        </>
    )
}

export default NavBar;