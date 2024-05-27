import React from 'react';

export default function AttackingData({ data }) {
    return (
        <>
            <td>{data.goals.total}</td>
            <td>{data.goals.assists}</td>
            <td>{data.shots.total}</td>
            <td>{data.shots.on}</td>
            <td>{data.dribbles.attempts}</td>
            <td>{data.dribbles.success}</td>
            <td>{data.penalty.scored}</td>
            <td>{data.penalty.won}</td>
        </>
    );
}
