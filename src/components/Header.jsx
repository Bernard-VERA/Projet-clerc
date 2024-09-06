import React from 'react';
import logo from '../assets/logo_black.png';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className='header-container'>
           
                <img className='logo' src={logo} alt="maison de justice"/>
            
            <nav className="navbar">
                <div className="navlink">
                    <Link className="nav" to="/">Accueil</Link>
                </div>
                <div className="navlink">
                    <Link className="nav" to="About">À Propos</Link>
                </div>
            </nav>
        </header>
       ) 
}

export default Header; 