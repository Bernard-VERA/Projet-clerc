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
  } // Si collective est "undefined" on est renvoyé vers la page d'erreur
   
   

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
                  <ul >
                    <li className='collective-page-header-infos-list'>{collective.text1}</li>
                    <li className='collective-page-header-infos-list'>{collective.text2}</li>
                    <li className='collective-page-header-infos-list'>{collective.text3}</li>
                    <li className='collective-page-header-infos-list'>{collective.text4}</li>
                    <li className='collective-page-header-infos-list'>{collective.text5}</li>
                    <li className='collective-page-header-infos-list'>{collective.text6}</li>
                    <li className='collective-page-header-infos-list'>{collective.text7}</li>
                    <li className='collective-page-header-infos-list'>{collective.text8}</li>
                    <li className='collective-page-header-infos-list'>{collective.text9}</li>
                    <li className='collective-page-header-infos-list'>{collective.text10}</li>
                    <li className='collective-page-header-infos-list'>{collective.text11}</li>
                    <li className='collective-page-header-infos-list'>{collective.text12}</li>
                    <li className='collective-page-header-infos-list'>{collective.text13}</li>
                  </ul>
                  <p className='collective-page-header-infos-subtitle'>{collective.description4}</p>
              </article>   
          </header>
          <main className='collective-main'>
            <NavLink className="collective-page-link" title="Accueil" end to="/">Retourner sur la page d'accueil</NavLink>
          </main>  
      </section>
    )
}

export default Collective;