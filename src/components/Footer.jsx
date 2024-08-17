import React from 'react';
import logo_white from '../assets/logo_white.png'
import '../styles/Footer.css';

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} className='footer-logo' alt='logo Kasa' />
            <p className='footer-text'><span>© 2024 Le clerc.<br></br>Tous droits réservés</span></p>
        </footer>
    )
}

export default Footer