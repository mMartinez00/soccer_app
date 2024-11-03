import React from 'react';
import TableRow from './TableRow';

export default function TableBody({ rows, typeOfData }) {
    return (
        <>
            <tbody>
                {rows &&
                    rows.map((stat) => {
                        return (
                            <TableRow
                                key={stat.league.name}
                                stat={stat}
                                typeOfData={typeOfData}
                            />
                        );
                    })}
            </tbody>
        </>
    );
}
