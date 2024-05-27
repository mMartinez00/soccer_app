import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTable({ tableHeaders, statistics }) {
    return (
        <>
            <table className="PlayersStatisticsTable">
                <TableHeaders headers={tableHeaders} />
                <TableBody statistics={statistics} />
            </table>
        </>
    );
}
