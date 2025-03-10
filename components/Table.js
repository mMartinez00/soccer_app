import React from 'react';
import TableHead from './TableHead';
import {
    generalHeaders,
    attackingHeaders,
    defendingHeaders,
    standingsHeaders,
} from './player/table';

export default function Table({ type, data, currentStatistics }) {
    const statisticsHeaders =
        currentStatistics === 'General'
            ? generalHeaders
            : currentStatistics === 'Attacking'
            ? attackingHeaders
            : defendingHeaders;

    return (
        <table className={`${type}-Table`}>
            {type === 'Standings' ? (
                <TableHead headers={standingsHeaders} />
            ) : (
                <TableHead headers={statisticsHeaders} />
            )}
        </table>
    );
}
