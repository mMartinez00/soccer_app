import React from 'react';

function totalCards(cards) {
    const sumOfCards = Object.values(cards).reduce(
        (accumulator, currentValue) => {
            currentValue.total === null
                ? (currentValue.total = 0)
                : currentValue.total;

            return accumulator + currentValue.total;
        },
        0
    );

    return sumOfCards;
}

export default function Cards({ cards }) {
    const yellowCards = totalCards(cards.yellow);

    const redCards = totalCards(cards.red);

    return (
        <>
            <h2 className="cardsHeading">Cards:</h2>
            <p className="yellowCards">Yellow: {yellowCards}</p>
            <p className="redCards">Red: {redCards}</p>
        </>
    );
}
