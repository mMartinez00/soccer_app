import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function StandingsTable({ table }) {
    return (
        <div className="Standings-Table__Container" key={table[0].group}>
            <h3 className="Standings-Table__Group">{table[0].group}</h3>
            <table className={'Standings-Table'}>
                <TableHead />
                <TableBody table={table} />
            </table>
        </div>
    );
}
