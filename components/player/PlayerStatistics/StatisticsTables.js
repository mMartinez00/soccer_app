import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTables({ tables, currentStatistics }) {
    return (
        <>
            {tables.map((rows) => {
                return (
                    <table className="Statistics-Table keen-slider__slide">
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
