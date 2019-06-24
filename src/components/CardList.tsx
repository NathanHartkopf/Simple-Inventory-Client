import React from 'react'
import { ItemCard } from './itemCard';
import { CardData } from '../types';

export function CardList(props: { cards: CardData[] }) {
    const { cards } = props
    console.log(cards)
    return (
        <>
            {cards.map(c => <ItemCard cost={c.cost} title={c.title} count={c.count} icon={c.icon} ></ItemCard>)}
        </>
    )
}