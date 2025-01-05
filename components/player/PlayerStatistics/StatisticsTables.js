import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTables({ tables, currentStatistics }) {
    // console.log(index);
    // console.log(currentStatistics);
    // console.log(tables);
    return (
        <>
            {tables.map((row, index) => {
                const teamName = row[0].team.name;
                return (
                    <table
                        className={`Statistics-Table Statistics-Table--${index}`}
                    >
                        <TableHeaders currentStatistics={currentStatistics} />
                        <TableBody rows={row} />
                    </table>
                );
            })}
        </>
    );
}
