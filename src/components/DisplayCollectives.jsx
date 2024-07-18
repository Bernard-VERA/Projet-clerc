import React from 'react';
import collectives from '../data/collectives.json'
import Collective from './Collective'
import '../styles/DisplayCollectives.css'

//DisplayCards permet d'afficher les "Collectives" créées
const DisplayCollectives = () => {
    return(
        <section className='collectives-container'>
            <ul className='collectives-list'>
                {collectives.map(({ id, title, cover }) => (
                    <Collective
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    ) // "map" (utilisé entre accolades) permet d'intégrer tous les éléments de "Collective", sous forme de liste
}

export default DisplayCollectives;