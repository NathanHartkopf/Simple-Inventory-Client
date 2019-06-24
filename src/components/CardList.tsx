import React from 'react'
import { ItemCard } from './itemCard';
import { CardData } from '../types';

export function CardList(props: { cards: CardData[] }) {
    const { cards } = props
    console.log(cards)
    return (
        <>
            {cards.map((card, i) => <ItemCard cardData={card} key={i} ></ItemCard>)}
        </>
    )
}