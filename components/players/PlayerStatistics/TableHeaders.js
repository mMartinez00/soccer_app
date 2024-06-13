import React from 'react';
import { table } from '../table';

export default function TableHeaders({ headers }) {
    const tableHeaders = function () {
        if (headers === 'General') {
            return table.General.headers.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }

        if (headers === 'Attacking') {
            return table.Attacking.headers.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }

        if (headers === 'Defending') {
            return table.Defending.headers.map((header) => {
                return <th key={header}>{header}</th>;
            });
        }
    };

    return (
        <>
            <thead>
                <tr>
                    <th>League</th>
                    {tableHeaders()}
                </tr>
            </thead>
        </>
    );
}
