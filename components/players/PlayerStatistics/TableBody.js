import React from 'react';
import { table } from '@/components/players/PlayerStatistics/table';

function filterObj(data, typeOfData) {
    const entries = Object.entries(data);

    return entries;
}

export default function TableBody({ statistics }) {
    const general = filterObj(statistics, table.General.Objects);
    const defending = filterObj(statistics, table.Defending.Objects);
    const attack = filterObj(statistics, table.Attacking.Objects);

    // console.log(Object.keys(statistics));

    return (
        <>
            <tbody>
                <tr>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                </tr>
            </tbody>
        </>
    );
}
