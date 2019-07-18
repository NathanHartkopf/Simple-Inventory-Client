import React from 'react'
import { ItemCard } from './itemCard';
import { ITEM } from '../types/types';

export function CardList(props: {cards: ITEM[]}) {
    let { cards } = props;
    console.log(cards)
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a href="/" className="navbar-brand mb-0 h1">Items</a>
            </nav>
            {cards.map((card, i) => <ItemCard cardData={card} key={i} ></ItemCard>)}
        </>
    )
}