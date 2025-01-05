import React from 'react';
import { table } from '../table';

export default function TableHeaders({ currentStatistics }) {
    const headers =
        currentStatistics === 'General'
            ? table.General.headers
            : currentStatistics === 'Attacking'
            ? table.Attacking.headers
            : table.Defending.headers;

    return (
        <>
            <thead>
                <tr>
                    <th>League</th>
                    {headers.map((header) => {
                        return (
                            <>
                                <th key={header}>{header}</th>
                            </>
                        );
                    })}
                </tr>
            </thead>
        </>
    );
}
