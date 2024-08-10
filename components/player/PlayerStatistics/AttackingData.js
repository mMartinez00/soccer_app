import React from 'react';
import { convertNullToZero } from '@/utils/utils';

export default function AttackingData({ data }) {
    return (
        <>
            <td>{convertNullToZero(data.goals.total)}</td>
            <td>{convertNullToZero(data.goals.assists)}</td>
            <td>{convertNullToZero(data.shots.total)}</td>
            <td>{convertNullToZero(data.shots.on)}</td>
            <td>{convertNullToZero(data.dribbles.attempts)}</td>
            <td>{convertNullToZero(data.dribbles.success)}</td>
            <td>{convertNullToZero(data.penalty.scored)}</td>
            <td>{convertNullToZero(data.penalty.won)}</td>
        </>
    );
}
