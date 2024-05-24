import React from 'react';
import TableRow from './TableRow';

export default function TableBody({ table }) {
    return (
        <>
            <tbody>
                {table.map((team) => (
                    <TableRow key={team.rank} team={team} />
                ))}
            </tbody>
        </>
    );
}
