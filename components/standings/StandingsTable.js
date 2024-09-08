import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function StandingsTable({ table }) {
    return (
        <>
            <h2>{table[0].group}</h2>
            <table className={`Standings_Table ${table[0].group}`}>
                <TableHead />

                <TableBody table={table} />
            </table>
        </>
    );
}
