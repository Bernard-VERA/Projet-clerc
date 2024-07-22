import React from 'react';
import collectives from '../data/collectives.json';
import { useParams } from 'react-router-dom';
import '../styles/Collective.css';
import Error from './Error';
import { NavLink } from "react-router-dom";


// useParams est importé avec tous les autres composants, notament "collectives.json"

const Collective = () => {

    // Le hook "useParams" permet d'extraire les paramètres des collectives (id) 
  const { id } = useParams()
  const collective = collectives.find(collective => collective.id === id)
  if (collective === undefined) {
    return <Error />
  } // Si l'collective est "undefined" on est renvoyé vers la page d'erreur

  return (
      <section className='collective-page'>
        <img src = {collective.picture} alt="illustration"/>
          <header className='collective-page-header'>
              <article className='collective-page-header-infos'>
                  <p className='collective-page-header-infos-title'>{collective.title}</p>
                  <p className='collective-page-header-infos-subtitle'>{collective.description1}</p>
                  <p className='collective-page-header-infos-subtitle'>{collective.description2}</p>
                  <img src = {collective.image} alt="illustration"/>
                  <p className='collective-page-header-infos-subtitle'>{collective.description3}</p>
              </article>   
          </header>
          <main className='collective-main'>
            <NavLink className="collective-page-link" title="Accueil" end to="/">Retourner sur la page d'accueil</NavLink>
          </main>  
      </section>
    )
}

export default Collective;