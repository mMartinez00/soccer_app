import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTable({ tableRows, tableHeaders, index }) {
    return (
        <>
            <table className={`Statistics-Table Statistics-Table--${index}`}>
                <TableHeaders headers={tableHeaders} />
                <TableBody rows={tableRows} typeOfData={tableHeaders} />
            </table>
        </>
    );
}
