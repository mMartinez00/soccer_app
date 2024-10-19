import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function StandingsTable({ table }) {
    return (
        <div className="Stanings-Table__Container">
            <h2 className="Standings-Table__Group">{table[0].group}</h2>
            <table className={'Standings-Table'}>
                <TableHead />

                <TableBody table={table} />
            </table>
        </div>
    );
}
