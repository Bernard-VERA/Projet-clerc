import React from 'react';
import ends from '../data/finals.json'
import End from './End'
import '../styles/DisplayEnds.css'

//DisplayEndss permet d'afficher les "Ends" créés
const DisplayEnds = () => {
    return(
        <section className='ends-container'>
            <ul className='ends-list'>
                {ends.map(({ id, title, cover }) => (
                    <End
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    ) // "map" (utilisé entre accolades) permet d'intégrer tous les éléments de "End", sous forme de liste
}

export default DisplayEnds;