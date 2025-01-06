import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTables({ tables, currentStatistics }) {
    return (
        <>
            {tables.map((rows, index) => {
                return (
                    <table
                        className={`Statistics-Table Statistics-Table--${index}`}
                    >
                        <TableHeaders currentStatistics={currentStatistics} />
                        <TableBody
                            rows={rows}
                            currentStatistics={currentStatistics}
                        />
                    </table>
                );
            })}
        </>
    );
}
