import React from 'react';

const Card = ({ id, title, cover }) => {
    return(
        <li key={id} className='article'> 
            <a href={'/article/' + id}>
                <figure className='article-figure'>
                    <img src={cover} alt={title}  className='article-figure-cover'/>
                    <figcaption className='article-figure-figcaption'>
                        <h3 className='article-figure-figcaption-title'>{title}</h3>
                    </figcaption>
                </figure>
            </a> 
        </li> // "li" crée une liste des articles
    ) // "key" identifie tous les éléments, afin d'éviter des clés manquantes
}

export default Card;