import React from "react";
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from '../containers/Homepage';
import DogContainer from '../containers/DogContainer';
import CatContainer from '../containers/CatContainer';
import AdminContainer from '../containers/AdminContainer';

const NavBar = () => {

const petLogo = require('../petlogo_nocolour.png')

    return(
        <Router>
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
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/dogs' element={<DogContainer />} />
                <Route path='/cats' element={<CatContainer />} />
                <Route path='/admin' element={<AdminContainer />} />
            </Routes>
            
        </Router>
    )
}

export default NavBar;