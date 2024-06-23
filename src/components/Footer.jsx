import React from 'react';
import logo_white from '../assets/logo_1.png'
import '../styles/Footer.css';

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} className='footer-logo' alt='logo Kasa' />
            <p className='footer-text'><span>© 2024 Le clerc.</span> <span>Tous droits réservés</span></p>
        </footer>
    )
}

export default Footer