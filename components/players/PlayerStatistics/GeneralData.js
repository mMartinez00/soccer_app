import React from 'react';
import { convertNullToZero } from '@/components/players/utils';

export default function GeneralData({ data }) {
    return (
        <>
            <td>
                {convertNullToZero(data.games.rating) === 0
                    ? 'N/A'
                    : parseFloat(convertNullToZero(data.games.rating)).toFixed(
                          1
                      )}
            </td>
            <td>{convertNullToZero(data.games.appearences)}</td>
            <td>{convertNullToZero(data.games.lineups)}</td>
            <td>{convertNullToZero(data.games.minutes)}</td>
            <td>{convertNullToZero(data.fouls.committed)}</td>
            <td>{convertNullToZero(data.fouls.drawn)}</td>
            <td>{convertNullToZero(data.passes.total)}</td>
            <td>{convertNullToZero(data.passes.key)}</td>
            <td>{convertNullToZero(data.substitutes.in)}</td>
            <td>{convertNullToZero(data.substitutes.out)}</td>
        </>
    );
}
