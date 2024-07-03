import React from 'react';
import articles from '../data/articles.json';
import { useParams } from 'react-router-dom';
import '../styles/Article.css';
import Error from './Error';


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
      <img src = {article.picture} alt="detail"/>
        <header className='article-page-header'>
                <article className='article-page-header-infos'>
                    <p className='article-page-header-infos-title'>{article.title}</p>
                    <p className='article-page-header-infos-subtitle'>{article.description}</p>
                    
                </article> 
            
                
            </header>

            
        </section>
    )
}
// Dans "Header" et "Equipement" les paramètres sont récupérés par "map" qui crée un tableau, avec les listes créées par "key" (props) 

export default Article;