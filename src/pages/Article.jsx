import React from 'react';
import articles from '../data/articles.json';
import { useParams } from 'react-router-dom';
import '../styles/Article.css';
import Error from './Error';
import { NavLink } from "react-router-dom";


// useParams est importé avec tous les autres composants, notament "articles.json"

const Article = () => {

    // Le hook "useParams" permet d'extraire les paramètres des logements (id) 
  const { id } = useParams()
  const article = articles.find(article => article.id === id)
  if (article === undefined) {
    return <Error />
  } // Si le logement est "undefined" on est renvoyé vers la page d'erreur

  return (
      <section className='article-page'>
      <img src = {article.picture} alt="illustration"/>
        <header className='article-page-header'>
                <article className='article-page-header-infos'>
                    <p className='article-page-header-infos-title'>{article.title}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description1}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description2}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description3}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description4}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description5}</p>
                </article>   
            </header>
            <main className='article-main'>
            <NavLink className="article-page-link" title="Accueil" end to="/">Retourner sur la page d'accueil</NavLink>
            </main>  
        </section>
    )
}

export default Article;