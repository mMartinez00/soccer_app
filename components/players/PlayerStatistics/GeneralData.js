import React from 'react';

export default function GeneralData({ data }) {
    console.log(data);
    return (
        <>
            <td>
                {data.games.rating === null
                    ? (data.games.rating = ' ')
                    : parseInt(data.games.rating).toFixed(1)}
            </td>
            <td>{data.games.appearences}</td>
            <td>{data.games.lineups}</td>
            <td>{data.games.minutes}</td>
            <td>{data.fouls.commited}</td>
            <td>{data.fouls.drawn}</td>
            <td>{data.passes.total}</td>
            <td>{data.passes.key}</td>
            <td>{data.substitutes.in}</td>
            <td>{data.substitutes.out}</td>
        </>
    );
}
