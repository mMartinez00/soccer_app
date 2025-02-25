import React from 'react';
import { generalHeaders, attackingHeaders, defendingHeaders } from '../table';

export default function TableHeaders({ currentStatistics }) {
    const headers =
        currentStatistics === 'General'
            ? generalHeaders
            : currentStatistics === 'Attacking'
            ? attackingHeaders
            : defendingHeaders;

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
