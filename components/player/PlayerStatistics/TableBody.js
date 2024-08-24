import React from 'react';
// import { table } from '@/components/players/table';
// import Image from 'next/image';
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
