import React from 'react';
import articles from '../data/articles.json'
import Card from './Card'
import '../styles/DisplayCards.css'

//DisplayCards permet d'afficher les "Cards" créées
const DisplayCards = () => {
    return(
        <section className='articles-container'>
            <ul className='articles-list'>
                {articles.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    ) // "map" (utilisé entre accolades) permet d'intégrer tous les éléments de "Card", sous forme de liste
}

export default DisplayCards;