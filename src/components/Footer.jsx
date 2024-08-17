import React from 'react';
import logo_white from '../assets/logo_white.png'
import '../styles/Footer.css';

/* Permet de changer l'année du copyright automatiquement le 31 décembre */
 const year = new Date().getFullYear();
 document.querySelector('#year').textContent= year; 

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} className='footer-logo' alt='logo Kasa' />
            <p className='footer-text'>© <span id="year"></span> Le clerc.<br></br>Tous droits réservés</p>
        </footer>
    )
}

export default Footer