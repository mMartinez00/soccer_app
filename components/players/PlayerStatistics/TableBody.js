import React from 'react';
import { table } from '@/components/players/PlayerStatistics/table';
import Image from 'next/image';
import TableRow from './TableRow';

export default function TableBody({ statistics }) {
    return (
        <>
            <tbody>
                {statistics.map((stat) => {
                    return <TableRow key={stat.league.name} stat={stat} />;
                    // console.log(stat);
                })}
            </tbody>
        </>
    );
}
