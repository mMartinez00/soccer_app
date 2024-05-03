import React from 'react';
import TableHeaders from './TableHeaders';
import tableHeaders from './table';

export default function StatisticsTable({ stats, statistics }) {
    const a = function () {
        if (stats === 'General') {
            return tableHeaders.General.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }

        if (stats === 'Attacking') {
            return tableHeaders.Attacking.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }

        if (stats === 'Defending') {
            return tableHeaders.Defending.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }
    };

    // console.log(statistics);
    // console.log(stats);
    // console.log(tableHeaders.Attacking);
    return (
        <>
            <table className="PlayersStatisticsTable">
                <TableHeaders headers={a()} />
            </table>
        </>
    );
}
