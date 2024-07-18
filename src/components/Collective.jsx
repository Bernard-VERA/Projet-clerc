import React from 'react';

const Collective = ({ id, title, cover }) => {
    return(
        <li key={id} className='collective'> 
            <a href={'/collective/' + id}>
                <figure className='collective-figure'>
                    <img src={cover} alt={title}  className='collective-figure-cover'/>
                    <figcaption className='collective-figure-figcaption'>
                        <h2 className='collective-figure-figcaption-title'>{title}</h2>
                    </figcaption>
                </figure>
            </a> 
        </li> // "li" crée une liste des collecives
    ) // "key" identifie tous les éléments, afin d'éviter des clés manquantes
}

export default Collective;