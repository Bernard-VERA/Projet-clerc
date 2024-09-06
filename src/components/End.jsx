import React from 'react';


const End = ({ id, title, cover }) => {
    return(
        <li key={id} className='end'> 
            <a href={'/end/' + id}>
                <figure className='end-figure'>
                    <img src={cover} alt="" loading="lazy" width="720" height="300" className='end-figure-cover'/>
                    <figcaption className='end-figure-figcaption'>
                        <h3 className='end-figure-figcaption-title'>{title}</h3>
                    </figcaption>
                </figure>
            </a> 
        </li> // "li" crée une liste des ends
    ) // "key" identifie tous les éléments, afin d'éviter des clés manquantes
}

export default End;