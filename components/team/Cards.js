import React from 'react';

function totalCards(accumulator, currentValue) {
    currentValue.total === null ? (currentValue.total = 0) : currentValue.total;

    return accumulator + currentValue.total;
}

export default function Cards({ cards }) {
    const yellowCards = Object.values(cards.yellow).reduce(totalCards, 0);

    const redCards = Object.values(cards.red).reduce(totalCards, 0);

    return (
        <>
            <p className="yellowCards">Yellow Cards: {yellowCards}</p>
            <p className="redCards">Red Cards: {redCards}</p>
        </>
    );
}
