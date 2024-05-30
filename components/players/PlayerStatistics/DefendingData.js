import React from 'react';
import { convertNullToZero } from './table';

export default function DefendingData({ data }) {
    return (
        <>
            <td>{convertNullToZero(data.tackles.total)}</td>
            <td>{convertNullToZero(data.tackles.blocks)}</td>
            <td>{convertNullToZero(data.tackles.interceptions)}</td>
            <td>{convertNullToZero(data.cards.yellow)}</td>
            <td>{convertNullToZero(data.cards.red)}</td>
            <td>{convertNullToZero(data.duels.total)}</td>
            <td>{convertNullToZero(data.duels.won)}</td>
            <td>{convertNullToZero(data.dribbles.past)}</td>
            <td>{convertNullToZero(data.goals.saves)}</td>
            <td>{convertNullToZero(data.goals.conceded)}</td>
            <td>{convertNullToZero(data.penalty.saved)}</td>
            <td>{convertNullToZero(data.penalty.commited)}</td>
        </>
    );
}
