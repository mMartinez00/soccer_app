import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTables({ tables, currentStatistics }) {
    return (
        <>
            {tables.map((rows) => {
                return (
                    <div className="Statistics-Tables__Container keen-slider__slide">
                        <table className="Statistics-Table">
                            <TableHeaders
                                currentStatistics={currentStatistics}
                            />
                            <TableBody
                                rows={rows}
                                currentStatistics={currentStatistics}
                            />
                        </table>
                    </div>
                );
            })}
        </>
    );
}
