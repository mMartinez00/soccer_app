import React from 'react';

export default function DefendingData({ data }) {
    console.log(data);
    return (
        <>
            <td>{data.tackles.total}</td>
            <td>{data.tackles.blocks}</td>
            <td>{data.tackles.interceptions}</td>
            <td>{data.cards.yellow}</td>
            <td>{data.cards.red}</td>
            <td>{data.duels.total}</td>
            <td>{data.duels.won}</td>
            <td>{data.dribbles.past}</td>
            <td>{data.goals.saves}</td>
            <td>{data.goals.conceded}</td>
            <td>{data.penalty.saved}</td>
            <td>{data.penalty.commited}</td>
        </>
    );
}
