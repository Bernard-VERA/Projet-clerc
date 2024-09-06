import React from 'react';
import ends from '../data/finals.json';
import { useParams } from 'react-router-dom';
import '../styles/End.css';
import Error from './Error';
import { NavLink } from "react-router-dom";


// useParams est importé avec tous les autres composants, notament "ends.json"

const End = () => {

    // Le hook "useParams" permet d'extraire les paramètres des ends (id) 
  const { id } = useParams()
  const end = ends.find(end => end.id === id)
  if (end === undefined) {
    return <Error />
  } // Si end est "undefined" on est renvoyé vers la page d'erreur

  return (
      <section className='end-page'>
          <header className='end-page-header'>
              <article className='end-page-header-infos'>
                  <p className='end-page-header-infos-title'>{end.title}</p>
                  <p className='end-page-header-infos-subtitle'>{end.description1}</p>
                  <a className='end-page-header-infos-link-container' href={end.url} target="_blank" rel="noopener noreferrer">
                    <img className='end-page-header-infos-link-img' src = {end.picture} alt="illustration"/>
                    </a>
              </article>   
          </header>
          <main className='end-main'>
            <NavLink className="end-page-link" title="Accueil" end to="/">Retourner sur la page d'accueil</NavLink>
          </main>  
      </section>
    )
}

export default End;