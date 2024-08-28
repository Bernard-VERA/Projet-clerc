import React from "react";
import dame_justice from '../assets/dame_justice.jpg';
import '../styles/About.css'


export default function About () {

    return (
        <main className="about-main">
            <h1>Le clerc du commissaire de justice</h1>
            <div className="first-container">
                <div className="first-container-left">
                    <img className="first-about-image" src={dame_justice} alt="La justice"></img>
                </div>
                <div className="first-container-right">
                    <div className="first-container-right-up">
                        <h2>À propos de l'auteur</h2>
                        <p>Clerc d'huissier pendant 35 ans, j'ai toujours été curieux de savoir quels étaient mes droits et devoirs en tant qu'employé. Ma passion pour l'informatique m'a permis de partager et diffuser mes connaissances sur Internet, en créant ce site web. (Bernard VERA)</p>
                    </div>
                    <div className="first-container-right-down">
                        <h2>À propos du site</h2>
                        <p>Après une reconversion en Développeur Web, j'ai décidé de mettre à jour l'ancien site "Le clerc d'huissier" qui était démodé et obsolète. Une refonte complète était nécessaire. Le nouveau site est moderne, plus attrayant, et adapté aux tablettes et mobiles. Il tient compte de la récente réforme de la profession.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}