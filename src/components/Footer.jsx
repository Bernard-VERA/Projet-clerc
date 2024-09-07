import React from 'react';
import logo_white from '../assets/logo_white.png'
import '../styles/Footer.css';

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} width="190" height="78" className='footer-logo' alt='logo Kasa' />
            <h4 className='footer-text'><span>© 2024 Le clerc.<br></br>Tous droits réservés</span></h4>
        </footer>
    )
}

export default Footer